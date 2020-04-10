
/**
 * Express router providing the api for the client app.
 * @module routers/api
 */

const router = require('express').Router();

const authRouter = require('./auth');
router.use('/auth', authRouter);

const adminRouter = require('./admin');
router.use('/admin', adminRouter);

const orgRouter = require('./organization');
router.use('/orgs', orgRouter);

module.exports = router;
