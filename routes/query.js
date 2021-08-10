const express = require('express');
const router = express.Router();

/* POST query page. */
router.post('/', function(req, res, next) {
    let q = req.body;
    let n = q['name'];
    res.render('detail', { 'name': n});
});

module.exports = router;