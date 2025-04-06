import React from "react";
import { Box, Image ,Flex,Text} from "@chakra-ui/react";
export default function Banner({ title, path }) {
  return (
    <>
      <Flex
        justify="center" // Horizontally center the content
        align="center" // Vertically center the content
        background={{
          base: "white", // White background for small screens
          lg: "linear-gradient(to bottom, black 85%, white 15%)", // Gradient for medium and larger screens
        }}
        position="relative"
      >
        <Image //Children image
          w={{ base: "100%", sm: "100%", md: "100%", lg: "1201px" }} // Full width on small screens, gradually increasing
          h={{ base: "auto", sm: "200px", md: "300px", lg: "343px" }} // Auto height or specific heights for different screens
          src="/page-header-1c-1.jpeg"
          alt="Page Header"
        />

        <Image //orange splash image
          w={{ base: "120px", sm: "200px", md: "250px", lg: "300px" }} // Smaller sizes on small screens, increasing for larger screens
          h={{ base: "120px", sm: "200px", md: "250px", lg: "320px" }} // Proportional height adjustments for different screens
          src="/shape-1.png"
          alt="Overlay Image"
          position="absolute"
          top="50%" // Vertically center
          left="50%" // Horizontally center
          transform="translate(-50%, -50%)" // Truly center the image
        />

        <Text //My account
          position="absolute"
          top={{ base: "29%", sm: "30%", md: "34%" }} // Adjust top positioning for smaller screens
          left="50%"
          transform="translateX(-50%)"
          color="white"
          fontSize={{ base: "20px", sm: "36px", md: "48px", lg: "53px" }} // Smaller font sizes for smaller screens
          fontWeight="bold"
          fontFamily="'Quicksand', sans-serif"
          textAlign="center" // Ensure centered text alignment
        >
          {title}
        </Text>
        <Text
          position="absolute"
          top={{ base: "50%", sm: "53%", md: "55%" }} // Adjust top positioning for smaller screens
          left="50%"
          transform="translateX(-50%)"
          color="white"
          fontSize={{ base: "10px", sm: "14px", md: "16px" }} // Smaller font sizes for smaller screens
          fontWeight="bold"
          fontFamily="'Quicksand', sans-serif"
          textAlign="center" // Ensure centered text alignment
        >
          {path}
        </Text>
      </Flex>
    </>
  );
};
