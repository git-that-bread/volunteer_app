const mongoose = require('mongoose');

const theSchema = mongoose.Schema;

const volSchema = new theSchema({
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
        required: true,
        minlength: 5
    },
    volEmail:
    {
        type: String,
        trim: true,
        required: true
    },
    shifts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shift'

    }], 
    organizations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization'

    }], 
},
{
    timestamps: true,
});

const volunteerMod = mongoose.model('volunteerMod', volSchema);

module.exports = volunteerMod;