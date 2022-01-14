const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
  // res.sendStatus(200);
});

  router.post('/', function (req, res){
    res.send(req.body)
    res.sendStatus(201);
    // res.render('index');
});


module.exports = router;
