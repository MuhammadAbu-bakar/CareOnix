import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
import { Link } from "react-router-dom";

export default function LoginForm() {
  // State to store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State to store error message from backend
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Send data to backend
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Welcome !!!`); // Show success message
      console.log("Token:",data.token);
       localStorage.setItem("token", data.token);
         console.log(localStorage.getItem("token"));
      } else {
        setErrorMessage(data.message); // Set the error message from backend
        console.log("Token:", localStorage.getItem("token"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

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
          Login
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
                  aria-label="Username or email address"
                  value={email} // Bind input value to state
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

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
                <Input
                  type={showPassword ? "text" : "password"}
                  borderColor="#D3D3D3"
                  color="black"
                  pr="3rem" // Add padding-right to make space for the icon
                  value={password} // Bind input value to state
                  onChange={(e) => setPassword(e.target.value)} // Update state on change
                />
                <Box
                  as="button"
                  type="button"
                  onClick={togglePasswordVisibility}
                  position="absolute"
                  right="0.5rem"
                  top={{
                    base: "66%",
                    sm: "66%",
                    md: "66%",
                    lg: "66%",
                    xl: "66%",
                  }}
                  transform="translateY(-50%)"
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
                Log in
              </Button>
            </Stack>
          </form>
          {/* Display the error message from the backend */}
          {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
          <Text style={{ fontSize: "16px", color: "#555" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#f74f22",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Sign UP
            </Link>
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
