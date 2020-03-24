const router = require('express').Router();
let Organization = require('../models/org.model');
let Admin = require('../models/admin.model');

router.route('/orgs/:orgName').get((req, res) => {
    Organization.findOne({orgName: req.params.orgName})
    //.then(volunteers => res.json(volunteers))
    //.catch(err => res.status(400).json('Uhoh, error while retrieving volunteers: ' + err));
});

router.route('/orgs').get((req, res) => {
    Organization.find({})
    .then(org => res.json(org))
});

router.route('/orgs/:orgName').delete((req, res) => {
    Organization.findOneAndDelete({orgName: req.params.orgName})
    .then(() => res.json('Success, organization deleted'))
    .catch(err => res.status(400).json('Uhoh, error while deleting organization: ' + err));
})

router.route('/orgs/add').post((req, res) => {
    const name = req.body.name;
    const adminName = req.body.adminName;
    const adminUsername = req.body.adminUsername;
    const adminPassword = req.body.adminPassword;
    const adminEmail = req.body.adminEmail;
    const adminPhone = req.body.adminPhone;

    const location = req.body.location;
    const phone = req.body.orgPhone;
    const email = req.body.orgEmail;

    const newOrg = new Organization({name, adminUsername, location, phone, email});
   
    newOrg.save()
    .then(() => res.json('Success, new organization added'))
    .catch(err => res.status(400).json('Uhoh, error while adding new organization: ' + err));

    const newAdmin = new Admin({adminName, adminUsername, adminPassword, adminEmail, adminPhone, name});
    newAdmin.save()
    .then(() => res.json('Sucess, new admin created'))
    .catch(err => res.status(400).json('Uhoh, error while creating admin account: ' + err));
});

module.exports = router;