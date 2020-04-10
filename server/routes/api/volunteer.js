const router = require('express').Router();
const jwt = require('jsonwebtoken');
let Organization = require('../../models/org.model');
let Admin = require('../../models/admin.model');
let Shift = require('../../models/shift.model');
let volShift = require('../../models/volunteerShift.model');


router.route('/shift').delete((req, res) => {
    volShift.findOneAndDelete({id: req.params.id})
    .then(() => res.json('Success, volunteer shift deleted'))
    .catch(err => res.status(400).json('Uhoh, error while deleting volunteer shift: ' + err));
});

router.route('/shift').post((req, res) => {
    const volunteer = req.body.volunteer;
    //const startTime = req.body.startTime;
    //const endTime = req.body.endTime;
    const shift = req.body.shift;
    const organization = req.body.organization;

    const newVolShift = new volShift({volunteer, shift, organization});

    newVolShift.save()
    .then(() => 
    {
        console.log(newVolShift);
        res.json('Success, new volunteer shift created')
    })
    .catch(err => res.status(400).json('Uhoh, error while adding new volunteer shift: ' + err));
});

module.exports = router;