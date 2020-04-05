/**
 * Express router providing user related routes
 * @module routers/auth
 */

const router = require('express').Router();
const middleware = require('./middleware/middleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');


/**
 * Route serving signup form.
 * @name get/signup
 * @function
 * @memberof module:routers/auth~authRouter
 */
router.route('/signup').post([middleware.signup.validateSignup, middleware.signup.generateUserType], (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // check if user is volunteer or organization
    bcrypt.hash(password, 10).then(function(hash) {
        const newUser = new User({username, password:hash, email, _admin: req.body.admin, _volunteer: req.body.volunteer});
        newUser.save().then((obj) => {
            console.log(`User ${obj} successfully created!`);
            return res.status(200).json({status: "success", message: `User ${obj.username} successfully created!`})
        }).catch((error) => {
            console.error(`Error saving user ${newUser} to the database.`);
            console.error(error);
            return res.status(403).json('Error creating account');
        });
    }).catch((error) => {
        console.error('Error', error);
        return res.status(403).json('Error creating account');
    });
});


/**
 * Route serving login form.
 * @name get/alogin
 * @function
 * @memberof module:routers/auth~authRouter
 * @inner
 */
router.route('/login').post(middleware.login.validateLogin, (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({username}).then(async(obj) => {
        if(!obj) {
            return res.status(404).json(`No user found with username ${username}`);
        }
        bcrypt.compare(password, obj.password).then((result) => {
            if(result) {
                let token = jwt.sign(
                    {
                        username: username
                    },
                    process.env.SECRET_KEY,
                    { 
                        expiresIn: '24h' // expires in 24 hours
                    }
                );
                // return the JWT token for the future API calls
                return res.status(200).json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
                });
            }
        }).catch((error) => {
            console.error('Login failed.', error);
            return res.status(403).json('Login failed.');
        });
    }).catch((error) => {
        console.log(`Error querying for user ${username}`);
        console.log(error);
        return res.status(403).json('Login failed.');
    });
});

module.exports = router;