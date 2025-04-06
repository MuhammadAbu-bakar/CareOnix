import React from 'react';
import { Button, Box, Flex, Text, Input } from '@chakra-ui/react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <Flex
      as="footer"
      bg="black"
      color="white"
      direction="column"
      align="center"
      px={{ base: 4, md: 6 }}
      py={{ base: 4, md: 6 }}
      gap={6}
    >
      
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify="space-between"
        width="100%"
        gap={6}
        pl={{ base: 3, sm:3, md: 4, lg: 4}}
      >
        <Box textAlign={{ base: 'left', md: 'left' }} width="100%">
          <Text fontSize={20}>
            <Text as="span" fontWeight="bold">Rise</Text> hand
          </Text>
          <Text color="yellow.600" mb={4}>Charity Foundation</Text>
          <Flex align="center" mb={1} justify="flex-start" gap={2}>
            <CiLocationOn />
            <Text>575 Main Street, D-block</Text>
          </Flex>
          <Flex align="center" mb={4} justify="flex-start" gap={2}>
            <MdOutlineMailOutline />
            <Text>sendma@qetus.com</Text>
          </Flex>
          <Flex align="center" justify="flex-start" gap={2}>
            <RiPhoneLine />
            <Text>+98 060 712 34</Text>
          </Flex>
        </Box>
      </Flex>

     
      <Box
        bg="black"
        border="1px solid gray"
        px={6}
        py={6}
        width={{ base: "98%", md: "98%" ,lg:"98%" }}
        textAlign="center"
        borderRadius="none"
      
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={{ base: 4, lg: 0 }}
        >
          <Box
            textAlign="left"
            flex="1"
            pr={4}
            mb={{ base: 4, md: 0 }}
            borderBottom={{ base: '1px solid gray', sm: '1px solid gray', md: 'none' }} 
            borderRight={{ base: 'none', md: '1px solid gray' }} 
            pb={{ base: 4, md: 0 }} 
            mr={{ base: 0, md: 4 }} 
            width={{ base: '70%', sm: '90%', md: '98%' }}
          >
            <Text fontSize={{xs:27,sm:25,md:30,lg:33,xl:33}}
            fontWeight="bold"
              mx={{xs:1,sm:1,md:8,lg:14 ,xl:14}} 
              mb={2}>
              Get Every Single Update Join Our Newsletters
            </Text>
            
          </Box>

    <Flex
      align="center"
      flex="1"
      direction={{ base: 'column', md: 'row' }}
      width="100%"
    >
      <Input
        bg="white"
        color="black"
        placeholder="Enter email address"
        width={{ base: '100%', md: '70%' }} 
        mb={{ base: 2, md: 0 }}
        borderRadius="none"
         height="60px"
         ml={{md:10}}
      />
      <Button
        bg="red"
        color="white"
        _hover={{ bg: "darkred" }}
        width={{ base: '100%', md: '20%', lg: 'auto' }} 
        borderRadius="none"
        px={2}
         height="60px"
         fontWeight={'bold'}
      >
        Sign Up
      </Button>
    </Flex>
  </Flex>
</Box>




    <Flex
      width="100%"
      justify="space-between"
      align="center"
      fontSize={{ base: 'sm', sm: 'lg', md: 'lg', lg: 'lg' }}
      direction={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}
      gap={4}
      px={{ base: 2, sm: 3, md: 3 ,lg:4,xl:4 }}
    >
      <Text textAlign="center" mb={{ base: 2, md: 0 }}>
        Copyright &copy; {new Date().getFullYear()} Steelthemes. All Rights Reserved
      </Text>
      <Flex gap={4} justify="center" align="center">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="yellow.400"
            borderRadius="50%"
            width="40px"
            height="40px"
            _hover={{ bg: "yellow.600" }}
          >
            <FiFacebook color="white" size="20px" />
          </Box>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="yellow.400"
            borderRadius="50%"
            width="40px"
            height="40px"
            _hover={{ bg: "yellow.600" }}
          >
            <FaXTwitter color="white" size="20px" />
          </Box>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="yellow.400"
            borderRadius="50%"
            width="40px"
            height="40px"
            _hover={{ bg: "yellow.600" }}
          >
            <FaInstagram color="white" size="20px" />
          </Box>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="yellow.400"
            borderRadius="50%"
            width="40px"
            height="40px"
            _hover={{ bg: "yellow.600" }}
          >
            <FiLinkedin color="white" size="20px" />
          </Box>
        </a>
      </Flex>
    </Flex>

    </Flex>
  );
}

export default Footer;

