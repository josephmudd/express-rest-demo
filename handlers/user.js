function create(input) {
    const errors = [];
    if (!input.email) {
        errors.push('email is required');
    }
    if (input.zipcode && !(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input.zipcode))) {
        errors.push('zipcode must be valid');
    }
    if (errors.length) {
        throw errors;
    }
    return Object.assign({ id: 1 }, input);
}

function read(id = null) {

}

module.exports =  { create, read };
