const mongoose = require('mongoose');
const Entry = require('./entry');
const yup = require('yup');

//guest schema
const GuestSchema = new mongoose.Schema({
    Guest_type:{
        type:String,
        required:true,
    }, 
    EntryDetails: Entry.schema,
});

const validateGuest = guest => {
    const schema = yup.object().shape({
        guestType:yup.string().required(),
        entryGuestId:yup.string().required(),
        entryDate:yup.string().required(),
        entryCheckin:yup.string().required(),
        entryCheckout:yup.string().required(),
        entryTransport:yup.string().required(),
        entryPlate:yup.string().required()
    });

    return schema
        .validate(guest)
        .then((guest) => guest)
        .catch((error) => {
            return {
                message:error.message
            }
        });
};

exports.Guest = new mongoose.model('Guest', GuestSchema);
exports.validateGuest = validateGuest;
