const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const UserModel = require("../models/User-model");
const { validationResult } = require("express-validator");

class UserControler {
    async login(req, res, next) {
        try {   
            const user = await UserModel.findOne({email : req.body.email })
            if(!user) {
                return req.status(403).json({
                    message : `User with such email : ${email} is absent`
                })
            };

            const isValidPass = await bcrypt.compare(req.body.password, user._doc.password);
            
            if(!isValidPass) {
                return res.statis(406).json({
                    message : 'Wrong login or password'
                });
            };

            const { password, ...userData } = user._doc;
            
            const token = jwt.sign(
                {
                    _id: user._id
                },
                'secret123',
                {
                    expiresIn: '30d'
                }
            );
            return res.status(200).json({
                ...userData, token
            });            
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message : 'Can`t authorized'
            });
        };
    };

    async activation(req, res, next) {
        try {
            const user = await UserModel.findById(req.userId);
            
            if(!user) {
                return res.status(408).json({
                    message : "Such user is not defined"
                });
            };
            
            const { passwordHash, ...userData } = user._doc;

            res.json({
                ...userData,
            });            
        } catch (err) {
            console.log(err)
            res.status.json({
                message : 'False'
            });
        };
    };

    async register (req, res, next) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        };

        const hash = await bcrypt.hash(req.body.password, 10)

        const doc = new UserModel({
            email : req.body.email,
            accountName : req.body.accountName,
            fullName : req.body.fullName,
            avatarUrl : req.body.avatarUrl,
            password : hash
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id
            },
            'secret123',
            {
                expiresIn: '30d'
            }
        );

        const { passwordHash, ...userData } = user._doc;

        try {
            res.status(200).json({
                ...userData, token
            });            
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message : "Sorry failed to register"
            })
            console.log(err)
        }
    }
};

module.exports = new UserControler();

