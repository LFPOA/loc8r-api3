var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations page. */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.
        route('/location/:locationid/review/new')
        .get(ctrlLocations.addReview)
        .post(ctrlLocations.doAddReview);
/* about page. */
router.get('/about', ctrlOthers.about);

module.exports = router;
