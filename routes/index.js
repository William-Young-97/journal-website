const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  // res.sendStatus(200);
});

//   router.post('/', function (req, res){ POST req here failing tests
//   res.render('index');
//   res.sendStatus(201);
// });


module.exports = router;
