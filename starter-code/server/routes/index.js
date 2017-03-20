const express       = require('express');
const journalRoutes = require('./api/journal-entries');
const router        = express.Router();

router.use('/api', journalRoutes);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
