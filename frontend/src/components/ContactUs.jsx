import React, { useState } from "react";
import Swal from "sweetalert2";
import { Box, Flex, Image, Text, Input, Textarea, Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import sa from "../assets/flags/sa.png";
import usa from "../assets/flags/us.png";
import ne from "../assets/flags/ne.png";
import Footer from "./Footer";
import Header from "./Header";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "e92a15b7-cf45-4ac8-89c9-75ae00f162dd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        Swal.fire({ title: "Success!", text: "Your message has been sent successfully.", icon: "success", confirmButtonColor: "#ff6f3c" });
        event.target.reset();
      } else {
        Swal.fire({ title: "Error", text: data.message || "Failed to send message.", icon: "error", confirmButtonColor: "#ff6f3c" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Network issue. Please try again later.", icon: "error", confirmButtonColor: "#ff6f3c" });
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    { flag: sa, country: "South Africa", address: "575 Main Street, Durban, South Africa", email: "admin@yourdomain.com", phone: "+00 000 7254" },
    { flag: usa, country: "USA", address: "575 Main Street, Denver, USA", email: "admin@yourdomain.com", phone: "+00 000 7254" },
    { flag: ne, country: "Netherlands", address: "575 Main Street, Amsterdam, Netherlands", email: "admin@yourdomain.com", phone: "+00 000 7254" },
  ];

  return (
    <>
      <Box bg="#f9f9f9" p={10}>
        <Flex direction={{ base: "column", md: "column" }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            {contactCards.map((contact, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="10px"
                p={5}
                boxShadow="md"
                textAlign="center"
                mb={5}
              >
                <Image
                  src={contact.flag}
                  alt={`${contact.country} Flag`}
                  w="100px"
                  h="100px"
                  borderRadius="full"
                  mx="auto"
                  mb={3}
                />
                <Heading size="md" color="#ff6f3c" mb={2}>
                  General Enquiries
                </Heading>
                <Text color="black">{contact.address}</Text>
                <Text color="black">Email: {contact.email}</Text>
                <Text color="black">Call Us: {contact.phone}</Text>
              </Box>
            ))}
          </Flex>
          <Box bg="white" borderRadius="10px" p={5} boxShadow="md">
            <Heading size="md" color="#ff6f3c" mb={3} textAlign="center">
              Ready to Contact Us? Say Hello
            </Heading>
            <form onSubmit={onSubmit}>
              <Flex direction="column" gap={4}>
                <Box>
                  <Text fontWeight="bold" color="#ff6600">
                    Full Name
                  </Text>
                  <Input
                    type="text"
                    name="name"
                    pattern="[A-Za-z\s]+"
                    title="Only alphabets are allowed"
                    placeholder="Enter your full name"
                    required
                    color="black"
                  />
                </Box>
                <Flex gap={4}>
                  <Box flex={1}>
                    <Text fontWeight="bold" color="#ff6600">
                      Phone Number
                    </Text>
                    <Input
                      type="tel"
                      name="phone"
                      pattern="^\d{11}$"
                      title="Phone number must be 11 digits"
                      placeholder="Enter your phone number"
                      required
                      color="black"
                    />
                  </Box>
                  <Box flex={1}>
                    <Text fontWeight="bold" color="#ff6600">
                      Your Email
                    </Text>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      color="black"
                    />
                  </Box>
                </Flex>
                <Box>
                  <Text fontWeight="bold" color="#ff6600">
                    Subject
                  </Text>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Enter the subject"
                    required
                    color="black"
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" color="#ff6600">
                    Message
                  </Text>
                  <Textarea
                    name="message"
                    placeholder="Enter your message"
                    required
                    color="black"
                  />
                </Box>
                <Button
                  bg="#ff6600"
                  color="white"
                  _hover={{ bg: "#e65b2e" }}
                  type="submit"
                  isLoading={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ContactUs;