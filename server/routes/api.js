const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({
    'message': 'Well, Hello, user!'
  })
});

router.get('/test', (req, res) => {
  res.json({
    'status': 'Ok'
  })
});

module.exports = router;
