const {Schema, model } = require('mongoose');

const PostSchema = new Schema(
    {
        title : {
            type : String,
            required : true
        },
        text : {
            type : String,
            required : true
        },
        imageUrl : {
            type : String,
        },
        tags : {
            type : Array,
            default : []
        },
        viewCount : {
            type : Number,
            default : 0
        },
        likeCount : {
            type : Number,
            default : 0
        },
        user : {
            type : Schema.Types.ObjectId,
            ref : 'User',
            required : true
        },
        avatarUrl : String,
        time : Date
    },
    // {
    //     timestamps : true
    // }
);

module.exports = model('Post', PostSchema)