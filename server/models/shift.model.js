const mongoose = require('mongoose');

const theSchema = mongoose.Schema;

const shiftSchema = new theSchema({
   
    volunteers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer'

    }], 
    startTime:
    {
        type: Date,
        required: true

    },
    endTime:
    {
        type: Date,
        required: true
    },
    organization:
    {
        type: mongoose.Schema.Types.ObjectId
    }
},
{
    timestamps: true,
});

const shift = mongoose.model('shift', shiftSchema);

module.exports = shift;