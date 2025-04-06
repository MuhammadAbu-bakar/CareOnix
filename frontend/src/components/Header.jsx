import React, { useState } from "react";
import { Box, Flex, Text, Spacer, VStack } from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";
import { GoPaperAirplane } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { GoArrowDownRight } from "react-icons/go";
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About US", path: "/about" },
    { name: "Contact US", path: "/contact" },
    { name: "AdminDashboard", path: "/verification" },
  ];
const location = useLocation();
  return (
    <div>
      <Flex
        // as="header"
        bg="#F74F22"
        color="white"
        px={{ base: 4, md: 6 }}
        py={{ base: 1.5, md: 2 }}
        align="center"
        fontSize={{ base: "xs", md: "xs" }}
        mx={{ base: 4, md: 10 }}
        mb={{ base: 1, md: 0 }}
        roundedBottom={15}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          gap={6}
          wrap="wrap"
          align="center"
          justify="center"
          display={{ base: "none", md: "flex" }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <FaMapMarkerAlt color="var(--chakra-colors-yellow-400)" />
            <Text>
              <Text as="span" fontWeight="bold">
                Location:
              </Text>{" "}
              Lahore, Pakistan
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <FaEnvelope color="var(--chakra-colors-yellow-400)" />
            <Text>
              <Text as="span" fontWeight="bold">
                Email:
              </Text>{" "}
              Careonix@gmail.com
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <FaPhoneAlt color="var(--chakra-colors-yellow-400)" />
            <Text>
              <Text as="span" fontWeight="bold">
                Phone:
              </Text>{" "}
              +92 060 712 34
            </Text>
          </Box>
        </Flex>

        <Spacer />
        <Flex align="center" gap={3}>
          <CiUser color="var(--chakra-colors-yellow-400)" />
          <Link
            to="/volunteer"
            fontWeight="bold"
            cursor="pointer"
            fontSize={{ base: "sm", md: "md", "600px": "16px" }}
          >
            Become a Volunteer
          </Link>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoSkype />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoPaperAirplane />
          </a>
        </Flex>
      </Flex>
      <Flex
        // as="header"
        bg="white"
        color="black"
        px={{ base: 4, md: 10 }}
        py={{ base: 2, md: 1 }}
        w="100%"
        maxWidth="container.xl"
        mx="auto"
        align="center"
        fontSize={{ base: "xs", md: "sm" }}
        justify="space-between"
        direction="row"
        textAlign={{ base: "center", md: "left" }}
        position="relative"
      >
        <Flex
          align="center"
          gap={2}
          flex={{ base: 1, md: "none" }}
          justify={{ base: "center", md: "flex-start" }}
        >
          <Flex direction="column">
            <Text fontSize={{ base: "2xl", md: "2xl" }} fontWeight="bold">
              CareOnix
            </Text>
            <Text color="red" fontSize={{ base: "sm", md: "sm" }}>
              Welfare Foundation
            </Text>
          </Flex>
        </Flex>

        <Flex align="center" gap={6} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              <Text
                color={location.pathname === item.path ? "#F74F22" : "black"}
                _hover={{ color: "#F74F22", cursor: "pointer" }}
                fontSize={{ base: "xs", md: "md" }}
              >
                {item.name}
              </Text>
            </Link>
          ))}
        </Flex>

        <Flex
          align="center"
          display={{ base: "none", md: "flex" }}
          ml={4}
          gap={"13px"}
        >
          <Button
            as={Link}
            to="/donate"
            bg="#F74F22"
            color="white"
            leftIcon={<GoArrowDownRight />}
            width={{ base: "800%", sm: "120px", md: "180px" }}
            fontSize="md"
          >
            Donate Now
          </Button>
          <Link to="/donor-dashboard">
            <Avatar.Root>
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
          </Link>
        </Flex>

        <Box
          display={{ base: "block", md: "none" }}
          position="absolute"
          top="100%"
          right="1rem"
          cursor="pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Button
            bg="#F74F22"
            color="white"
            fontSize={{ base: "sm", sm: "md" }}
            padding={{ base: "0.5px 2px", sm: "1px 2px" }}
            borderWidth={{ base: "1px", sm: "2px" }}
            borderColor="white"
            borderRadius="md"
          >
            <FiAlignJustify />
          </Button>
        </Box>
      </Flex>

      <Box
        position="fixed"
        top={0}
        left={isMenuOpen ? 0 : "-85%"}
        height="100vh"
        width="85%"
        bg="white"
        boxShadow="md"
        transition="left 0.3s ease-in-out"
        zIndex={999}
        padding="20px"
      >
        <Box
          bg="yellow.400"
          color="white"
          borderRadius="full"
          p={{ base: "2", sm: "3" }}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => setIsMenuOpen(false)}
          fontSize={{ base: "xs", sm: "xs" }}
        >
          <ImCross />
        </Box>

        <VStack
          spacing={4}
          align="flex-start"
          fontSize={{ base: "xs", sm: "md" }}
          color="black"
          mt={4}
          ml={4}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              <Text
                color={item.name === "Home" ? "#F74F22" : "black"}
                _hover={{ color: "#F74F22", cursor: "pointer" }}
                fontSize={{ base: "xs", md: "lg" }}
              >
                {item.name}
              </Text>
            </Link>
          ))}
        </VStack>
      </Box>
    </div>
  );
}

export default Header;
