/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const stripe = require("stripe")(
  "sk_test_51Oo4faJXshafLR3uRD5SunUul5QhqNE9pt1qgmPrXj7mJ5kDoxWXPMsp3sI7GIXBlUuOazgRuQYMHT8zdoo6kr0s00OE7a9JCj"
);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.completePaymentWithStripe = onRequest(async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.floor(req.body.amount * 100),
      currency: "pkr",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase changing..!");
// });
