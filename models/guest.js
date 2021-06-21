const mongoose = require('mongoose');
const Entry = require('./entry');
//guest schema
const GuestSchema = new mongoose.Schema({
    Guest_type:{
        type:String,
        required:true,
    }, 
    EntryDetails: Entry.schema,
    /*GuestID:{
        type:String,
        required:true,
    },
    Date:{
        type:String,
        required:true,
    },
    CheckinTime:{
        type:Number,
        required:true,
    },
    CheckoutTime:{
        type:Number,
        required:true,
    },
    Transport_type:{
        type:String,
        required:true,
    },
    PlateNum:{
        type:String,
        required:true,
    }*/ 
});

module.exports = new mongoose.model('Guest', GuestSchema);
