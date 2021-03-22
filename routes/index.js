const router = require('express').Router();
const User = require('../handlers/user');

/**
 * This function comment is parsed by doctrine
 * @route GET /user
 * @group food - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/user', (req, res) => {
    return User.read()
        .then((users) => {
            return res.json(users);
        })
});

/**
 * This function comment is parsed by doctrine
 * @route GET /user
 * @group food - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/user/:userId', (req, res) => {
    return User.read(req.params.userId)
        .then((user) => {
            if(!user) {
                return res.status(404).json('not found');
            }
            return res.json(user);
        });
});

/**
 * This function comment is parsed by doctrine
 * @route POST /api
 * @group food - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/user', (req, res) => {
    let output;
    return User.create(req.body)
        .then((item) => {
            return res.json(item);
        })
        .catch((errors) => {
            return res.status(400).json({ errors })
        });
});

module.exports = router;