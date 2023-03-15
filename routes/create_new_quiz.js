const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('create_new_quiz');
});

router.post('/', (req, res) => {
  res.send(req.body);
})
module.exports = router;