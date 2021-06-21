const mongoose = require('mongoose');

//entry schema
const EntrySchema = new mongoose.Schema({
    /*Guest:{
        type:String,
        required:true,
    }
})*/
    GuestID:{
        type:String,
        required:true,
    },
    Date:{
        type:String,
        required:true,
    },
    CheckinTime:{
        type:String,
        required:true,
    },
    CheckoutTime:{
        type:String,
        required:true,
    },
    Transport_type:{
        type:String,
        required:true,
    },
    PlateNum:{
        type:String,
        required:true,
    }    
});

module.exports = new mongoose.model('Entry', EntrySchema);
