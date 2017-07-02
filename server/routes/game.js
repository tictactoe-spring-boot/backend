const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      'id': 1,
      'name': 'First Game',
      'status': 'TIE'
    },
    {
      'id': 2,
      'name': 'Second Game',
      'status': 'IN_PROGRESS'
    },
    {
      'id': 3,
      'name': 'Third game',
      'status': 'FIRST_PLAYER_WON'
    },
    {
      'id': 4,
      'name': 'Fourth game',
      'status': 'SECOND_PLAYER_WON'
    }
  ]);
});

module.exports = router;
