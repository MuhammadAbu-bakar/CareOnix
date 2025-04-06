import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Heading,
  Text,
  IconButton,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
import { Link } from "react-router-dom";

function Volunteer() {
  // State to store input values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [campaign, setCampaign] = useState("");
  const [event, setEvent] = useState("");
  const [currentInstitute, setCurrentInstitute] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Display form data in the console
    console.log({
      fullName,
      email,
      country,
      mobileNo,
      gender,
      dateOfBirth,
      bloodGroup,
      areaOfInterest,
      campaign,
      event,
      currentInstitute,
      referenceCode,
      password,
    });

    // Optionally, show an alert with the form data
    alert(`Form Data:\n
      Full Name: ${fullName}\n
      Email: ${email}\n
      Country: ${country}\n
      Mobile No: ${mobileNo}\n
      Gender: ${gender}\n
      Date Of Birth: ${dateOfBirth}\n
      Blood Group: ${bloodGroup}\n
      Area Of Interest: ${areaOfInterest}\n
      Campaign: ${campaign}\n
      Event: ${event}\n
      Current Institute: ${currentInstitute}\n
      Reference Code: ${referenceCode}\n
      Password: ${password}
    `);
  };

  return (
    <div>
      <Flex
        direction="column"
       p={"41px"}
      >
        <Heading
          size="lg"
          mb="6"
          color="black"
          fontSize={{ base: "30px", sm: "28px", md: "32px" }} // Responsive font size
          fontFamily="'Quicksand', sans-serif"
          fontWeight="bold"
        >
          Registration
        </Heading>
        <Box
          w={{ base: "100%", sm: "95%", md: "653px" }} // Full width on small screens, fixed width on larger screens
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
                  Full Name
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Input
                  type="text"
                  isrequired="true"
                  aria-label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Email
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Input
                  type="email"
                  isrequired="true"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Country
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Input
                  type="text"
                  isrequired="true"
                  aria-label="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Mobile No
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Input
                  type="text"
                  isrequired="true"
                  aria-label="Mobile No"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Gender
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <SelectRoot value={gender} onValueChange={setGender}>
                  <SelectTrigger className="border p-2 rounded w-full">
                    <SelectValueText placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="border bg-white shadow-md p-2 rounded">
                    <SelectLabel className="text-gray-500 p-2">
                      Gender
                    </SelectLabel>
                    <SelectItem value="male" className="p-2 hover:bg-gray-100">
                      Male
                    </SelectItem>
                    <SelectItem
                      value="female"
                      className="p-2 hover:bg-gray-100"
                    >
                      Female
                    </SelectItem>
                    <SelectItem value="other" className="p-2 hover:bg-gray-100">
                      Other
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Date Of Birth
                  <Text as="span" color="red.500" ml="1">
                    *
                  </Text>
                </Text>
                <Input
                  type="date"
                  isrequired="true"
                  aria-label="Date Of Birth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Blood Group
                </Text>
                <Input
                  type="text"
                  aria-label="Blood Group"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Area Of Interest
                </Text>
                <Input
                  type="text"
                  aria-label="Area Of Interest"
                  value={areaOfInterest}
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Campaign
                </Text>
                <Input
                  type="text"
                  aria-label="Campaign"
                  value={campaign}
                  onChange={(e) => setCampaign(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Event
                </Text>
                <Input
                  type="text"
                  aria-label="Event"
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Current Institute
                </Text>
                <Input
                  type="text"
                  aria-label="Current Institute"
                  value={currentInstitute}
                  onChange={(e) => setCurrentInstitute(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
                >
                  Reference Code
                </Text>
                <Input
                  type="text"
                  aria-label="Reference Code"
                  value={referenceCode}
                  onChange={(e) => setReferenceCode(e.target.value)}
                  borderColor="#D3D3D3"
                  color="black"
                />
              </Box>

              <Box position="relative" w="100%">
                <Text
                  fontFamily="'Quicksand', sans-serif"
                  fontWeight={500}
                  color="black"
                  fontSize={{ base: "14px", sm: "15px" }}
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
                  pr="3rem"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Box
                  as="button"
                  type="button"
                  onClick={togglePasswordVisibility}
                  position="absolute"
                  right="0.5rem"
                  top="66%"
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
                w={{ base: "100%", sm: "100%", md: "85px" }}
                background="#f74f22"
                color="white"
                py="1.5rem"
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
                Register
              </Button>
            </Stack>
          </form>
          {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
          
        </Box>
      </Flex>
    </div>
  );
}

export default Volunteer;
