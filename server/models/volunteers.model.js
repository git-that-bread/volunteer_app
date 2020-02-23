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
    }
},
{
    timestamps: true,
});

const volunteerMod = mongoose.model('volunteerMod', volSchema);

module.exports = volunteerMod;