const router = require('express').Router();
const {
    getAllAnime,
} = require('../controllers/controller');

router.get('/', getAllAnime);

module.exports = router;