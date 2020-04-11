const router = require('express').Router();
const adminService = require('../../services/adminService.js');
let Volunteer = require('../../models/volunteer.model');
let Volshift = require('../../models/volunteerShift.model');
let Event = require('../../models/event.model');


router.route('/').get((req, res) => {
    Volunteer.find()
    .then(volunteers => res.json(volunteers))
    .catch(err => res.status(400).json('Uhoh, error while retrieving volunteers: ' + err));
});

router.route('/remove/:username').delete((req, res) => {
    Volunteer.findOneAndDelete({username: req.params.username})
    .then(() => res.json('Success, volunteer deleted'))
    .catch(err => res.status(400).json('Uhoh, error while deleting volunteer: ' + err));
});

router.route('/verify/:id').post((req, res) => {
    const filter = {id: req.params.id};
    const update = {verified: true};
    Volshift.findOneAndUpdate(filter, update, {new: true})
});

router.route('/event').post(async (req, res, next) => {
    try {
        let event = await adminService.createEvent(req.body);
        return res.status(200).json({ data: event });
    } catch (error) {
        next(error);
    }
});

router.route('/event').delete(async (req, res, next) => {
    try {
        let eventD = await adminService.deleteEvent(req.body);
        return res.status(200).json({data: eventD});
    } catch (error) {
        next(error);
    }
    /*Event.findOneAndDelete({id: req.params.id})
    .then(() => res.json('Success, event deleted'))
    .catch(err => res.status(400).json('Uhoh, error while deleting event: ' + err));*/
    //Will want to first make another call to find and delete all the shifts associated with that event. Search shifts that have this event's eventID
});

module.exports = router;