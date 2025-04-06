import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  VStack,
  Flex,
  chakra,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";

const Donation = () => {
  const apiURL = "http://localhost:5000"; // Replace with your server's URL
  const [donationAmount, setDonationAmount] = useState("");
  const inputRef = useRef(null);
const [error, setError] = useState("");

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    if (amount === "") {
      inputRef.current.focus();
    }
  };
  
  //....
  const makePayment = async (e) => {
    e.preventDefault(); // Prevent form submission
if (donationAmount.trim() === "") {
  setError("Donation amount is required!");
  return;
}
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
      payment: donationAmount, // Use dynamic payment amount
    };

    try {
      // Make a POST request to the server
      const response = await fetch(`${apiURL}/api/payment`, {
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
    <>
      <Flex
        direction="row"
        align="center"
        justify="center"
        bg="#fff1ea"
        boxShadow="md"
        mx={{ base: 4, lg: 180 }}
        height="auto"
        wrap="wrap"
        my={{ base: 39, sm: 39, md: 23, lg: 70 }} //vertical margin of the whole component
      >
        <Box
          flex="1"
          maxW={{ base: "100%", md: "30%" }}
          height={{ base: "300px", md: "400px" }}
          overflow="hidden"
          display={{ base: "none", md: "block" }}
        >
          <Image
            src="images/img_1.png"
            alt="Donation Image"
            objectFit="cover"
            width="100%"
            height="100%"
            transition="transform 0.5s ease"
            sx={{
              _hover: {
                transform: "scale(1.1)",
              },
            }}
          />
        </Box>

        {/* Text Section */}
        <Box flex="2" p={6}>
          <VStack align="flex-start" spacing={4}>
            <Text
              color="black"
              fontSize={{ base: 15, sm: 18, md: 20, lg: 22 }}
              fontWeight="bold"
            >
              Raise Your Hand To The Poor Children Education For Better Future
              Life
            </Text>

            <Text fontSize={{ base: 9, sm: 9, md: 10, lg: 12 }} color="#606060">
              There is no better way than to donate your time to the education
              of impoverished children. Many children NGOs are also providing
              tuition for them where you can volunteer or donate money.
            </Text>

            <Text fontSize={12} color="#606060">
              <chakra.span
                fontSize={{ sm: 11, md: 14, lg: 17 }}
                color="red.500"
                fontWeight="bold"
                px={2}
              >
                $799
              </chakra.span>
              of
              <chakra.span
                fontSize={{ sm: 11, md: 14, lg: 17 }}
                color="orange.500"
                fontWeight="bold"
                px={2}
              >
                $1500
              </chakra.span>{" "}
              raised
            </Text>

            {/* Static Progress Bar */}
            <Box
              width="100%"
              bg="gray.300"
              height="6px"
              borderRadius="full"
              overflow="hidden"
            >
              <Box
                width="50%"
                height="100%"
                bg="red.500"
                borderRadius="full"
              ></Box>
            </Box>

            <Flex
              align="center"
              my={2}
              bg="white"
              borderRadius={50}
              width="auto"
            >
              <Button bg="white" color="black" borderRadius="50px" size="sm">
                $
              </Button>
              <Input
                placeholder=""
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                size="md"
                variant="outline"
                bg="white"
                borderRadius="50px"
                ml={2}
                width="80px"
                ref={inputRef}
                border="none"
                color="#606060"
              />
            </Flex>
            <Flex wrap="wrap" gap={{ base: 2, sm: 2, md: 2, lg: 2 }} p={1}>
              {["10.00", "25.00", "50.00", "100.00", "250.00"].map((amount) => (
                <Button
                  key={amount}
                  bg="white"
                  fontWeight="bold"
                  color="black"
                  borderRadius={50}
                  _hover={{ bg: "#ffb327", color: "white" }}
                  size={{ base: "xs", md: "sm", lg: "sm" }}
                  fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                  onClick={() => handleAmountClick(amount)}
                >
                  ${amount}
                </Button>
              ))}
              <Button
                bg="#ffb327"
                fontWeight="bold"
                color="white"
                borderRadius={50}
                _hover={{ bg: "#ffb327", color: "white" }}
                size={{ base: "xs", md: "sm", lg: "sm" }}
                fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                onClick={() => handleAmountClick("")}
              >
                Custom Amount
              </Button>
            </Flex>

            <Flex
              justify={{ base: "center", sm: "flex-start" }}
              align="center"
              width="100%"
            >
              <Button
                bg="red.500"
                fontWeight="bold"
                color="white"
                borderRadius={50}
                my={5}
                _hover={{ bg: "#ffb327", color: "white" }}
                size={{ base: "sm", md: "sm", lg: "md" }}
                fontSize={{ base: "sm", md: "sm", lg: "md" }}
                onClick={makePayment}
              >
                Donate Now
              </Button>
            </Flex>
          </VStack>
          {error && (
            <Text color="red.500" mt={2}>
              {error}
            </Text>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Donation;
