const mongoose = require('mongoose');

const theSchema = mongoose.Schema;

const adminSchema = new theSchema({
    name:
    {
        type: String,
        trim: true,
        required: true,
        minlength: 5
    },
    username:
    {
        type: String,
        unique: true,
        trim: true,
        minlength: 5
    },
    password:
    {
        type: String,
        trim: true,
        minlength: 8
    },
    email:
    {
        type: String,
        unique: true,
        trim: true,
    },
    phone:
    {
        type: Number,
        unique: true,
        trim: true
    },
    organization:
    {
        type: String,
        trim: true
    }

},
{
    timestamps: true,
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;