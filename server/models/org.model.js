const mongoose = require('mongoose');

const theSchema = mongoose.Schema;

const orgSchema = new theSchema({
    orgName:
    {
        type: String,
        trim: true,
        required: true,
        minlength: 5
    },
    adminUsername:
    {
        type: String,
        trim: true,
        required: true
    },
    location:
    {
        type: String,
        trim: true,
        required: true
    },
    phone:
    {
        type: Number,
        trim: true
    },
    email:
    {
        type: String,
        trim: true,
        required: true
    }
},
{
    timestamps: true,
});

const org = mongoose.model('org', orgSchema);

module.exports = org;