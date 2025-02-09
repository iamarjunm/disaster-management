// about.js
import express from 'express';

const router = express.Router();

// Route for the "About Us" page
router.get('/', (req, res) => {
  res.render('about', {
    title: 'About Us - Crisis Compass',
    description: 'Learn more about Crisis Compass, our mission to educate and assist people in managing disasters effectively.',
  });
});

export default router;
