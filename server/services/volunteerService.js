/**
 * volunteerService - Methods providing user related services.
 * @module services/volunteerService
 */

const Volunteer = require('../models/volunteer.model');
const Admin = require('../models/admin.model');
const Organization = require('../models/org.model');
const Event = require('../models/event.model');
const Shift = require('../models/shift.model');
const volShift = require('../models/volunteerShift.model');


/**
 * shiftSignUp - Service Method
 * This method allows a volunteer to signup for a shift, creating a volShift object. Then updates the
 * corresponding Shift object and Event object to add the volunteer to the volunteers[] array for both.
 * 
 * @method shiftSignUp
 * @param {shiftInfo} shiftInfo - object containing information about shift and event and also the volunteer object ID
 * @returns {savedVolShift} savedVolShift
 */
const shiftSignUp = async (shiftInfo) => {
    let volunteer = shiftInfo.volunteerID
    let shift = shiftInfo.shiftID
    let organizationID = shiftInfo.organizationID
    let eventID = shiftInfo.eventID
    var newVolShift = new volShift({volunteer, shift, organizationID, eventID});

    const savedVolShift = await newVolShift.save();

    const updateShiftWithVol = await Shift.findOneAndUpdate(
        {_id: shift},
        {$push: {volunteers: volunteer}}
    );
    const updateEventWithVol = await Event.findOneAndUpdate(
        {_id: eventID},
        {$push: {volunteers: volunteer}}
    );

    return savedVolShift;
}

/**
 * volShiftDelete
 * This method will allow the user to cancel their shift obligation by deleting the volShift object. This will also need to 
 * go to the corresponding event and shift in order to delete the volunteer object ID from volunteers[] in each
 * 
 * @method volShiftDelete
 */

const volShiftDelete = async(volShiftInfo) => {
    //volShift.findOneAndDelete({id: req.params.id})
}

module.exports = {
    shiftSignUp,
    volShiftDelete
}