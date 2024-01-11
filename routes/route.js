const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h1>Hi Server!</h1>');
})

module.exports = router;