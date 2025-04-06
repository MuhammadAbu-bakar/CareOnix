import React, { useState, useEffect } from "react";
import { Table } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

function Families() {
  //Family data fetching
  const [families, setFamilies] = useState([]);
  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/families"); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch families");
        }
        const data = await response.json();
        setFamilies(data);
        return data; // This should return the families' data
      } catch (error) {
        console.error("Error fetching families:", error);
        return null;
      }
    };
    fetchFamilies();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(
    families[editingIndex]?.status || "Select Status"
  );

  const handleDelete = (index) => {
    setFamilies((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFamilies((prevData) =>
      prevData.map((row, i) =>
        i === index
          ? {
              ...row,
              isEditing: true,
              tempName: row.guardian,
              tempAddress: row.address,
              tempVerificationDate: row.date,
              tempStatus: row.status,
            }
          : row
      )
    );
  };
  // Function to update backend with changed values
  const handleEditSave = async (id) => {
   console.log("Edited data :",editingData)
    try {
      const response = await fetch(
        `http://localhost:5000/api/families/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingData),
        }
      );

      if (!response.ok) throw new Error("Failed to update family data");

      const updatedFamily = await response.json();
      console.log("Updated family:", updatedFamily);
    } catch (error) {
      console.error("Error updating family:", error);
    }
  };
  const handleSave = () => {
    console.log("In handle save");
  console.log("Families:",families)
      setFamilies((prevData) =>
        prevData.map((row, i) => {
        console.log("Ediiting Index:", editingIndex);
        if (i === editingIndex) {
          console.log("Updating row at index:", i, {
            ...row,
            guardian: row.tempName,
            address: row.tempAddress,
            date: row.tempVerificationDate,
            status: row.tempStatus,
            isEditing: false,
          });
        } else {
          console.log("Skipping row at index:", i, row);
        }
        console.log("Family id:",row._id)
        handleEditSave(row._id);
        return i === editingIndex
          ? {
              ...row,
              guardian: row.tempName,
              address: row.tempAddress,
              date: row.tempVerificationDate,
              status: row.tempStatus,
              isEditing: false,
            }
          : row;
        
      })
    );

    setEditingIndex(null); // Close the pop-up after saving
  };

  // Handle input changes for children
  const handleChildChange = (index, field, value) => {
    setEditingData((prev) => {
      const updatedChildren = [...prev.children];
      updatedChildren[index] = { ...updatedChildren[index], [field]: value };
      return { ...prev, children: updatedChildren };
    });
  };
  const handleChange = (index, key, value) => {
    setFamilies((prevData) =>
      prevData.map((row, i) => (i === index ? { ...row, [key]: value } : row))
    );
  };
  const filteredData = families.filter(
    (row) =>
      row.guardian.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "" || row.status === statusFilter)
  );

  //Update Values
  const [editingData, setEditingData] = useState({ ...families });

  // Handle input changes
  const handleEditChange = (field, value) => {
    setEditingData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w="20%"
        position="fixed"
        height="100vh"
        bg="#f74f22"
        p={5}
        display={["none", "flex", "flex"]}
        flexDirection="column"
      >
        <Flex alignItems="center" gap={4} mb={2}>
          <Avatar name="Jane Smith" src="https://bit.ly/sage-adebayo" />
          <Box>
            <Text
              fontWeight="bold"
              color="white"
              fontSize={{ base: "10px", sm: "11px", md: "16px", lg: "18px" }}
              fontFamily="'Quicksand', sans-serif"
            >
              Jane Smith
            </Text>
          </Box>
        </Flex>

        <VStack align="start">
          <Link to="/verification" _hover={{ textDecoration: "none" }}>
            <Text
              color="white"
              cursor="pointer"
              _hover={{ color: "gray.400" }}
              fontWeight="bold"
              fontFamily="'Quicksand', sans-serif"
            >
              Verification Form
            </Text>
          </Link>

          <Link to="/families" _hover={{ textDecoration: "none" }}>
            <Text
              color="white"
              cursor="pointer"
              _hover={{ color: "gray.400" }}
              textDecoration="underline"
              fontWeight="bold"
              fontFamily="'Quicksand', sans-serif"
            >
              Manage Verified Families
            </Text>
          </Link>
          <Link to="/predict" _hover={{ textDecoration: "none" }}>
            <Text
              color="white"
              cursor="pointer"
              _hover={{ color: "gray.400" }}
              fontWeight="bold"
              fontFamily="'Quicksand', sans-serif"
            >
              Predict Collection
            </Text>
          </Link>
        </VStack>
      </Box>

      {/* Main Content */}
      <Flex
        direction="column"
        py={3}
        ml={["0%", "20%"]}
        w={["100%", "80%"]}
        px={4}
        bg="#FFDEAD"
        // h={["100%", "100%"]}
        height="100vh"
      >
        <Heading fontSize={{ base: "lg", md: "xl" }} color="black">
          Families
        </Heading>

        {/* Status Filter Buttons */}
        <Box mt={2} display="flex" flexWrap="wrap">
          <Button
            bg={statusFilter === "Active" ? "#f74f22" : "#FFDEAD"}
            color={statusFilter === "Active" ? "white" : "black"}
            px={2}
            py={1}
            mx={1}
            my={1}
            border={"1px solid black"}
            onClick={() =>
              setStatusFilter(statusFilter === "Active" ? "" : "Active")
            }
          >
            Active
          </Button>
          <Button
            bg={statusFilter === "Inactive" ? "#f74f22" : "#FFDEAD"}
            color={statusFilter === "Inactive" ? "white" : "black"}
            px={2}
            py={1}
            mx={1}
            border={"1px solid black"}
            my={1}
            onClick={() =>
              setStatusFilter(statusFilter === "Inactive" ? "" : "Inactive")
            }
          >
            Inactive
          </Button>
        </Box>

        {/* Search Input */}
        <Box mb={4} w={{ base: "100%", md: "60%" }}>
          <Input
            placeholder="Search families by name"
            bg="#FFDEAD"
            my={4}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>

        {/* Table */}
        <Box
          bg="#FFDEAD"
          border="1px solid black"
          borderRadius="md"
          p={4}
          overflowX="auto"
        >
          <Table.Root size="sm" minW="600px">
            <Table.Header>
              <Table.Row backgroundColor="#FFDEAD">
                <Table.ColumnHeader color="black">Name</Table.ColumnHeader>
                <Table.ColumnHeader color="black">Address</Table.ColumnHeader>
                <Table.ColumnHeader color="black">
                  Verification Date
                </Table.ColumnHeader>
                <Table.ColumnHeader color="black">Status</Table.ColumnHeader>
                <Table.ColumnHeader
                  color="black"
                  textAlign="center"
                  // display="flex"
                  // justifyContent="center"
                >
                  Actions
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredData.map((row, index) => (
                <Table.Row
                  key={index}
                  backgroundColor="#FFDEAD"
                  color={"black"}
                >
                  <Table.Cell>
                    {row.isEditing ? (
                      <Input
                        value={row.tempName}
                        onChange={(e) =>
                          handleChange(index, "tempName", e.target.value)
                        }
                      />
                    ) : (
                      <Text color="black" fontSize={{ base: "xs", md: "sm" }}>
                        {row.guardian}
                      </Text>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    {row.isEditing ? (
                      <Input
                        value={row.tempAddress}
                        onChange={(e) =>
                          handleChange(index, "tempAddress", e.target.value)
                        }
                      />
                    ) : (
                      <Text color="black" fontSize={{ base: "xs", md: "sm" }}>
                        {row.address}
                      </Text>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    {row.isEditing ? (
                      <Input
                        value={row.tempVerificationDate}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "tempVerificationDate",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      <Text color="black" fontSize={{ base: "xs", md: "sm" }}>
                        {new Date(row.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Text>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    {row.isEditing ? (
                      <Input
                        value={row.tempStatus}
                        onChange={(e) =>
                          handleChange(index, "tempStatus", e.target.value)
                        }
                      />
                    ) : (
                      <Button
                        bg="#f74f22"
                        color="white"
                        w={{ base: "60px", md: "80px", lg: "100px" }}
                        p={1}
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        {row.status}
                      </Button>
                    )}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    {row.isEditing ? (
                      <Button
                        bg="gray.300"
                        color="black"
                        fontSize={{ base: "xs", md: "sm" }}
                        mx={1}
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        my={2}
                        bg="#f74f22"
                        color="white"
                        fontSize={{ base: "xs", md: "sm" }}
                        mx={1}
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      my={2}
                      bg="#f74f22"
                      color="white"
                      fontSize={{ base: "xs", md: "sm" }}
                      mx={1}
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Flex>

      {/* Pop-up Form for Editing */}
      {editingIndex !== null && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            bg="white"
            p={5}
            borderRadius="md"
            boxShadow="lg"
            width="400px"
            display="flex"
            flexDirection="column"
            maxHeight="400px"
            overflowY="auto"
            border="1px solid #ccc"
          >
            {/*             
            <Button
              position="absolute"
              top={2}
              right={2}
              onClick={() => setEditingIndex(null)}
            /> */}
            <Heading fontSize="lg" mb={4} color="black">
              Edit Family
            </Heading>
            <VStack spacing={4} align="stretch" color={"black"}>
              <Input
                value={families[editingIndex].formNumber}
                onChange={(e) => handleChange("formNumber", e.target.value)}
                placeholder="Form Number"
                color="black"
              />
              <Input
                value={
                  families[editingIndex]?.tempVerificationDate
                    ? new Date(families[editingIndex].tempVerificationDate)
                        .toISOString()
                        .split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  handleChange(
                    editingIndex,
                    "tempVerificationDate",
                    e.target.value
                  )
                }
                type="date"
                placeholder="Select a date"
              />

              <Input
                value={families[editingIndex].tempName}
                onChange={(e) =>
                  handleChange(editingIndex, "tempName", e.target.value)
                }
                placeholder="Name"
              />
              <Input
                value={families[editingIndex].cnic}
                onChange={(e) => handleChange("cnic", e.target.value)}
                placeholder="CNIC"
              />
              <Input
                value={families[editingIndex].fatherOrHusband}
                onChange={(e) =>
                  handleChange("fatherOrHusband", e.target.value)
                }
                placeholder="Father/Husband Name"
              />
              <Input
                value={families[editingIndex].contactNumber}
                onChange={(e) => handleChange("contactNumber", e.target.value)}
                placeholder="Contact Number"
              />
              <Input
                value={families[editingIndex].tempAddress}
                onChange={(e) =>
                  handleChange(editingIndex, "tempAddress", e.target.value)
                }
                placeholder="Address"
              />
              <Input
                value={families[editingIndex].city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="City"
              />
              <Input
                value={families[editingIndex].houseArea}
                onChange={(e) => handleChange("houseArea", e.target.value)}
                placeholder="House Area (in Marlas)"
              />
              <Input
                value={families[editingIndex].houseType}
                onChange={(e) => handleChange("houseType", e.target.value)}
                placeholder="House Type (owned/rented)"
              />
              <Input
                value={families[editingIndex].houseRent}
                onChange={(e) => handleChange("houseRent", e.target.value)}
                placeholder="House Rent"
                type="number"
              />
              <Input
                value={families[editingIndex].medicineExpense}
                onChange={(e) =>
                  handleChange("medicineExpense", e.target.value)
                }
                placeholder="Medicine Expense"
                type="number"
              />
              <Input
                value={families[editingIndex].electricityBill}
                onChange={(e) =>
                  handleEditChange("electricityBill", e.target.value)
                }
                placeholder="Electricity Bill"
                type="number"
              />
              <Input
                value={families[editingIndex].transport}
                onChange={(e) => handleEditChange("transport", e.target.value)}
                placeholder="Transport Type"
              />
              <Input
                value={families[editingIndex].num_of_members}
                onChange={(e) =>
                  handleEditChange("num_of_members", e.target.value)
                }
                placeholder="Number of Family Members"
                type="number"
              />
              <Input
                value={families[editingIndex].totalIncome}
                onChange={(e) =>
                  handleEditChange("totalIncome", e.target.value)
                }
                placeholder="Total Income"
                type="number"
              />
              <Input
                value={families[editingIndex].sourceOfIncome}
                onChange={(e) =>
                  handleEditChange("sourceOfIncome", e.target.value)
                }
                placeholder="Source of Income"
              />
              <Input
                value={families[editingIndex].familyDetails}
                onChange={(e) =>
                  handleEditChange("familyDetails", e.target.value)
                }
                placeholder="Family Details"
              />
              <Input
                value={families[editingIndex].verifiedBy}
                onChange={(e) => handleEditChange("verifiedBy", e.target.value)}
                placeholder="Verified By"
              />
              {console.log(
                "Editing Data Before Rendering Children:",
                families[editingIndex]
              )}
              <SelectRoot
                onValueChange={(item) => {
                  console.log("Selected Value:", item.value[0]);
                  setSelectedStatus(item.value[0]); // Updating state to trigger re-render
                  handleChange(editingIndex, "tempStatus", item.value[0]); // Call handleChange to update state properly
                }}
              >
                <SelectLabel color={"black"}>Select Status</SelectLabel>
                <SelectTrigger>
                  <SelectValueText color={"black"}>
                    {families[editingIndex].tempStatus}
                  </SelectValueText>
                </SelectTrigger>
                <SelectContent color={"black"}>
                  {["Pending", "Deserving", "Non-Deserving"].map((status) => (
                    <SelectItem item={{ value: status }} key={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>

              {/* Dynamic Inputs for Children */}
              {families[editingIndex].children &&
                families[editingIndex].children.length > 0 && (
                  <Box border="1px solid #ccc" borderRadius="md" p={4}>
                    <Text fontSize="lg" fontWeight="bold">
                      Children Details
                    </Text>
                    {families[editingIndex].children.map((child, index) => (
                      <Box
                        key={index}
                        border="1px solid #ddd"
                        p={3}
                        borderRadius="md"
                        my={2}
                      >
                        <Text fontSize="md" fontWeight="bold">
                          Child {index + 1}
                        </Text>
                        <Input
                          value={child.name}
                          onChange={(e) =>
                            handleChildChange(index, "name", e.target.value)
                          }
                          placeholder="Child Name"
                        />
                        <Input
                          value={child.age}
                          onChange={(e) =>
                            handleChildChange(index, "age", e.target.value)
                          }
                          placeholder="Age"
                          type="number"
                        />
                        <Input
                          value={child.studying ? "Yes" : "No"}
                          onChange={(e) =>
                            handleChildChange(
                              index,
                              "studying",
                              e.target.value === "Yes"
                            )
                          }
                          placeholder="Studying (Yes/No)"
                        />
                        <Input
                          value={child.earning ? "Yes" : "No"}
                          onChange={(e) =>
                            handleChildChange(
                              index,
                              "earning",
                              e.target.value === "Yes"
                            )
                          }
                          placeholder="Earning (Yes/No)"
                        />
                        <Input
                          value={child.instituteName}
                          onChange={(e) =>
                            handleChildChange(
                              index,
                              "instituteName",
                              e.target.value
                            )
                          }
                          placeholder="Institute Name"
                        />
                        <Input
                          value={child.fees}
                          onChange={(e) =>
                            handleChildChange(index, "fees", e.target.value)
                          }
                          placeholder="Fees"
                          type="number"
                        />
                        <Input
                          value={child.className}
                          onChange={(e) =>
                            handleChildChange(
                              index,
                              "className",
                              e.target.value
                            )
                          }
                          placeholder="Class Name"
                        />
                        <Input
                          value={child.sourceOfIncome || ""}
                          onChange={(e) =>
                            handleChildChange(
                              index,
                              "sourceOfIncome",
                              e.target.value
                            )
                          }
                          placeholder="Source of Income"
                        />
                        <Input
                          value={child.income}
                          onChange={(e) =>
                            handleChildChange(index, "income", e.target.value)
                          }
                          placeholder="Income"
                          type="number"
                        />
                      </Box>
                    ))}
                  </Box>
                )}
              <Button onClick={handleSave} colorScheme="blue" w="100%">
                Save Changes
              </Button>
            </VStack>
          </Box>
        </Box>
      )}
    </Flex>
  );
}

export default Families;
