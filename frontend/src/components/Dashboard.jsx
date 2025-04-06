import React, { useState } from "react";
import { Box, Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "@chakra-ui/react";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [user, setUser] = useState({
    name: "Jane Smith",
    avatar: "https://bit.ly/sage-adebayo",
    totalDonations: "$500,000",
    donationsMade: 5,
  });

  const [tableData, setTableData] = useState([
    { donor: "James Smith", date: "16/02/2024", amount: "$3000", payment: "Card", status: "Completed" },
    { donor: "Sarah Johnson", date: "17/02/2024", amount: "$2000", payment: "PayPal", status: "Completed" },
    { donor: "Michael Brown", date: "18/02/2024", amount: "$1500", payment: "Debit Card", status: "Pending" },
    { donor: "Emily Davis", date: "19/02/2024", amount: "$2500", payment: "Credit Card", status: "Completed" },
    { donor: "Daniel Martinez", date: "20/02/2024", amount: "$1800", payment: "Cash", status: "Cancelled" },
    { donor: "Olivia Garcia", date: "21/02/2024", amount: "$2200", payment: "PayPal", status: "Completed" },
  ]);

  return (
    <Flex minH="100vh" justify="center" align="center"  width="100%">
      <Flex direction="column" p={6} borderRadius="md" width="100%"  px={{base:"2px",small:"6px",md:"12px",lg:"16px"}}>
        <Heading size="lg" mb={6}>Dashboard</Heading>

        {/* Avatar & User Info */}
        <Flex align="center" mb={6}>
          <Avatar name={user.name} src={user.avatar} />
          <Box pl={4}>
            <Text fontSize="lg" fontWeight="bold">{user.name}</Text>
            <Text fontSize="md" color="gray.600">Welcome back! You have made {user.donationsMade} donations!</Text>
          </Box>
        </Flex>

        {/* Donation Summary - Responsive Column for Small Screens */}
        <Flex direction={{ base: 'column', md: 'row' }} my={6} width={{ base: "80%", md: "30%" }} gap={4}>
  <Box 
    bg={'gray.200'} 
    borderRadius="md" 
    boxShadow="md" 
    px={5} 
    py={3} 
    w={{ base: "100%", md: "full" }} 
  >
    <Text fontSize={{ base: "14px", sm: "14px", md: "md" }} fontWeight="bold">
      Total Donations
    </Text>
    <Text fontSize="xl">{user.totalDonations}</Text>
  </Box>
  <Box 
    bg={'gray.200'} 
    borderRadius="md" 
    boxShadow="md" 
    px={5} 
    py={3} 
    w={{ base: "100%", md: "full" }} 
  >
    <Text fontSize={{ base: "14px", sm: "14px", md: "md" }} fontWeight="bold">
      Donations Made
    </Text>
    <Text fontSize="xl">{user.donationsMade}</Text>
  </Box>
</Flex>


        <Text fontWeight="bold" fontSize="md" mb={2}>Date History</Text>

        {/* Date Picker */}
        <Box mb={4}>
          <DatePicker 
            selected={selectedDate} 
            onChange={(date) => setSelectedDate(date)} 
            dateFormat="dd/MM/yyyy" 
            customInput={<Input bg="white" />} 
          />
        </Box>

        {/* Search Input */}
        <Box mb={4}>
          <Input placeholder="Search for a cause" bg="gray.200" />
        </Box>

        {/* Responsive Table */}
        <Box bg="white" borderRadius="md" boxShadow="md" p={4}  >
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row fontSize={{ base: "9px", sm: "sm",md:"md",lg:"lg" }}>
                <Table.ColumnHeader>Donor</Table.ColumnHeader>
                <Table.ColumnHeader>Date</Table.ColumnHeader>
                <Table.ColumnHeader>Amount</Table.ColumnHeader>
                <Table.ColumnHeader>Payment Method</Table.ColumnHeader>
                <Table.ColumnHeader>Status</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tableData.map((row, index) => (
                <Table.Row key={index} fontSize={{ base: "8px", sm: "12px" , md:"15px" , lg:"14px"}}>
                  <Table.Cell>{row.donor}</Table.Cell>
                  <Table.Cell>{row.date}</Table.Cell>
                  <Table.Cell>{row.amount}</Table.Cell>
                  <Table.Cell>{row.payment}</Table.Cell>
                  <Table.Cell>
                    <Button
                        bg="gray.200"
                        borderRadius="lg"
                        boxShadow="md"
                        fontSize={{base:"8px",sm:"10px",md:"12px"}}
                        color="black"
                        p={0}  
                        w="full"  
                        height="auto"  
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

export default Dashboard;
