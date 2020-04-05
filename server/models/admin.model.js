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
    adminPhone:
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