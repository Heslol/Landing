const {Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        id : Number,
        accountName : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        avatarUrl : String
    },
    {
        timestamps : true
    }
);

module.exports = model('User', UserSchema)