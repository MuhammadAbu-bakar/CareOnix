import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "@chakra-ui/react";
import { format } from "date-fns";
import { useNavigate,Link } from "react-router-dom"; // Import navigate

function DonorDashboard() {
  //donation history transfered to fontend variable
  const [donationHistory, setDonationHistory] = useState([]);
  const navigate = useNavigate(); // For redirection
  const token = localStorage.getItem("token"); // Get the token from localStorage or sessionStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track auth state

  //fetching donation history from backend
  useEffect(() => {
    //token for authentication
    if (!token) {
      navigate("/login");
      return;
    }
    setIsAuthenticated(true); // User is authenticated, show the UI
    const getDonationHistory = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/donor-history",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Assuming token is needed for authentication
            },
          }
        );

        if (!response.ok) {
          console.error(
            "Failed to fetch donation history",
            await response.text()
          );
          return;
        }

        const donationHistory = await response.json();
        console.log("Donation history:", donationHistory);
        setDonationHistory(donationHistory);
        // Handle the response (e.g., display the donation history)
      } catch (error) {
        console.error(error);
      }
    };
    if (token) {
      getDonationHistory(); // Fetch payment details if session ID exists
    }
  }, [token, location.pathname]);

  //frontend
  const [selectedDate, setSelectedDate] = useState(new Date());
  // Filter donations by selected date

  // Check if selected date is today's date
  const isToday =
    format(selectedDate, "dd/MM/yyyy") === format(new Date(), "dd/MM/yyyy");
  const filteredDonations = isToday
    ? donationHistory
    : donationHistory.filter(
        (row) =>
          format(new Date(row.date), "dd/MM/yyyy") ===
          format(selectedDate, "dd/MM/yyyy")
      );

  const totalAmount = filteredDonations.reduce(
    (accumulator, currentDonation) => {
      return accumulator + currentDonation.amount;
    },
    0
  );

  if (!isAuthenticated) {
    // Save the last visited page before redirecting
    localStorage.setItem("lastPage", location.pathname);
    return null;
  }
  return (
    <Flex minH="100vh" justify="center" align="center" width="100%">
      <Flex
        direction="column"
        p={6}
        borderRadius="md"
        width="100%"
        px={{ base: "12px", small: "12px", md: "12px", lg: "16px" }}
      >
        <Button
          as={Link}
          to="/login"
          bg="#F74F22"
          color="white"
          width={{ base: "800%", sm: "120px", md: "180px" }}
          fontSize="md"
        >
          Login
        </Button>
        <Heading size="lg" mb={6} color={"black"}>
          Dashboard
        </Heading>

        {/* Avatar & User Info */}
        <Flex align="center" mb={6}>
          <Avatar
            name={donationHistory?.[0]?.name || "No name available"}
            src={"https://randomuser.me/api/portraits/men/1.jpg"}
          />
          <Box pl={4}>
            <Text color={"black"} fontSize="lg" fontWeight="bold">
              {donationHistory?.[0]?.name || "No name available"}
            </Text>
            <Text fontSize="md" color="gray.600">
              Welcome back! You have made {donationHistory?.length || 0}{" "}
              donation's
            </Text>
          </Box>
        </Flex>

        {/* Donation Summary - Responsive Column for Small Screens */}
        <Flex
          direction={{ base: "column", md: "row" }}
          my={6}
          width={{ base: "80%", md: "30%" }}
          gap={4}
        >
          <Box
            bg={"#FFDEAD"}
            borderRadius="md"
            //boxShadow="sm"
            px={5}
            py={3}
            w={{ base: "100%", md: "full" }}
          >
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "md" }}
              fontWeight="bold"
              color={"black"}
            >
              Total Donations
            </Text>
            <Text fontSize="xl" color={"black"}>
              {totalAmount}
            </Text>
          </Box>
          <Box
            bg={"#FFDEAD"}
            borderRadius="md"
            // boxShadow="sm"
            px={5}
            py={3}
            w={{ base: "100%", md: "full" }}
          >
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "md" }}
              fontWeight="bold"
              color={"black"}
            >
              Donations Made
            </Text>
            <Text fontSize="xl" color={"black"}>
              {filteredDonations?.length || 0}
            </Text>
          </Box>
        </Flex>

        <Text fontWeight="bold" fontSize="md" mb={2} color={"black"}>
          Donation History
        </Text>

        {/* Date Picker */}
        <Box mb={4}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            customInput={
              <Input
                bg="white"
                color={"black"}
                border="1px solid"
                borderColor="gray.300"
              />
            }
          />
        </Box>

        {/* Search Input */}
        <Box mb={4}>
          <Input
            placeholder="Search for a cause"
            bg="#FFDEAD"
            color={"black"}
            border="none"
          />
        </Box>

        {/* Responsive Table */}
        <Box bg="white" borderRadius="md" color="black">
          <Table.Root
            size="sm"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
          >
            <Table.Header g="white">
              <Table.Row
                fontSize={{ base: "9px", sm: "sm", md: "md", lg: "lg" }}
                bg="white"
              >
                <Table.ColumnHeader
                  borderBottom="1px solid"
                  borderBottomColor="gray.300"
                  color="black"
                >
                  Donor
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  borderBottom="1px solid"
                  borderBottomColor="gray.300"
                  color="black"
                >
                  Date
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  borderBottom="1px solid"
                  borderBottomColor="gray.300"
                  color="black"
                >
                  Amount
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  borderBottom="1px solid"
                  borderBottomColor="gray.300"
                  color="black"
                >
                  Payment Method
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  borderBottom="1px solid"
                  borderBottomColor="gray.300"
                  color="black"
                >
                  Status
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredDonations.map((row, index) => (
                <Table.Row
                  key={index}
                  fontSize={{ base: "8px", sm: "12px", md: "15px", lg: "14px" }}
                  bg="white"
                >
                  <Table.Cell
                    borderBottom="1px solid"
                    borderBottomColor="gray.300"
                  >
                    {row.name}
                  </Table.Cell>
                  <Table.Cell
                    borderBottom="1px solid"
                    borderBottomColor="gray.300"
                  >
                    {format(new Date(row.date), "dd/MM/yyyy")}
                  </Table.Cell>
                  <Table.Cell
                    borderBottom="1px solid"
                    borderBottomColor="gray.300"
                  >
                    {row.amount}
                  </Table.Cell>
                  <Table.Cell
                    borderBottom="1px solid"
                    borderBottomColor="gray.300"
                  >
                    {row.paymentMethod}
                  </Table.Cell>
                  <Table.Cell
                    borderBottom="1px solid"
                    borderBottomColor="gray.300"
                    width={"100px"}
                  >
                    <Button
                      bg="gray.200"
                      borderRadius="lg"
                      // boxShadow="md"
                      fontSize={{ base: "8px", sm: "10px", md: "12px" }}
                      color="black"
                      p={0}
                      w="full"
                      height="25px"
                      lineHeight="normal"
                      _hover={{
                        bg: "gray.300",
                      }}
                      _active={{
                        bg: "gray.400",
                      }}
                      textAlign="center"
                    >
                      {row.status}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Flex>
    </Flex>
  );
}

export default DonorDashboard;
