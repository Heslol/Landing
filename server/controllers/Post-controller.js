const PostModel = require("../models/Post-model");
const { validationResult } = require('express-validator');

class PostController {
    async create(req, res, next) {    
        try {
            const errors = validationResult(req);
            if(!errors) {
                return res.status(400).json(errors.array());
            };

            const doc = new PostModel({
                title : req.body.title,
                text : req.body.text,
                imageUrl : req.body.imageUrl,
                tags : req.body.tags,
                user : req.userId
            })

            const post = await doc.save();

            const {...postData} = post._doc

            res.json({
                ...postData
            });
        } catch (error) {
            console.log(error)
            res.status(405).json({
                message : 'Please, fill in the all inputs'
            })
        }
    };

    async getAllPosts(req, res, next) {
        const errors = validationResult(req);
        if(!errors) {
            return res.status(411).json({
                message : 'You have not got access'
            });
        };

        const posts  = await PostModel.find().populate('user').exec();

        if(!posts) {
            return res.json({
                message : "There are no posts"
            });
        };
        try {
            res.json(posts)

        } catch (error) {

        }
    };

    async getOnePost(req, res, next) {
        const errors = validationResult(req);
        if(!errors) {
            return res.status(411).json({
                message : 'You have not got access'
            });
        };
        try {
            const postId = req.params.id;

            PostModel.findByIdAndUpdate(
                {
                    _id: postId,
                },
                {
                    $inc : {viewCount : 1 },
                },
                {
                    returnDocument : 'after'
                },
                (err, doc) => {
                    if (err) {
                        return res.status(500).json({
                            message : "No!"
                        });
                    };
                    if (!doc) {
                        return res.status(404).json({
                            message : 'No! NO!'
                        })
                    };
                    res.json(doc);
                }
            );
        } catch (error) {
            console.log(error) 
            return res.status(500).json({
                message : "No!"
            });

        }
    };

    async removePost(req, res, next) {
        const errors = validationResult(req);
        if(!errors) {
            return res.status(411).json({
                message : 'You have not got access'
            });
        };
        try {
            const postId = req.params.id;

            PostModel.findByIdAndDelete({
                    _id: postId,
                },(err, doc) => {
                if (err) {
                    return res.status(500).json({
                        message : "No!"
                    });
                };
                if (!doc) {
                    return res.status(404).json({
                        message : 'No! NO!'
                    })
                };
                res.json({
                    success : true
                });
                }
            );
        } catch (error) {
            console.log(error) 
            return res.status(500).json({
                message : "No!"
            });

        }
    };

    async upgradePost(req, res, next) {
        const errors = validationResult(req);
        if(!errors) {
            return res.status(411).json({
                message : 'You have not got access'
            });
        };
        try {
            const postId = req.params.id;

            await PostModel.updateOne(
                {
                    _id: postId,
                },
                {
                    title : req.body.title,
                    text : req.body.text,
                    imageUrl : req.body.imageUrl,
                    tags : req.body.tags,
                    user : req.userId
                },
            );

            res.json({
                success : true
            });
        } catch (error) {
            console.log(error) 
            return res.status(500).json({
                message : "Can`t upgrade the post"
            });

        }
    };
};

module.exports = new PostController();