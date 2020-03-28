const router = require('express').Router();
let Volunteer = require('../models/volunteers.model');

router.route('/').get((req, res) => {
    Volunteer.find()
    .then(volunteers => res.json(volunteers))
    .catch(err => res.status(400).json('Uhoh, error while retrieving volunteers: ' + err));
});

router.route('/:username').delete((req, res) => {
    Volunteer.findOneAndDelete({username: req.params.username})
    .then(() => res.json('Success, volunteer deleted'))
    .catch(err => res.status(400).json('Uhoh, error while deleting volunteer: ' + err));
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const volEmail = req.body.volEmail;
    const shifts = [];
    const organizations = [];
    const newVol = new Volunteer({name, username, password, volEmail, shifts, organizations});
   
    newVol.save()
    .then(() => res.json('Success, new volunteer added'))
    .catch(err => res.status(400).json('Uhoh, error while adding new volunteer: ' + err));
});

module.exports = router;