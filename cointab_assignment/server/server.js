const express = require("express");
const pincodes = require("./PinCode.json");
const zonecodes = require("./zoneid.json");
const app = express();


app.get("/:deliveryType/:pinCode/:weight", (req, res) => {

    const pinCode = `${req.params.pinCode}`;
    const weight = +req.params.weight;
    const deliveryType = req.params.deliveryType;

    if (!validatePin()) {
        res.send({ "error": "Invalid PIN : Delivery not available on this pincode" });
    } else {

        const zone = validatePin(pin);
        const totalcost = findCost(deliveryType, zone, weight);
        res.send({ "totalCost": totalcost });
    }
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("listening on port ", port)
})