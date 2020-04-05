/**
 * Express middleware for use in the signup route.
 */

const Volunteer = require('../../../models/volunteer.model');
const Admin = require('../../../models/admin.model');
const Organization = require('../../../models/org.model');

const validateSignup = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    if(!username) {
        return res.status(403).json('Login failed. Username field is null');
    }
    if(!password) {
        return res.status(403).json('Login failed. Password field is null');
    }
    if(!email) {
        return res.status(403).json('Login failed. Email field is null');
    }
    next();
  }

const generateUserType = (req, res, next) => {
    if(!req.body.volunteer && !req.body.admin) {
        console.error("No type of account/user specified by the client");
        return res.status(403).json({status: "fail", message: "Error: Must specify the type of user i.e volunteer, admin."})
    }
    if(req.body.volunteer) {
        // create volunteer and add to db
        const newVolunteer = new Volunteer({name: req.body.name});
        newVolunteer.save().then((res) => {
            console.log(`New volunteer user successfully added to the db ${newVolunteer}`);
            req.body.volunteer = newVolunteer._id;
            req.body.admin = null;
            next();
        }).catch((error) => {
            console.error(`Error saving user to database ${error}`);
            return res.status(404).json({status: "fail", message: "Failed to generate volunteer user"});
        });
    }
    if(req.body.admin) {
        // create org and add to db
        const newOrganization = new Organization({orgName: req.body.orgName, orgType: req.body.orgType, location: req.body.location, orgPhone: req.body.orgPhone, orgEmail: req.body.orgEmail});
        newOrganization.save().then((res) => {
            console.log(`New organization user successfully added to the db ${newOrganization}`);

            // create admin and save to db
            const newAdmin = new Admin({name: req.body.adminName, adminPhone: req.body.adminPhone, organization: res._id});
            newAdmin.save().then((result) => {
                // add admin to organization
                Organization.findOneAndUpdate(
                    { _id: res._id },
                    { $push: { admins: result._id  } }).then((doc) => {
                        console.log("Organization admins field updated ", doc);
                        console.log(result);
                        req.body.admin = newAdmin._id;
                        req.body.volunteer = null;
                        next();
                    }).catch(err => {
                        console.log(err) 
                        res.status(400).json('Uhoh, error while creating admin account')});
            }).catch(err => {
                console.log(err) 
                res.status(400).json('Uhoh, error while creating admin account: ' + err)});
        }).catch((error) => {
            console.error(`Error saving user to database ${error}`);
            return res.status(404).json({status: "fail", message: "Failed to generate admin user"});
        });
    }
}

module.exports = {
    generateUserType,
    validateSignup
}