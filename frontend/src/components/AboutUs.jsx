import React from "react";
//import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import Banner from "./Banner";
import { TiTickOutline } from "react-icons/ti";
import { Avatar } from "@/components/ui/avatar";


import { Box, Flex, Image,  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,Button, Text } from "@chakra-ui/react";

function AboutUs() {

  const items = [
    { value: "a", title: "How are recipients matched to donors?", text: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services." },
    { value: "b", title: "Why Donation For Charity Foundation?", text: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services." },
    { value: "c", title: "What are the steps involved in organ and tissue donation?", text: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services." },
    { value: "d", title: "Build Newsletter Without Losing Your Mind?", text: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services." },
    { value: "e", title: "Ultimate Digital Clean You Prepared Year?", text: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services." }
  ];
  
  
  return (
    <>
      <Banner title="About Us" path="Home / AboutUs" />

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={{ base: 4, md: 6 }}
        gap={{ base: 6, md: 4 }}
      >
        {/* Images Side by Side for All Screens */}
        <Flex flex="1" gap={4} justify="center" align="center" wrap="nowrap">
          <Image
            src="images/img_2.png"
            alt="Image 1"
            width={{ base: "120px", sm: "200px", md: "150px", lg: "220px" }}
            height="auto"
          />
          <Image
            src="images/img_3.png"
            alt="Image 2"
            width={{ base: "160px", sm: "250px", md: "200px", lg: "250px" }}
            height="auto"
          />
        </Flex>

        {/* Text Content Below for Small Screens */}
        <Box
          flex="1"
          textAlign="left"
          px={{ base: 3, md: 5 }}
          py={{ base: 4, md: 0 }}
          //  mx={{ md: 12 }}
        >
          <Text textDecoration="underline" color="yellow.400">
            About Risehands
          </Text>

          <Text
            fontSize={{ base: "24px", md: "26px" }}
            fontWeight="bold"
            mb={2}
            color="black"
          >
            Helping is Great Virtue for <br /> Every Human
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb={4}>
            It has been determined through research that when we feel to help,
            and that someone authentically needs our assistance, and that no
            trick is being played on us, we reliably do intervene.
            Interestingly, it has been found that we are less likely to help.
          </Text>

          {/* Charity List with Tick Icons */}
          <Flex direction="column" align="start">
            <Text
              display="flex"
              alignItems="center"
              mb={2}
              _hover={{ color: "orange.600" }}
              color="black"
            >
              <TiTickOutline
                style={{ color: "red", fontSize: "20px", marginRight: "8px" }}
              />
              Charity For Medical & Health
            </Text>
            <Text
              display="flex"
              alignItems="center"
              mb={2}
              _hover={{ color: "orange.600" }}
              color="black"
            >
              <TiTickOutline
                style={{ color: "red", fontSize: "20px", marginRight: "8px" }}
              />
              Charity For Education to Poor People
            </Text>
            <Text
              display="flex"
              alignItems="center"
              mb={4}
              _hover={{ color: "orange.600" }}
              color="black"
            >
              <TiTickOutline
                style={{ color: "red", fontSize: "20px", marginRight: "8px" }}
              />
              Charity For Clean Water
            </Text>
          </Flex>

          <Button bg="orange.600" color="white" _hover={{ bg: "orange.700" }}>
            Learn More About Us
          </Button>
        </Box>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={{ base: 4, md: 6 }}
        // gap={{ base: 6, md: 8 }}
      >
        {/* Left Side Image */}
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src="images/img_1.png"
            alt="Info Image"
            width={{ base: "300px", sm: "650px", md: "400px" }}
            height="auto"
          />
        </Box>

        {/* Right Side Accordion */}
        <Box flex="1" textAlign="left">
          <Text textDecoration="underline" color="yellow.400">
            Ask Questions
          </Text>
          <Text
            fontSize={{ base: "24px", md: "28px" }}
            fontWeight="bold"
            mb={4}
            color="black"
          >
            Have Any Questions <br />
            on Your Minds !
          </Text>
          <AccordionRoot collapsible defaultValue={["b"]}>
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value} borderBottom={"none"}>
                <AccordionItemTrigger
                  px={4}
                  py={3}
                  border="1px solid #ddd"
                  mb={2}
                >
                  <Text fontSize="lg" fontWeight="semibold" color="black">
                    {item.title}
                  </Text>
                </AccordionItemTrigger>
                <AccordionItemContent
                  px={4}
                  py={3}
                  borderLeft="2px solid #ddd"
                  borderBottomRadius="md"
                >
                  <Text fontSize="md" color="gray.600">
                    {item.text}
                  </Text>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Box>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={{ base: 4, md: 8 }}
        gap={6}
      >
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Text textDecoration="underline" color="yellow.400">
            Meet Our Volunteers
          </Text>
          <Text
            fontSize={{ base: "24px", md: "28px" }}
            fontWeight="bold"
            color="black"
          >
            We Have a Volunteer Team
            <br />
            Meet Our Professionals
          </Text>
        </Box>

        {/* Avatars and Texts Below */}
        <Flex
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }} // Adjust for different breakpoints
          gap={8}
          justify="center"
          align="center"
          w="full"
          px={{ base: 4, md: 8 }}
        >
          {/* Team Member 1 */}
          <Box textAlign="center" position="relative" p={6}>
            <Box
              position="absolute"
              top="-5px"
              left="50%"
              transform="translateX(-50%)"
              w="100px"
              h="100px"
              bgImage="url('/shape-1.png')"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgPosition="center"
              zIndex={1}
            />

            <Avatar
              name="Warren A. Mundt"
              src="images/avatar_1.jpg"
              size="2xl"
              mb={4}
              position="relative"
              zIndex={2} // Ensure Avatar is on top
            />

            <Text fontSize="lg" fontWeight="semibold" mb={1} color="black">
              Warren A. Mundt
            </Text>

            <Text fontSize="md" color="orange.400" mb={2}>
              Manager Head
            </Text>

            <Text fontSize="11px" color="gray.600" mb={2}>
              Offer resources for continuous learning and skill development,
              including online courses and workshops.
            </Text>
          </Box>

          <Box textAlign="center" position="relative" p={6}>
            <Box
              position="absolute"
              top="-5px"
              left="50%"
              transform="translateX(-50%)"
              w="100px"
              h="100px"
              bgImage="url('/shape-1.png')"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgPosition="center"
              zIndex={1}
            />

            <Avatar
              name="Michael G. Wood"
              src="images/avatar_2.jpg"
              size="2xl"
              mb={4}
              position="relative"
              zIndex={2}
            />

            <Text fontSize="lg" fontWeight="semibold" mb={1} color="black">
              Michael G. Wood
            </Text>

            <Text fontSize="md" color="orange.400" mb={2}>
              General Manager
            </Text>

            <Text fontSize="11px" color="gray.600" mb={2}>
              Provide tips, articles, or expert advice on maintaining a healthy
              work-life balance, managing stress.
            </Text>
          </Box>
          <Box textAlign="center" position="relative" p={6}>
            <Box
              position="absolute"
              top="-5px"
              left="50%"
              transform="translateX(-50%)"
              w="100px"
              h="100px"
              bgImage="url('/shape-1.png')"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgPosition="center"
              zIndex={1}
            />

            <Avatar
              name="Donald K. Gustaz"
              src="images/avatar_3.jpg"
              size="2xl"
              mb={4}
              position="relative"
              zIndex={2}
            />

            <Text fontSize="lg" fontWeight="semibold" mb={1} color="black">
              Donald K. Gustaz
            </Text>

            <Text fontSize="md" color="orange.400" mb={2}>
              Volunteer
            </Text>

            <Text fontSize="11px" color="gray.600" mb={2}>
              Workshops or seminars on organizational development strategies,
              succession planning.
            </Text>
          </Box>

          {/* Team Member 4 */}
          <Box
            key="4"
            textAlign="center"
            position="relative"
            p={6} // Padding for spacing
          >
            <Box
              position="absolute"
              top="-5px"
              left="50%"
              transform="translateX(-50%)"
              w="100px"
              h="100px"
              bgImage="url('/shape-1.png')"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgPosition="center"
              zIndex={1}
            />

            {/* Avatar */}
            <Avatar
              name="Roger L. Crawford"
              src="/images/avatar_4.jpg"
              size="2xl"
              mb={4}
              position="relative"
              zIndex={2}
            />

            <Text fontSize="lg" fontWeight="semibold" mb={1} color="black">
              Roger L. Crawford
            </Text>

            <Text fontSize="md" color="orange.400" mb={2}>
              Senior Manager
            </Text>

            <Text fontSize="11px" color="gray.600" mb={2}>
              Share ideas for team-building exercises, icebreakers, and retreats
              to help managers foster strong relationships.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default AboutUs;
