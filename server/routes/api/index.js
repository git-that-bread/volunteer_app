
/**
 * Express router providing the api for the client app.
 * @module routers/api
 */

const router = require('express').Router();

const authRouter = require('./auth');
router.use('/auth', authRouter);

const volRouter = require('./volunteer');
router.use('/volunteer', volRouter);

const orgRouter = require('./organization');
router.use('/orgs', orgRouter);

module.exports = router;
