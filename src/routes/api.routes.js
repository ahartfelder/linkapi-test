const router = require('express').Router();

router.get('/users', (req, res) => res.send('Users'));

module.exports = router;
