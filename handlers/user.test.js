const assert = require('assert');
const sinon = require('sinon');
const User = require('./user');
const model = require('../models');

describe('create', () => {
    describe('when input contains valid email and zip', () => {
        beforeEach(() => {
            model.User = {
                create: (input) => Promise.resolve(Object.assign({ id: 123 }, input)),
            };
            sinon.spy(model.User, 'create');
        });
        afterEach(() => {
            model.User.create.restore();
        });
        it('returns user object', () => {
            const input = {
                email: 'test@example.com',
                zipCode: '40202',
            };
            return User.create(input)
                .then((output) => {
                    assert.deepStrictEqual(output, { id: 123, email: 'test@example.com', zipCode: '40202' }); 
                    assert.equal(model.User.create.callCount, 1);
                    assert.deepStrictEqual(model.User.create.firstCall.args, [input]);
                });
        });
    });
    describe('when there is no input', () => {
        it('throws an error that email is required and missing zipCode is okay because it is optional', () => {
            assert.throws(() => {
                User.create();
            },["email is required"]);
        });
    });
    describe('when input contains no email', () => {
        it('throws an error', () => {
            const input = {
                zipCode: '40202',
            };
            assert.throws(() => {
                User.create(input)
            },["email is required"]);
        });
    });
    describe('when input contains zipCode and it is invalid', () => {
        it('and the input is false it throws an error', () => {
            const input = {
                email: 'test@example.com',
                zipCode: false,
            };
            assert.throws(() => {
                User.create(input)
            }, ["zipCode must be valid"]);
        });
        it('and the input is a word it throws an error', () => {
            const input = {
                email: 'test@example.com',
                zipCode: 'placeholder',
            };
            assert.throws(() => {
                User.create(input)
            }, ["zipCode must be valid"]);
        });
    });
});

describe('read', () => {
    beforeEach(() => {
        model.User = {
            findAll: () => Promise.resolve([{ id: 123 }, { id: 456 }]),
            findOne: (query) => Promise.resolve([{ id: 123 }, { id: 456 }].find(user => user.id === query.where.id)),
        };
        sinon.spy(model.User, 'findAll');
        sinon.spy(model.User, 'findOne');
    });
    afterEach(() => {
        model.User.findAll.restore();
        model.User.findOne.restore();
    });
    it('fetches all users when no id provided', () => {
        return User.read()
            .then((output) => {
                assert.deepStrictEqual(output, [{ id: 123 }, { id: 456 }]);
                assert.equal(model.User.findAll.callCount, 1);
                assert.deepStrictEqual(model.User.findAll.firstCall.args, []);
            });
    });
    it('fetches specified user when id provided', () => {
        return User.read(456)
            .then((output) => {
                assert.deepStrictEqual(output, { id: 456 });
                assert.equal(model.User.findOne.callCount, 1);
                assert.deepStrictEqual(model.User.findOne.firstCall.args, [{ where: { id: 456 } }]);
            });
    });
    it('throws error when specified user id does not exist in data');
});
