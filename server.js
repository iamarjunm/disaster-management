import express from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { createDbConnection } from './utils/db.js'; // Import the createDbConnection function

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Configure Multer storage
const storage = multer.diskStorage({
  destination: join(__dirname, process.env.UPLOAD_DIR),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image file'));
    }
    cb(null, true);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(helmet());
app.use(cookieParser());

// Define routes
import indexRoutes from './routes/index.js';
import reportRoutes from './routes/report.js';
import adminRoutes from './routes/admin.js';
import managementRoutes from './routes/management.js';
import aboutRouter from './routes/about.js';

app.use('/', indexRoutes);
app.use('/report', reportRoutes);
app.use('/admin', adminRoutes);
app.use('/management', managementRoutes);
app.use('/about', aboutRouter);

let db;
createDbConnection().then(connection => {
  db = connection;
  // Start the server after the DB connection is established
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err);
});
