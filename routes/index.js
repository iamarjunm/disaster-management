import express from 'express';
import jwt from 'jsonwebtoken';
import { disasters } from '../data/disasters.js';

const router = express.Router();

// Admin Authentication Middleware
const adminAuth = (req, res, next) => {
  const token = req.cookies['auth-token']; // Check for token in cookies
  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// Routes
router.get("/", (req, res) => {
  res.render("index.ejs");
});

export { adminAuth };
export default router;