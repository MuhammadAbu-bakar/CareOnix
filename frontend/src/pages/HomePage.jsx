import { Swiper, SwiperSlide } from "swiper/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
  faHandsHolding,
} from "@fortawesome/free-solid-svg-icons";

import { FaPlay, FaHandsHelping, FaBullseye, FaUsers } from "react-icons/fa";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  GridItem,
  VStack,
  Spacer,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { FaCheckCircle, FaDonate, FaBuilding } from "react-icons/fa";

import { FaHandHoldingHeart } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import { FaHandHoldingUsd, FaAppleAlt, FaRegBuilding } from "react-icons/fa";

import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";

import {
  faStar,
  faQuoteLeft,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Raise Your\nHelping Hand",
    subtitle: "Non profit Charity Foundation",
    description:
      "Healthcare organizations can provide medical treatments & essential supplies to those who cannot afford improving overall.",
    image: "/assets/images/slider-1-2-1.png",
  },
  {
    id: 2,
    title: "Let's Come Together\nShare a Meal",
    subtitle: "Non profit Charity Foundation",
    description:
      "Food banks, shelters, healthcare services, education programs, or disaster relief efforts, every donation counts and can help improve someone's quality of life.",
    image: "/assets/images/slider-1-1-1.png",
  },
  {
    id: 3,
    title: "Making Difference\nStarts Here",
    subtitle: "Non profit Charity Foundation",
    description:
      "Your generosity can provide meals for a hungry family, shelter for someone without a home, medical care for those in need, educational opportunities.",
    image: "/assets/images/Slider33.png",
  },
];

const donationCauses = [
  {
    image: "/assets/images/cause1.png",
    progress: 48,
    donated: "$600.00",
    goal: "$1,230.00",
    title: "Collect donations during their regular worship",
    goalAmount: "$1,230.00",
    raisedAmount: "$600.00",
    toGoAmount: "$630.00",
  },
  {
    image: "/assets/images/cause2.png",
    progress: 30,
    donated: "$556.00",
    goal: "$1,800.00",
    title: "Churches often have websites or online platforms",
    goalAmount: "$1,800.00",
    raisedAmount: "$556.00",
    toGoAmount: "$1,344.00",
  },
  {
    image: "/assets/images/cause3.png",
    progress: 46,
    donated: "$700.00",
    goal: "$1,500.00",
    title: "Churches may organize events or campaigns",
    goalAmount: "$1,500.00",
    raisedAmount: "$700.00",
    toGoAmount: "$800.00",
  },
  {
    image: "/assets/images/cause4.png",
    progress: 65,
    donated: "$975.00",
    goal: "$1,500.00",
    title: "Support local community food drives",
    goalAmount: "$1,500.00",
    raisedAmount: "$975.00",
    toGoAmount: "$525.00",
  },
  {
    image: "/assets/images/cause5.png",
    progress: 25,
    donated: "$375.00",
    goal: "$1,500.00",
    title: "Youth education and mentorship programs",
    goalAmount: "$1,500.00",
    raisedAmount: "$375.00",
    toGoAmount: "$1,125.00",
  },
  {
    image: "/assets/images/education.png",
    progress: 80,
    donated: "$1,200.00",
    goal: "$1,500.00",
    title: "Emergency relief for natural disasters",
    goalAmount: "$1,500.00",
    raisedAmount: "$1,200.00",
    toGoAmount: "$300.00",
  },
];

const events = [
  {
    title: "Unity in Giving Community Charity Event",
    date: "April 3, 2024",
    time: "9:30 AM",
    venue: "Vineyard Venues",
    image: "/assets/images/event2.png",
  },
  {
    title: "Spread the Love Charity Art Exhibition",
    date: "January 1, 2025",
    time: "3:00 AM",
    venue: "Madison Square Garden",
    image: "/assets/images/event3.png",
  },
  {
    title: "Shine for a Cause Charity Dinner & Auction",
    date: "February 4, 2025",
    time: "9:00 AM",
    venue: "Madison Square Garden",
    image: "/assets/images/event4.png",
  },
];

const HeroSlider = () => {
  const [activeSection, setActiveSection] = useState("education");

  // Section Data
  const sections = {
    education: {
      title: "Empowering futures through\n education",
      description:
        "We provide access to quality education for underprivileged children,\n unlocking their potential and brightening their future.",
      image: "/assets/images/education.png",
      points: [
        "Breaking the Cycle of Poverty",
        "Building Confident Leaders",
        "Strengthening Communities and Economies",
        "Creating Responsible Global Citizens",
      ],
    },
    healthcare: {
      title: "Providing Essential Healthcare Services",
      description:
        "We ensure access to quality healthcare for underserved communities, improving lives through medical aid and awareness programs.",
      image: "/assets/images/healthcare.png",
      points: [
        "Medical Aid & Facilities",
        "Health Awareness Programs",
        "Supporting Maternal & Child Health",
        "Combating Malnutrition & Diseases",
      ],
    },
    livelihood: {
      title: "Supporting Livelihood Programs",
      description:
        "We help families achieve financial independence through skill development, vocational training, and sustainable economic programs.",
      image: "/assets/images/livelihood.png",
      points: [
        "Vocational Training & Skills",
        "Entrepreneurship Support",
        "Women Empowerment Programs",
        "Microfinance & Small Business Aid",
      ],
    },
    water: {
      title: "Ensuring Access to Clean Water",
      description:
        "We work to provide safe and clean drinking water, reducing waterborne diseases and improving community health and hygiene.",
      image: "/assets/images/water.png",
      points: [
        "Clean Water Infrastructure",
        "Water Purification & Hygiene",
        "Preventing Waterborne Diseases",
        "Sustainable Water Management",
      ],
    },
  };

  const selectedSection = sections[activeSection];

  const reviews = [
    {
      id: 1,
      quote:
        "Thanks to Risehand, I was able to overcome the toughest phase of my life.",
      description:
        "Their support not only provided me with the basics but also restored my hope. I am now on a path towards a brighter future, all thanks to their kindness and generosity.",
      name: "Jacob Leonardo",
      designation: "Business Manager",
      image: "/assets/images/jacob.png",
    },
    {
      id: 2,
      quote: "Risehand has been a lifesaver for me and my family.",
      description:
        "Seeing firsthand the impact we make in people's lives is incredibly rewarding. Every moment spent helping others has my belief in the power of compassion and community scientific insights, and personal reflections,",
      name: "Somalia D. Silva",
      designation: "Business Manager",
      image: "/assets/images/somalia.png",
    },
    {
      id: 3,
      quote: "I can't thank Risehand enough for their support.",
      description:
        " Knowing that my contributions are directly changing lives gives me a sense of purpose. I trust this organization wholeheartedly and will continue to support their noble cause  revealing its pivotal role in shaping moral frameworks.",
      name: "Ivor Herbert",
      designation: "Business Manager",
      image: "/assets/images/ivor.png",
    },
  ];

  const swiperRef = useRef(null);
  return (
    <>
      <Box position="relative" w="100vw" maxW="100%">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="hero-slider"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Box
                position="relative"
                width="100%"
                maxW="100vw"
                height="100vh"
                backgroundImage={`url(${slide.image})`}
                backgroundSize="cover"
                backgroundPosition="center"
                boxShadow={"none"}
                color="white"
                backgroundColor="rgba(0, 0, 0, 0.7)"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                px={{ base: "5%", md: "10%" }}
                pr={{ base: "5%", md: "10%" }}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgGradient:
                    "linear(to-r, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))",
                }}
              >
                <Stack
                  position="relative"
                  textAlign="left"
                  maxW={{ base: "100%", md: "600px" }}
                  w="100%"
                  zIndex={2}
                  spacing={5}
                  bg="rgba(0, 0, 0, 0.3)" // Optional: slight background to enhance shadow contrast
                  p={6} // Padding to give content some breathing room
                  borderRadius="md" // Rounded corners for a polished look
                  boxShadow="none" // Dark shadow effect
                >
                  {/* Subtitle with Icon */}
                  <Flex justifyContent="flex-start" alignItems="center" gap={2}>
                    <FontAwesomeIcon
                      icon={faHandsHolding}
                      size="lg"
                      color="red"
                    />
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      fontStyle="italic"
                      fontFamily="Kalam,cursive"
                    >
                      {slide.subtitle}
                    </Text>
                  </Flex>

                  {/* Main Title */}
                  <Heading
                    fontSize={"80px"}
                    fontWeight="bold"
                    fontFamily={"Quicksand,sans-serif"}
                    p={"5px"}
                    lineHeight="1.2"
                    whiteSpace="pre-line"
                  >
                    {slide.title}
                  </Heading>

                  {/* Description */}
                  <Text fontSize="lg" opacity={1} font={"Roboto"}>
                    {slide.description}
                  </Text>

                  {/* Buttons */}
                  <Flex
                    gap={4}
                    mt={4}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Button
                      bgColor="#FFAC00"
                      _hover={{ bgColor: "#F74F22" }}
                      size="lg"
                      fontSize="md"
                      px={6}
                      rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                      mr={"20px"}
                    >
                      Popular Causes
                      <FontAwesomeIcon icon={faChevronRight} color="white" />
                    </Button>

                    <Flex alignItems="center" color="white">
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="lg"
                        style={{
                          color: "transparent",
                          stroke: "red",
                          strokeWidth: 60,
                        }}
                      />
                      <Button
                        variant="link"
                        color="white"
                        fontWeight="bold"
                        fontSize="md"
                        textDecoration={"underline"}
                      >
                        Become a Volunteer
                      </Button>
                    </Flex>
                  </Flex>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <Flex
          position="absolute"
          left="20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          flexDirection="column"
          alignItems="center"
          gap="10px"
          w="50px"
        >
          <Button
            w="50px"
            h="50px"
            borderRadius="50%"
            border="1px solid lightgrey"
            bg="rgba(0, 0, 0, 0.5)"
            _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
            onClick={() =>
              document.querySelector(".swiper-button-next").click()
            }
          >
            <FontAwesomeIcon icon={faChevronRight} color="white" size="lg" />
          </Button>

          <Button
            w="50px"
            h="50px"
            borderRadius="50%"
            border="1px solid lightgrey"
            bg="rgba(0, 0, 0, 0.5)"
            _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
            onClick={() =>
              document.querySelector(".swiper-button-prev").click()
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
          </Button>
        </Flex>
      </Box>

      {/* About Section */}
      <Box as="section" py={10} px={{ base: 5, md: 20 }}>
        {/* Top Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Content */}
          <Box
            flex="1"
            textAlign={{ base: "center", md: "left" }}
            pr={{ md: 10 }}
          >
            <Text
              fontSize="26px"
              fontWeight="bold"
              color="#FFAC00"
              mb={2}
              fontFamily={"Kalam,cursive"}
              textDecoration={"underline"}
              fontStyle={"italic"}
            >
              <Icon as={FaHandsHelping} mr={2} />
              About Risehands
            </Text>
            <Heading
              fontSize={"35px"}
              fontWeight="700"
              color="gray.800"
              mb={4}
              lineHeight={"56px"}
              mt={"30px"}
            >
              Helping is Great Virtue for
              <br /> Every Human’s
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="1.6">
              For example, a child builds self-worth by getting good grades to
              earn their parents' approval, then grows up and gets a fancy
              corporate job to earn the approval of their larger culture.
            </Text>
            <Box mt={4} w="full" borderBottom="2px" borderColor="gray.300" />
          </Box>

          {/* Right Content (Image & Play Button) */}
          <Box position="relative" flex="1" textAlign="center">
            <Image
              src="/assets/images/about-us.png"
              alt="Helping Hands"
              borderRadius="full"
              boxSize={{ base: "250px", md: "350px" }}
              mx="auto"
            />
            <Button
              position="absolute"
              bottom="10%"
              right="10%"
              bg="#F74F22"
              color="white"
              px={5}
              py={1}
              borderRadius="lg"
              _hover={{ bg: "orange.600" }}
              leftIcon={<FaPlay />}
              fontSize={"29px"}
              w="200px"
              minHeight={"230px"}
              textAlign="left" // Align text to the left
              lineHeight="1.2" // Increase line spacing
              whiteSpace="normal" // Allow text wrapping
              fontFamily={"Quicksand,sans-serif"}
              fontWeight={600}
            >
              Helping is
              <br /> the great
              <br /> virtue for
              <br /> human
            </Button>
          </Box>
        </Flex>

        {/* Bottom Section - Three Cards */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          mt={40}
          textAlign="center"
        >
          {/* Mission Card */}
          <Box
            bg="rgb(251, 233, 228)"
            p={6}
            borderRadius="20px"
            boxShadow="md"
            position="relative"
            h="270px"
          >
            <Box
              position="absolute"
              top="-70px"
              left="50%"
              transform="translateX(-50%)"
              bg="#FFAC00"
              w="125px"
              h="125px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="lg"
            >
              <Icon as={FaBullseye} boxSize={8} color="white" />
            </Box>
            <Heading
              fontSize="24px"
              mt={8}
              mb={2}
              lineHeight={"32px"}
              fontWeight={"700"}
              fontFamily={"Quicksand,sans-serif"}
              pt="35px"
              color={"Black"}
            >
              Our Mission
            </Heading>
            <Text fontSize="md" color="gray.600">
              It is a summary of the aims and core
              <br /> values. A mission tells what you as an
              <br /> organization do for customers.
            </Text>
          </Box>

          {/* Vision Card */}
          <Box
            bg="rgb(251, 233, 228)"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            position="relative"
          >
            <Box
              position="absolute"
              top="-70px"
              left="50%"
              transform="translateX(-50%)"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="lg"
              bg="#FFAC00"
              w="125px"
              h="125px"
            >
              <Icon as={FaUsers} boxSize={8} color="white" />
            </Box>
            <Heading
              fontSize="24px"
              mt={8}
              mb={2}
              lineHeight={"32px"}
              fontWeight={"700"}
              fontFamily={"Quicksand,sans-serif"}
              pt="35px"
              color={"Black"}
            >
              Our Vision
            </Heading>
            <Text fontSize="md" color="gray.600">
              Your mission defines what your
              <br /> organization does and what you stand for,
              <br /> while your vision speaks.
            </Text>
          </Box>

          {/* Volunteering Card */}
          <Box
            bg="rgb(251, 233, 228)"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            position="relative"
          >
            <Box
              position="absolute"
              top="-70px"
              left="50%"
              transform="translateX(-50%)"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="lg"
              bg="#FFAC00"
              w="125px"
              h="125px"
            >
              <Icon as={FaHandsHelping} boxSize={8} color="white" />
            </Box>
            <Heading
              fontSize="24px"
              mt={8}
              mb={2}
              lineHeight={"32px"}
              fontWeight={"700"}
              fontFamily={"Quicksand,sans-serif"}
              pt="35px"
              color={"Black"}
            >
              Volunteering
            </Heading>
            <Text fontSize="md" color="gray.600">
              Act of an individual or group freely giving
              <br /> time and labor, often for community
              <br /> service.
            </Text>
          </Box>
        </Grid>
      </Box>

      {/* Education Section */}
      <Box as="section" py={16} px={{ base: 5, md: 20 }}>
        {/* Buttons for Sections */}
        <Flex justify="center" gap={3} flexWrap="wrap">
          {Object.keys(sections).map((key) => (
            <Button
              key={key}
              bg={activeSection === key ? "#F74F22" : "gray.200"}
              color={activeSection === key ? "white" : "black"}
              _hover={{ bg: "#F74F22", color: "white" }}
              onClick={() => setActiveSection(key)}
            >
              {sections[key].title.split(" ")[0]} Support
              <FontAwesomeIcon icon={faChevronRight} color="white" />
            </Button>
          ))}
        </Flex>

        {/* Main Content - Centered under buttons */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          mt={5}
          gap={10}
          wrap="wrap"
        >
          {/* Left Image */}
          <Image
            src={selectedSection.image}
            alt={selectedSection.title}
            borderRadius="lg"
            boxSize={{ base: "250px", md: "350px" }}
          />

          {/* Right Content */}
          <Box flex="1" maxW="600px" whiteSpace={"pre-line"}>
            <Heading fontSize="28px" fontWeight="bold" mb={3} color={"Black"}>
              {selectedSection.title}
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={5} whiteSpace="pre-line">
              {selectedSection.description}
            </Text>

            {/* Key Benefits */}
            <Stack spacing={3}>
              {selectedSection.points.map((point, index) => (
                <Flex align="center" gap={3} key={index}>
                  <Icon as={FaCheckCircle} color="#F74F22" />
                  <Text fontWeight="bold" color={"Black"}>
                    {point}
                  </Text>
                </Flex>
              ))}
            </Stack>

            {/* CTA Button */}
            <Button
              mt={6}
              bg="#F74F22"
              color="white"
              _hover={{ bg: "orange.600" }}
              size="lg"
            >
              Get Started →
            </Button>
          </Box>
        </Flex>

        {/* Statistics Section - Full Width */}
        <Box
          bg="#F74F22"
          py={10}
          mt={20}
          color="white"
          w="100vw"
          position="relative"
          left="50%"
          transform="translateX(-50%)"
        >
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            textAlign="left"
            gap={6}
            px={{ base: 5, md: 20 }}
          >
            {[
              { icon: FaUsers, number: "35+", text: "Years of Foundation" },
              { icon: FaUsers, number: "3k+", text: "Global Partners" },
              { icon: FaDonate, number: "69+", text: "Monthly Donations" },
              { icon: FaBuilding, number: "93+", text: "Projects Completed" },
            ].map((item, index) => (
              <Flex key={index} align="center" gap={3}>
                <Icon as={item.icon} boxSize={8} />
                <Box>
                  <Heading fontSize="32px">{item.number}</Heading>
                  <Text>{item.text}</Text>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Donation Causes Section */}
      <Box py={16} px={{ base: 5, md: 20 }} bg="#FCEAE4">
        {/* Section Title */}
        <Flex direction="column" align="center" textAlign="start" mb={10}>
          <Flex align="start" color="#FFAC00" fontWeight="bold">
            <Icon as={FaHandHoldingHeart} boxSize={6} />
            <Text
              fontSize="26px"
              color="#FFAC00"
              fontFamily="Kalam,cursive"
              fontStyle="italic"
            >
              Popular Causes
            </Text>
          </Flex>
          <Heading
            fontSize="34px"
            mt={2}
            fontWeight="700"
            fontFamily="Quicksand,sans-serif"
            lineHeight="56px"
            color={"Black"}
          >
            Give Donations For Latest Causes
          </Heading>
        </Flex>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          style={{
            "--swiper-pagination-color": "#F74F22",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            paddingBottom: "40px",
          }}
        >
          {donationCauses.map((cause, index) => (
            <SwiperSlide key={index}>
              <Box bg="white" overflow="hidden" boxShadow="md" h={"600px"}>
                {/* Cause Image */}
                <Image
                  src={cause.image}
                  alt={cause.title}
                  objectFit="cover"
                  h="300px"
                  w="100%"
                />

                {/* Cause Content */}
                <Box p={4}>
                  {/* Custom Progress Bar */}
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign="center"
                    mb={2}
                    color={"Black"}
                  >
                    {cause.progress}%
                  </Text>
                  <Box
                    w="100%"
                    h="6px"
                    bg="gray.200"
                    borderRadius="full"
                    overflow="hidden"
                    mb={2}
                  >
                    <Box
                      w={`${cause.progress}%`}
                      h="100%"
                      bg="#F74F22"
                      transition="width 0.3s ease-in-out"
                    />
                  </Box>

                  <Text
                    fontSize="lg"
                    textAlign="center"
                    color="gray.600"
                    mt={1}
                  >
                    {cause.donated} Donated of {cause.goal} Goals
                  </Text>

                  {/* Cause Title */}
                  <Text fontWeight="bold" fontSize="lg" mt={3} color="Black">
                    {cause.title}
                  </Text>

                  {/* Donation Details */}
                  <Flex
                    justify="space-between"
                    mt={4}
                    fontSize="lg"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    <Box>
                      <Text color="gray.500">Goal</Text>
                      <Text>{cause.goalAmount}</Text>
                    </Box>
                    <Box>
                      <Text color="gray.500">Raised</Text>
                      <Text>{cause.raisedAmount}</Text>
                    </Box>
                    <Box>
                      <Text color="gray.500">To Go</Text>
                      <Text>{cause.toGoAmount}</Text>
                    </Box>
                  </Flex>

                  {/* Donate Button */}
                  <Button
                    mt={4}
                    w="100%"
                    bg="#F74F22"
                    color="white"
                    _hover={{ bg: "red.500" }}
                    fontSize={"lg"}
                  >
                    Donate Now →
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Why Donate Us Section */}
      <Box py={16} px={{ base: 5, md: 20 }} position="relative">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
          alignItems="center"
        >
          {/* Left Side - Image with Background */}
          <GridItem position="relative">
            {/* Background Image (Blurred & Shadow Applied in Image Itself) */}
            <Image
              src="/assets/images/why-donate-us2.png" // Change path accordingly
              alt="Background"
              position="absolute"
              top="-110px"
              left="-80px"
              w="110%"
              h="125%"
              zIndex={0}
            />

            {/* Foreground Image & Side Text */}
            <Flex position="relative" zIndex={1}>
              {/* Vertical Side Text Box */}
              <Box
                position="absolute"
                left="-60px"
                top="0"
                height="100%"
                width="40px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bg="transparent"
                color="yellow.300"
                fontSize="40px"
                fontWeight="bold"
                textAlign="center"
                borderRadius="md"
                borderColor={"white"}
                boxShadow="lg"
                p={2}
              >
                <Text writingMode="vertical-lr">Best Charity Foundation</Text>
              </Box>

              {/* Foreground Image */}
              <Image
                src="/assets/images/why-donate-us.png" // Change path accordingly
                alt="Volunteers"
                objectFit="cover"
                w="90%"
                h="600px"
              />
            </Flex>
          </GridItem>

          {/* Right Side Content */}
          <GridItem>
            {/* Section Title */}
            <Flex align="center" color="#FFAC00" fontWeight="normal">
              <Text
                fontSize="26px"
                textDecoration="underline"
                fontfamily="Kalam,cursive"
                fontStyle="italic"
              >
                Why donate us
              </Text>
            </Flex>
            <Heading
              fontSize="30px"
              mt={2}
              fontWeight="700"
              lineHeight="56px"
              fontFamily="Quicksand,sans-serif"
              color="Black"
            >
              We’re So Much Trusted Charity Fundations
            </Heading>

            {/* Features List */}
            <Box mt={6}>
              {/* Feature 1 */}
              <Flex align="center" mb={6}>
                <Icon as={FaHandHoldingUsd} boxSize={10} color="orange.400" />
                <Box ml={4}>
                  <Text fontWeight="bold" fontSize="24px" color="Black">
                    Give Right Place
                  </Text>
                  <Text color="gray.600" fontSize="18px">
                    The opportunities around you to shape you, sharpen your
                    gifts, and prepare you to do.
                  </Text>
                </Box>
              </Flex>

              {/* Feature 2 */}
              <Flex align="center" mb={6}>
                <Icon as={FaAppleAlt} boxSize={10} color="orange.400" />
                <Box ml={4}>
                  <Text fontWeight="bold" fontSize="24px" color="Black">
                    Save Money & Health
                  </Text>
                  <Text color="gray.600" fontSize="18px">
                    Giving up unhealthy habits such as smoking, drinking sugary
                    soft drinks, or drinking alcohol.
                  </Text>
                </Box>
              </Flex>

              {/* Feature 3 */}
              <Flex align="center">
                <Icon as={FaRegBuilding} boxSize={10} color="orange.400" />
                <Box ml={4}>
                  <Text fontWeight="bold" fontSize="24px" color="Black">
                    Organisation & Programs
                  </Text>
                  <Text color="gray.600" fontSize="18px">
                    We provide structured programs to ensure donations are used
                    efficiently.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Event Section */}
      <Box maxW="1200px" mx="auto" py={12} px={{ base: 4, md: 8 }}>
        {/* Section Title */}
        <Heading
          fontSize={{ base: "40px", md: "40px" }}
          fontWeight="bold"
          textAlign="center"
          mb={8}
          fontFamily={"Quicksand,sans-serif"}
          color="Black"
        >
          Latest Events & Programs
        </Heading>

        {/* Events Layout */}
        <Flex mt={8} gap={6} flexDirection={{ base: "column", md: "row" }}>
          {/* Featured Event */}
          <Box flex="2" position="relative">
            <Image
              src="/assets/images/event1.png"
              alt="Featured Event"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            {/* Badge for Featured Event */}
            <Badge
              position="absolute"
              top="0px"
              right="0px"
              bg="yellow.400"
              color="white"
              px={2}
              py={1}
              fontSize="15px"
              fontWeight="700"
              borderRadius="md"
            >
              Vineyard Venues
            </Badge>
            <Box
              position="absolute"
              bottom="0"
              left="0"
              w="100%"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
              p={4}
              borderBottomRadius="lg"
            >
              <Text
                fontSize="18px"
                color="#F74F22"
                fontWeight="normal"
                mt={2}
                fontFamily={"Kalam,cursive"}
                fontStyle={"italic"}
              >
                <FontAwesomeIcon icon={faCalendarAlt} /> May 6, 2025 &nbsp;
                <FontAwesomeIcon icon={faClock} /> 08:00 AM
              </Text>
              <Heading
                fontSize="26px"
                fontWeight="700"
                mt={2}
                fontFamily={"Quicksand,sans-serif"}
                lineHeight="34px"
              >
                Transforming Lives Charity Golf Tournament & Networking Event
              </Heading>
              <Text
                fontSize="18px"
                mt={1}
                lineHeight="28px"
                fontFamily="Nunito Sans,sans-serif"
                color="lightgrey"
              >
                Tee off with purpose and swing for a brighter future as we
                gather...
              </Text>
            </Box>
          </Box>

          {/* Side Events List */}
          <VStack flex="2" spacing={4} align="stretch">
            {events.map((event, index) => (
              <Flex
                key={index}
                bg="gray.100"
                overflow="hidden"
                boxShadow="none"
                position="relative"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  w="50%"
                  h="100%"
                  objectFit="cover"
                />
                {/* Badge for Side Event */}
                <Badge
                  position="absolute"
                  right="275px"
                  fontWeight="700"
                  bg="yellow.400"
                  color="white"
                  px={2}
                  py={1}
                  fontSize="15px"
                  borderRadius="md"
                >
                  {event.venue}
                </Badge>
                <Box p={3} flex="1">
                  <Flex
                    fontSize="18px"
                    color="#F74F22"
                    align="center"
                    mt={1}
                    fontFamily={"Kalam,cursive"}
                    fontStyle={"italic"}
                  >
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <Text ml={1}>{event.date}</Text>
                    <Spacer />
                    <FontAwesomeIcon icon={faClock} />
                    <Text ml={1}>{event.time}</Text>
                  </Flex>
                  <Text
                    fontSize="22px"
                    fontWeight="700"
                    mt={1}
                    fontFamily="Quicksand,sans-serif"
                    color="Black"
                  >
                    {event.title}
                  </Text>
                  <Text
                    fontSize="17px"
                    color="#616161"
                    cursor="pointer"
                    mt={1}
                    textDecoration="underline"
                  >
                    Event Details
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Flex>
      </Box>

      {/* Testimonial Section */}
      <Box maxW="1200px" mx="auto" py={12} px={{ base: 4, md: 8 }}>
        {/* Section Title */}
        <Flex align="center" mb={4} fontWeight="400">
          <Text
            fontSize="26px"
            textDecoration="underline"
            color="#FFAC00"
            fontFamily="Kalam,cursive"
            fontStyle="italic"
          >
            Testimonials
          </Text>
        </Flex>
        <Heading
          fontSize="46px"
          fontWeight="700"
          lineHeight="56px"
          mb={8}
          fontFamily="Quicksand,sans-serif"
          color="black"
        >
          What Our People Say
          <br /> About Risehands
        </Heading>

        {/* Main Flex Container */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={8}
          maxW="100%"
        >
          {/* Swiper for Reviews */}
          <Box flex="1" maxW={{ base: "100%", md: "50%" }}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              modules={[Pagination, Navigation, Autoplay]}
              loop={true}
              style={{ width: "100%" }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <Box>
                    <HStack spacing={1} mb={4} color="orange.400">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                        ))}
                    </HStack>
                    <Text
                      fontSize="24px"
                      fontWeight="700"
                      mb={4}
                      fontFamily="Quicksand, sans-serif"
                      lineHeight="32px"
                      color="black"
                    >
                      {review.quote}
                    </Text>
                    <Text
                      fontFamily="Nunito Sans,sans-serif"
                      color="gray.600"
                      mb={6}
                      fontSize="18px"
                      
                    >
                      {review.description}
                    </Text>

                    {/* Custom Circular Image Instead of Avatar */}
                    <HStack>
                      <Box
                        w="60px"
                        h="60px"
                        borderRadius="full"
                        overflow="hidden"
                        border="2px solid orange"
                      >
                        <Image
                          src={review.image}
                          alt={review.name}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                      </Box>
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" fontSize="lg">
                          {review.name}
                        </Text>
                        <Text
                          fontSize="16px"
                          color="#F74F22"
                          fontfamily="Nunito Sans,sans-serif"
                        >
                          {review.designation}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons Below Swiper */}
            <Flex justify="center" mt={6} gap={10}>
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                bg="white"
                border="1px solid #FFA500"
                borderRadius="full"
                p={3}
                boxShadow="md"
                _hover={{ bg: "orange.100" }}
                zIndex="10"
              >
                <FontAwesomeIcon icon={faChevronLeft} color="#FFA500" />
              </Button>
              <Button
                onClick={() => swiperRef.current?.slideNext()}
                bg="white"
                border="1px solid #FFA500"
                borderRadius="full"
                p={3}
                boxShadow="md"
                _hover={{ bg: "orange.100" }}
                zIndex="10"
              >
                <FontAwesomeIcon icon={faChevronRight} color="#FFA500" />
              </Button>
            </Flex>
          </Box>

          {/* Static Testimonial Image */}
          <Box flex="1" maxW={{ base: "100%", md: "50%" }} position="relative">
            <Image
              src="/assets/images/childrenTestimonial.png"
              alt="Happy Children"
              borderRadius="lg"
              w="100%"
              h="400px"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default HeroSlider;
