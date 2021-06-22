const express = require('express');
const router = express.Router();
const { Guest, validateGuest } = require('../models/guest');

//POST: NEW GUEST
router.post('/', async (req, res) => {
    const error = await validateGuest(req.body);
    if (error.message) res.send(400).send(error.message);

    guest = new Guest({
        Guest_type: req.body.guestType,
        EntryDetails: {
            GuestID: req.body.entryGuestId,
            Date: req.body.entryDate,
            CheckinTime: req.body.entryCheckin,
            CheckoutTime: req.body.entryCheckout,
            Transport_type: req.body.entryTransport,
            PlateNum: req.body.entryPlate
        },
    });

    guest
        .save()
        .then((guest) => {
            res.send(guest);
        })
        .catch((error) => {
            res.status(500).send("Guest was not stored");
        });
});

//GET Guest Entry Details
router.get('/', (req, res) => {
    Guest.find()
        .then((guest) => res.send(guest))
        .catch((error) => {
            res.status(500).send("Something went wrong");
        });
});

//GET the guest by GuestID
router.get('/:id', async (req, res) => {
    const guest = await Guest.findById(req.params.id);
    if (!guest) res.status(400).send("Guest not found");
    res.send(guest);
});

//UPDATE Guesy by ID
router.put('/:id', async (req, res) => {
    const updatedGuest = await Guest.findByIdAndUpdate(
        req.params.id,
        {
            Guest_type: req.body.guestType,
            EntryDetails:{
                GuestID: req.body.entryGuestId,
                Date: req.body.entryDate,
                CheckinTime: req.body.entryCheckin,
                CheckoutTime: req.body.entryCheckout,
                Transport_type: req.body.entryTransport,
                PlateNum: req.body.entryPlate,
            }},
            {new:true}
            );
    
    if (!updatedGuest) res.status(400).send("Guest not found");
    res.send(updatedGuest);
});

//DELETE guest
router.delete('/:id', async (req, res) => {
    const guest = await Guest.findByIdAndRemove(
        req.params.id
    );
    if(!guest) res.status(400).send("Guest not found");
    res.send(guest);
});

module.exports = router;