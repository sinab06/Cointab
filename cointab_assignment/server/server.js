const express = require("express");
const pincodes = require("./PinCode.json");
const zonecodes = require("./zoneid.json");
const app = express();


app.get("/:deliveryType/:pin/:weight", (req, res) => {

    const pin = `${req.params.pin}`;
    const weight = +req.params.weight;
    const deliveryType = req.params.deliveryType;

    if (!validatePin()) {
        res.send({ "error": "Invalid PIN : Delivery not available on this pincode" });
    } else {

        const zone = validatePin(pin);
        const cost = findCost(deliveryType, zone, weight);
        res.send({ "totalCost": cost });
    }
})

const port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("listening on port ", port)
})