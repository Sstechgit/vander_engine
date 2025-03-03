const express = require('express');
const Stripe = require('stripe');

const router = express.Router();
const stripe = new Stripe("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");

router.post("/", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert dollars to cents
      currency: "usd",
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;