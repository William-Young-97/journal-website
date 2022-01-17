const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {noteTitle: req.body.noteTitle, noteBody: req.body.noteTitle});
});

router.post('/', function (req, res){
  res.send(req.body);
});


module.exports = router;
