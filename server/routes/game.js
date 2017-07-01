const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      'id': 1,
      'name': 'First Game',
      'status': 'BAD'
    },
    {
      'id': 2,
      'name': 'Second Game',
      'status': 'IN_PROGRESS'
    }
  ]);
});

module.exports = router;
