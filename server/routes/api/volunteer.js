const router = require('express').Router();
let Volunteer = require('../../models/volunteer.model');

router.route('/').get((req, res) => {
    Volunteer.find()
    .then(volunteers => res.json(volunteers))
    .catch(err => res.status(400).json('Uhoh, error while retrieving volunteers: ' + err));
});

router.route('/:username').delete((req, res) => {
    Volunteer.findOneAndDelete({username: req.params.username})
    .then(() => res.json('Success, volunteer deleted'))
    .catch(err => res.status(400).json('Uhoh, error while deleting volunteer: ' + err));
});

module.exports = router;