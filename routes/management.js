import express from 'express';
import { disasters } from '../data/disasters.js';

const router = express.Router();

// Route for displaying all disasters
router.get('/', (req, res) => {
  res.render('management', { disasters });
});

// Route for displaying disaster details
router.get('/disaster/:id', (req, res) => {
  const disasterId = parseInt(req.params.id, 10);
  const disaster = disasters.find(d => d.id === disasterId);

  if (disaster) {
    res.render('disaster-details', { disaster });
  } else {
    res.status(404).send('Disaster not found');
  }
});

export default router;