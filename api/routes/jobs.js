var express = require('express');
var router = express.Router();

const jobsCtrl = require('../controllers/jobs')

router.get('/', jobsCtrl.getAll);
router.get('/:id', jobsCtrl.show);
router.post('/create', jobsCtrl.create);
router.delete('/:id', jobsCtrl.delete);
router.put('/:id', jobsCtrl.update);
// router.get('/search', jobsCtrl.search);
module.exports = router;
