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
    orgPhone:
    {
        type: Number,
        trim: true
    },
    orgEmail:
    {
        type: String,
        trim: true,
        required: true
    },
    shifts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shift'
    }],
    volunteers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer'
    }],
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shift'
    }]
},
{
    timestamps: true,
});

const org = mongoose.model('org', orgSchema);

module.exports = org;