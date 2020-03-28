const router = require('express').Router();
let Organization = require('../models/org.model');
let Admin = require('../models/admin.model');
let Shift = require('../models/shift.model');

router.route('/orgs/:orgName').get((req, res) => {
    Organization.findOne({orgName: req.params.orgName})
    //.then(volunteers => res.json(volunteers))
    //.catch(err => res.status(400).json('Uhoh, error while retrieving volunteers: ' + err));
});

router.route('/').get((req, res) => {
    Organization.find({}, function(err, orgs) {
        var orgsList = {};
        res.render('/orgs', {orgs: orgs});
    });
    
});

router.route('/orgs/:orgName').delete((req, res) => {
    Organization.findOneAndDelete({orgName: req.params.orgName})
    .then(() => res.json('Success, organization deleted'))
    .catch(err => res.status(400).json('Uhoh, error while deleting organization: ' + err));
});

router.route('/add').post((req, res) => {
    const orgName = req.body.name;
    const organization = req.body.name;
    const name = req.body.adminName;
    const adminUsername = req.body.adminUsername
    const username = req.body.adminUsername;
    const password = req.body.adminPassword;
    const adminEmail = req.body.adminEmail;
    const adminPhone = req.body.adminPhone;

    const location = req.body.location;
    const orgPhone = req.body.orgPhone;
    const orgEmail = req.body.orgEmail;

    console.log(req.body);

    const newOrg = new Organization({orgName, adminUsername, location, orgPhone, orgEmail});
   
    newOrg.save()
    .then((orgResult) => 
    {
        console.log(orgResult)
        const newAdmin = new Admin({name, username, password, adminEmail, adminPhone, organization});
        newAdmin.save()
        .then((result) => 
        {
        console.log(result)
        res.json('Success, new admin created')
        }) 
        .catch(err => {console.log(err) 
        res.status(400).json('Uhoh, error while creating admin account: ' + err)});
    })
    .catch(err => {console.log(err)
    res.status(400).json('Uhoh, error while adding new organization: ' + err)});
});

router.route('/').post((req, res) => {
    const volunteers = req.body.volunteers;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const organization = req.body.organization;

    const newShift = new Shift({volunteers, startTime, endTime, organization});

    newShift.save()
    .then(() => 
    {
        console.log(newShift);
        res.json('Success, new shift created')
    })
    .catch(err => res.status(400).json('Uhoh, error while adding new shift: ' + err));
});

module.exports = router;