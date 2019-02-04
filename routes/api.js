var express = require('express');
var router = express.Router();
const sleep = (ms) => (new Promise(resolve => { setTimeout(resolve, ms) }))

let players = [];

/* GET users listing. */
router.get('/players', async function (req, res, next) {
  await sleep(Math.random() * 500 + 200);
  //console.log(players);
  res.json(players);
});

router.post('/players', async function (req, res, next) {
  //console.log(req.body);
  await sleep(Math.random() * 500 + 200);
  let player = {
    name: req.body.name,
    email: req.body.email
  }
  players.push(player);
  res.json(player);
});


/* GET users listing. */
router.post('/login', async function (req, res, next) {
  //console.log(req.body);
  await sleep(Math.random() * 500 + 200);
  res.json({
    status: "This is my response"
  });
});

module.exports = router;
