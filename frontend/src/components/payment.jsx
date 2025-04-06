import { Button, Input, Box, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

export default function Demo() {
  const apiURL = "http://localhost:5000"; // Replace with your server's URL

  const [paymentAmount, setPaymentAmount] = useState(0); // State to store payment amount

  const handleAmountChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  const makePayment = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Load Stripe instance
    const stripe = await loadStripe(
      "pk_test_51QfKKMERLT6EQvDbQiUUHq1P77ytQVbzm2yz77K2Ur0OdKHCt5pFvhOjpWjiNvOnsJ9rWEtXIKsnEZg5QyW24Rbe00TsbAerzx"
    );

    if (!stripe) {
      console.error("Stripe failed to load");
      return;
    }

    // Payment request body
    const body = {
      id: 1,
      fullname: "Talha", // Ensure fullname is a string
      payment: paymentAmount, // Use dynamic payment amount
    };

    try {
      // Make a POST request to the server
      const response = await fetch(`${apiURL}/api/auth/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        console.error("Error creating checkout session", await response.text());
        return;
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error("Stripe Checkout Error", result.error.message);
      }
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  return (
    <HStack>
      <form onSubmit={makePayment}>
        <Box>
          <Text htmlFor="paymentAmount" style={{ color: "black" }}>
            Enter Payment Amount
          </Text>
          <Input
            type="number"
            id="paymentAmount"
            value={paymentAmount}
            onChange={handleAmountChange}
            placeholder="Amount"
            required
          />
        </Box>
        <Button type="submit" mt={4}>
          Pay Now
        </Button>
      </form>
    </HStack>
  );
}
