const router = require('express').Router();
const User = require('../handlers/user');

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
    let output;
    try {
        output = User.create(req.body);
    } catch (errors) {
        return res.status(400).json({ errors })
    }
    res.json(output);
});

module.exports = router;