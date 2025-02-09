import express from 'express';
import multer from 'multer';
import mysql from 'mysql';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure Multer storage
const storage = multer.diskStorage({
  destination: `${__dirname}/uploads/`,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 }, // Max file size: 1MB
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image file'));
    }
    cb(null, true);
  }
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'arjun',
  password: '23042005',
  database: 'crisis_compass'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

router.get('/', (req, res) => {
  res.render('report.ejs'); 
});

router.post('/', upload.array('pictures', 12), (req, res) => {
  const { name, email, phone, date, type, location, severity, description } = req.body;

  if (!name || !email || !phone || !date || !type || !location || !severity || !description) {
    return res.status(400).send('Please fill in all required fields');
  }

  const sql = "INSERT INTO disaster_reports (name, email, phone, date, type, location, severity, description, pictures) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const pictures = req.files.map(file => file.filename);

  db.query(sql, [name, email, phone, date, type, location, severity, description, JSON.stringify(pictures)], (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      return res.status(500).send('Internal Server Error');
    }
    res.send('Report submitted successfully!');
  });
});

export default router;