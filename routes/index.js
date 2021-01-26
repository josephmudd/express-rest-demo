const router = require('express').Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group food - Operations about user
 * @param {string} email.query - username or email - eg: user@domain
 * @param {string} password.query - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/api', (req, res) => {
    res.send('<html><body><h1>Hey There</h1></body></html>');
});

/**
 * This function comment is parsed by doctrine
 * @route POST /api
 * @group food - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/api', (req, res) => {
    res.json(Object.assign({ id: 1 }, req.body));
});

module.exports = router;