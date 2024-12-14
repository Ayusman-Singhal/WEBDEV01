const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const dest = file.fieldname === 'photo' ? 'uploads/photos' : 'uploads/documents';
    cb(null, dest);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function(req, file, cb) {
    if (file.fieldname === 'photo') {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
      }
    } else if (file.fieldname === 'certificates') {
      if (!file.originalname.match(/\.(pdf|doc|docx)$/)) {
        return cb(new Error('Only PDF and DOC files are allowed!'), false);
      }
    }
    cb(null, true);
  }
});

// Register tutor route
router.post('/register', 
  auth, 
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'certificates', maxCount: 5 }
  ]),
  async (req, res) => {
    try {
      const userId = req.user.userId;
      const tutorData = JSON.parse(req.body.tutorData);
      
      // Update user to teacher type with provided data
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          userType: 'teacher',
          profile: {
            ...tutorData,
            photo: req.files['photo'] ? req.files['photo'][0].path : null,
            certificates: req.files['certificates'] ? 
              req.files['certificates'].map(file => file.path) : [],
          },
          subscription: {
            type: 'individual',
            startDate: new Date(),
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days trial
            status: 'active'
          }
        },
        { new: true }
      );

      res.json({
        message: 'Tutor registration successful',
        user: updatedUser
      });
    } catch (error) {
      console.error('Tutor registration error:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
);

module.exports = router;