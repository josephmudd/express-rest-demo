const assert = require('assert');
const User = require('./user');

describe('create', () => {
    describe('when input contains valid email and zip', () => {
        it('returns user object', () => {
            const input = {
                email: 'test@example.com',
                zipCode: '40202',
            };
            const output = User.create(input);
            assert.deepStrictEqual(output, { id: 1, email: 'test@example.com', zipCode: '40202' });
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

describe('read', () => {});
