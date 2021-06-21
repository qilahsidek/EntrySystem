const express = require('express');
const router = express.Router();
const Guest = require('../models/guest');

//POST: NEW GUEST
router.post('/', (req,res) => {
    guest = new Guest({
        Guest_type:req.body.guestType,
        EntryDetails:{
            GuestID:req.body.entryGuestId,
            Date:req.body.entryDate,
            CheckinTime:req.body.entryCheckin,
            CheckoutTime:req.body.entryCheckout,
            Transport_type:req.body.entryTransport,
            PlateNum:req.body.entryPlate
        },
    });

    guest.save().then(guest => {
        res.send(guest);
    }).catch(error => {
        res.status(500).send("Guest was not stored");
    });
});

module.exports = router;