const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Musiclist Alpha' });
});

const testJSON = [
    {
      name: 'John Smith',
      username: 'CaptainCode'
    },
    {
      name: 'Jane Doe',
      username: 'JaneyCakes'
    }
  ];

router.get('/sendjson', (req, res, next) => {
    res.json(testJSON)
});

module.exports = router;
