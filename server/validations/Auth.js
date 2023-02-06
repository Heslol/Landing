const { body } = require('express-validator');

class Validation {
    loginValidation = [
        body('email').isEmail(),
        body('password').isLength({min : 5})
    ];

    registerValidaton = [
        body('email', 'Wrong format').isEmail(),
        body('password', 'Wrong format' ).isLength({min : 6}),
        body('accountName', 'Wrong format').isLength({min : 4}),
        body('fullName', 'Wrong format'  ).isLength({min : 6}),
        body('avatarUrl',  'Wrong format').optional().isURL()
    ];

    postValidation = [
        body('title').isLength({min : 3}),
        body('text').isLength({min : 4}),
        body('time').optional().isDate(),
        body('tags').optional().isString()
    ];

    tourValidation = [
        body('name').isLength({min : 3}),
        body('photoUrl').optional().isURL(),
        body('carPhoto').isURL(),
        body('accountName').isLength({min : 4})
    ];
};

const validation = new Validation();

module.exports =  validation;