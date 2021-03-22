const model = require('../models');

function create(input = {}) {
    const errors = [];
    if (!input.email) {
        errors.push('email is required');
    }
    if (!input.zipCode || input.zipCode && !(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input.zipCode))) {
        errors.push('zipCode must be valid');
    }
    if (errors.length) {
        throw errors;
    }
    return model.User.create(input);
}

function read(id = null) {
    if (id) {
        return model.User.findOne({ where: { id } });
    }
    return model.User.findAll();
}

module.exports =  { create, read };
