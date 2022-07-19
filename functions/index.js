const functions = require("firebase-functions");
const express = require("express");
const cors= require("cors");
// eslint-disable-next-line max-len
 const stripe= require("stripe")("sk_test_51LMN7kIehvswrML9OrGM3XouT8ecFryCX6enJc0lTxnilzFjLXHkli4UpgZykdqDPQ5TtbG1ax0Lit3L6MlRjKkl00ybo1K7Nj");

// app config
const app = express();

// middleware
app.use(cors({origin: true}));
app.use(express.json());


// API routes
app.get("/", (req, res)=> res.status(200).send("hellos"));

app.post("/payments/create", async(req, res)=> {
    const total = req.query.total;
    console.log('payement req recieved', total )
    
    const paymentIntent= await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    res.status(201).send({
        clientSec: paymentIntent.client_secret,
    })
});
// Listen command
exports.api= functions.https.onRequest(app);

// http://localhost:5001/clozon-fc92d/us-central1/api