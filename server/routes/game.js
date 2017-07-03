const express = require('express');
const router = express.Router();

let games = [
  {
    id: 1,
    name: 'First Game',
    status: 'TIE'
  },
  {
    id: 2,
    name: 'Second Game',
    status: 'IN_PROGRESS'
  },
  {
    id: 3,
    name: 'Third game',
    status: 'FIRST_PLAYER_WON'
  },
  {
    id: 4,
    name: 'Fourth game',
    status: 'SECOND_PLAYER_WON'
  }
];

router.get('/', (request, response) => {
  response.json(games);
});

router.post('/', (request, response) => {
  let gameCreation = request.body;

  games.push({
    id: games.length + 1,
    name: gameCreation.name,
    status: 'IN_PROGRESS'
  });

  response.sendStatus(200);
});

module.exports = router;
