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
    const errors = [];
    if (!req.body.email) {
        errors.push('email is required');
    }
    if (req.body.zipcode && !(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(req.body.zipcode))) {
        errors.push('zipcode must be valid');
    }
    if (errors.length) {
        return res.status(400).json({ errors });
    }
    res.json(Object.assign({ id: 1 }, req.body));
});

module.exports = router;