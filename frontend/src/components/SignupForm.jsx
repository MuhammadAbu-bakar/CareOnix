import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React,{ useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
import { Link } from "react-router-dom";

export default function SignupForm() {
  // State to capture form input values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Optional
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  //show passsword
  const [showPassword, setShowPassword] = useState(false);

  //Top Styles for Eye Icon
  const [topStyles, setTopStyles] = useState({
    base: "66%",
    sm: "66%",
    md: "66%",
    lg: "66%",
    xl: "66%",
  });
  //Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Update fullName when the input name is 'fullName'
    if (name === "fullName") {
      setFullName(value);
    }
    // If the input name is 'email', update the email state separately
    if (name === "email") {
      setEmail(value);
    }
     if (name === "phoneNumber") {
       setPhoneNumber(value);
     }
     if (name === "password") {
      setPassword(value);
     }
     if (name === "confirmPassword") {
       setConfirmPassword(value);
     }
  };
  //Error handlings
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      // Send form data to the backend
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phoneNumber, // Optional
          password,
          confirmPassword,
        }), // Sending the data as JSON
      });

      const data = await response.json(); // Get the response data

      if (response.ok) {
        alert("Account created successfully!");
      } else {
        setErrorMessage(data.message || "Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
      console.log("Form submitted successfully", formData);
  };
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div>
      <Flex
        // align="center"
        // justify="center"
        direction="column"
        px={{ base: 4, sm: 4, md: 8 }} // Add padding for smaller screens
        py={{ base: 4, sm: 0 }} // Vertical padding for small screens
        mb={"60px"}
      >
        <Heading
          size="lg"
          mb="6"
          // ml={{ base: 0, sm: 0 }}
          color="black"
          fontSize={{ base: "30px", sm: "28px", md: "32px" }} // Responsive font size
          fontFamily="'Quicksand', sans-serif"
          fontWeight="bold"
        >
          SignUp
        </Heading>
        <Box
          w={{ base: "100%", sm: "95%", md: "653px" }} // Full width on small screens, fixed width on larger screens
          // mx="auto"
          p="6"
          borderWidth="1px"
          borderRadius="md"
          borderColor="#cfc8d8"
          background="white"
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing="4" gap="4">
              {/* -------Full Name------ */}
              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }} // Adjust font size for smaller screens
                >
                  Full Name
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  isrequired="true"
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>
              {/* -------Email------ */}
              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }} // Adjust font size for smaller screens
                >
                  Email address
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Input
                  type="email"
                  isrequired="true"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Username or email address"
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>
              {/* ----Phone Number--- */}
              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }} // Adjust font size for smaller screens
                >
                  Phone Number
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  isrequired="true"
                  aria-label="Username or email address"
                  borderColor="#D3D3D3"
                  color="black"
                  placeholder="Enter 10-digit phone number"
                />
              </Box>
              {/* ----Password--- */}
              <Box position="relative" w="100%">
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }} // Adjust font size for smaller screens
                >
                  Password
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Flex align="center" position="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    borderColor="#D3D3D3"
                    color="black"
                    pr="3rem" // Add padding-right to make space for the icon
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isrequired="true"
                  />
                  <Box
                    as="button"
                    type="button"
                    onClick={togglePasswordVisibility}
                    position="absolute"
                    right="0.5rem"
                    bg="transparent"
                    border="none"
                    cursor="pointer"
                    aria-label="Toggle Password Visibility"
                  >
                    {showPassword ? (
                      <FiEye size="18px" color="black" />
                    ) : (
                      <FiEyeOff size="18px" color="black" />
                    )}
                  </Box>
                </Flex>
              </Box>
              {/* ----Confirm Password--- */}
              <Box position="relative" w="100%">
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Confirm Password
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>

                <Flex align="center" position="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    borderColor="#D3D3D3"
                    color="black"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    pr="3rem"
                    isrequired="true"
                  />

                  <Box
                    as="button"
                    type="button"
                    onClick={togglePasswordVisibility}
                    position="absolute"
                    right="0.5rem"
                    bg="transparent"
                    border="none"
                    cursor="pointer"
                    aria-label="Toggle Password Visibility"
                  >
                    {showPassword ? (
                      <FiEye size="18px" color="black" />
                    ) : (
                      <FiEyeOff size="18px" color="black" />
                    )}
                  </Box>
                </Flex>
              </Box>

              <Button
                colorScheme="orange"
                type="submit"
                w={{ base: "100%", sm: "100%", md: "85px" }} // Full width on small screens, fixed width on larger screens
                background="#f74f22"
                color="white"
                py="1.5rem" // Add vertical padding for better click area
                fontSize={{
                  base: "16px",
                  sm: "18px",
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                }}
                fontWeight={{
                  base: "normal",
                  sm: "normal",
                  md: "normal",
                  lg: "normal",
                  xl: "normal",
                }}
              >
                Signup
              </Button>
            </Stack>
          </form>
          {errorMessage && <Text color="red.500">{errorMessage}</Text>}
          <Text fontSize="16px" color="gray.600">
            Have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#f74f22",
                fontWeight: "bold",
                textDecoration: "none", // Ensures no default underline
              }}
            >
              Login
            </Link>
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
