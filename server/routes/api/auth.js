/**
 * Express router providing user related routes
 * @module routers/auth
 */

const router = require('express').Router();
const middleware = require('./middleware/middleware');
const userService = require('../../services/userService.js')

/**
 * Route serving signup form.
 * @name get/signup
 * @function
 * @memberof module:routers/auth~authRouter
 */
router.route('/signup').post(middleware.signup.validateSignup, async (req, res, next) => {
    try {
        let user = await userService.signUp(req.body);
        return res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
});


/**
 * Route serving login form.
 * @name get/alogin
 * @function
 * @memberof module:routers/auth~authRouter
 * @inner
 */
router.route('/login').post(middleware.login.validateLogin, async (req, res, next) => {
    try {
        let user = await userService.logIn(req.body);
        return res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
});

module.exports = router;