import React from "react";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Motion Components
const MotionBox = motion(Box);
const MotionText = motion(Text);

const Success = () => {
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get("session_id");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [Amount, setAmount] = useState(null);
  console.log(sessionId);
const token = localStorage.getItem("token"); // Get the token from localStorage or sessionStorage
if (!token) {
  alert("You need to log in first.");
  return;
}
// Send a POST request with donation data
const body = {
  amount: Amount,
  status: paymentStatus, // Or dynamically set it based on payment result
};
  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/payment/status?session_id=${sessionId}`
        );
        const data = await response.json(); // Parse the JSON response
        setPaymentStatus(data.paymentStatus); // Set the payment status
        setAmount(data.amount); // Set donation amount
        console.log("Payment Status from API:", data.paymentStatus);
        console.log("Donation Amount from API:", data.amount);
        addDonation();
      } catch (error) {
        console.error("Error fetching payment status:", error);
      }
    };
    const addDonation = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/donate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });
        if (!response.ok) {
          console.error("Donation failed", await response.text());
          return;
        }
        const donationResponse = await response.json();
        console.log("Donation successful", donationResponse);
        // Handle the response (e.g., show a success message)
      } catch (error) {
        console.error(error);
      }
    };
    if (sessionId) {
      fetchPaymentDetails(); // Fetch payment details if session ID exists
      
    }
  }, [sessionId, token, body]);
  return (
    <Center h="100vh" bg="gray.50">
      <MotionBox
        textAlign="center"
        bg="white"
        p={8}
        rounded="lg"
        shadow="lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Tick Mark Animation */}
        <MotionBox
          width="60px"
          height="60px"
          mx="auto"
          mb={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="green.100"
          rounded="full"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <MotionText
            fontSize="3xl"
            color="green.500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ✔
          </MotionText>
        </MotionBox>

        {/* Animated Heading */}
        <MotionBox
          as="h1"
          fontSize="2xl"
          fontWeight="bold"
          color="green.500"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {paymentStatus}
        </MotionBox>
        {/* Description */}
        <MotionText
          mt={4}
          color="gray.600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Thank you for your generous donation! You've made a difference!
        </MotionText>

        {/* Button to Go Back */}
        <MotionBox
          mt={6}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button
            as="a"
            href="/"
            colorScheme="blue"
            size="md"
            rounded="md"
            shadow="sm"
            _hover={{ shadow: "md" }}
          >
            Go Back to Donation Page
          </Button>
        </MotionBox>
      </MotionBox>
    </Center>
  );
};

export default Success;
