import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { adminAuth } from './index.js'; 
import { createDbConnection } from '../utils/db.js';

const db = await createDbConnection();

const router = express.Router();

// Admin login page
router.get('/login', (req, res) => {
  res.render('admin-login', { error: null }); // Pass an object with error property
});

// Admin login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const adminUsername = 'admin';
  const adminPasswordHash = process.env.ADMIN_HASHED_PASSWORD;

  if (!adminPasswordHash) {
    console.error('ADMIN_HASHED_PASSWORD environment variable is not set');
    return res.status(500).send('Internal Server Error');
  }

  if (username === adminUsername) {
    if (password && adminPasswordHash) {
      const isValidPassword = await bcrypt.compare(password, adminPasswordHash);
      if (isValidPassword) {
        const token = jwt.sign({ username: adminUsername }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.cookie('auth-token', token, { httpOnly: true });
        res.redirect('/admin');
      } else {
        res.render('admin-login', { error: 'Invalid password' });
      }
    } else {
      res.render('admin-login', { error: 'Invalid password' });
    }
  } else {
    res.render('admin-login', { error: 'Invalid username' });
  }
});

async function getPendingReports() {
  try {
    const [rows] = await pool.query('SELECT * FROM disaster_reports WHERE status = "pending"');
    return rows; // Return the result set (list of pending reports)
  } catch (error) {
    console.error('Error fetching pending reports:', error);
    throw error; // Propagate the error to handle it in the route
  }
}


router.get('/admin', adminAuth, async (req, res) => {
  try {
    const [results] = await db.execute('SELECT * FROM disaster_reports ORDER BY severity DESC');
    results.forEach((result) => {
      if (result.pictures) {
        result.pictures = JSON.parse(result.pictures);
      }
    });
    const pendingReports = results.filter((report) => report.status === 'pending');
    const assignedReports = results.filter((report) => report.status === 'assigned');
    const resolvedReports = results.filter((report) => report.status === 'resolved');
    res.render('admin', { pendingReports, assignedReports, resolvedReports });
  } catch (err) {
    console.error('Error retrieving data:', err);
    return res.status(500).send('Internal Server Error');
  }
});

router.get('/', adminAuth, async (req, res) => {
  try {
    const [results] = await db.execute('SELECT * FROM disaster_reports ORDER BY severity DESC');
    results.forEach((result) => {
      if (result.pictures) {
        result.pictures = JSON.parse(result.pictures);
      }
    });
    const pendingReports = results.filter((report) => report.status === 'pending');
    const assignedReports = results.filter((report) => report.status === 'assigned');
    const resolvedReports = results.filter((report) => report.status === 'resolved');
    res.render('admin', { pendingReports, assignedReports, resolvedReports });
  } catch (err) {
    console.error('Error retrieving data:', err);
    return res.status(500).send('Internal Server Error');
  }
});

router.post('/:reportId/assign-authority', adminAuth, async (req, res) => {
  const { reportId } = req.params;
  const { authority } = req.body;
  try {
    await db.execute('UPDATE disaster_reports SET authority = ? WHERE id = ?', [authority, reportId]);
    res.json({ success: true, message: 'Authority assigned successfully.' });
  } catch (err) {
    console.error('Error assigning authority:', err);
    res.status(500).json({ success: false, message: 'Failed to assign authority.' });
  }
});

router.post('/:reportId/assign', adminAuth, async (req, res) => {
  const { reportId } = req.params;
  try {
    await db.execute('UPDATE disaster_reports SET status = "assigned" WHERE id = ?', [reportId]);
    res.json({ success: true, message: 'Report assigned successfully.' });
  } catch (err) {
    console.error('Error assigning report:', err);
    res.status(500).json({ success: false, message: 'Failed to assign report.' });
  }
});

router.post('/:reportId/mark-resolved', adminAuth, async (req, res) => {
  const { reportId } = req.params;
  try {
    await db.execute('UPDATE disaster_reports SET status = "resolved" WHERE id = ?', [reportId]);
    res.json({ success: true, message: 'Report marked as resolved.' });
  } catch (err) {
    console.error('Error marking report as resolved:', err);
    res.status(500).json({ success: false, message: 'Failed to mark report as resolved.' });
  }
});


export default router;