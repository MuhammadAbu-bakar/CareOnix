import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Heading,
  VStack,
  Container,
  Text,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@chakra-ui/react";


const PredictionForm = () => {
   const cities = createListCollection({
  items: [
    { label: "Lahore", value: "Lahore" },
    { label: "Rahim Yar Khan", value: "Rahim Yar Khan" },
    { label: "Multan", value: "Multan" },
    { label: "GRW", value: "GRW" },
    { label: "BWP", value: "BWP" },
    { label: "Chichawatni", value: "Chichawatni" },
    { label: "Haroonabad", value: "Haroonabad" },
    { label: "Islamabad", value: "Islamabad" },
    { label: "Kamoke", value: "Kamoke" },
    { label: "Bahawalnagar", value: "Bahawalnagar" },
    { label: "Sheikhupura", value: "Sheikhupura" },
    { label: "Faisalabad", value: "Faisalabad" },
    { label: "Muridke", value: "Muridke" },
    { label: "Okara", value: "Okara" },
    { label: "Kharian", value: "Kharian" },
    { label: "Mandi Baha Ud Din", value: "Mandi Baha Ud Din" },
    { label: "Kasur", value: "Kasur" },
    { label: "Sialkot", value: "Sialkot" },
    { label: "Jhang", value: "Jhang" },
    { label: "Arif wala", value: "Arif wala" },
    { label: "Bhakr", value: "Bhakr" },
    { label: "Mianwali", value: "Mianwali" },
    { label: "Vehari", value: "Vehari" },
    { label: "Mamukanjan", value: "Mamukanjan" },
    { label: "Khanewal", value: "Khanewal" },
    { label: "Quetta", value: "Quetta" },
    { label: "Sahiwal", value: "Sahiwal" },
    { label: "Chakwal", value: "Chakwal" },
    { label: "More Khunda", value: "More Khunda" },
    { label: "Layyah", value: "Layyah" },
    { label: "Narowal", value: "Narowal" },
    { label: "Abbotabad", value: "Abbotabad" },
    { label: "Sanghar", value: "Sanghar" },
    { label: "Sargodha", value: "Sargodha" },
    { label: "Jalalpur Jattan", value: "Jalalpur Jattan" },
    { label: "Attock", value: "Attock" },
    { label: "Hafızabad", value: "Hafızabad" },
    { label: "Shakargarh", value: "Shakargarh" },
    { label: "Gujrat", value: "Gujrat" },
    { label: "Lodhran", value: "Lodhran" },
    { label: "Karachi", value: "Karachi" },
    { label: "Muzaffarabad", value: "Muzaffarabad" },
    { label: "Haripur", value: "Haripur" },
    { label: "Pindi Bhattian", value: "Pindi Bhattian" },
    { label: "Kamalia", value: "Kamalia" },
    { label: "Nankana Sahib", value: "Nankana Sahib" },
    { label: "Burewala", value: "Burewala" },
    { label: "Daska", value: "Daska" },
    { label: "Pattoki", value: "Pattoki" },
    { label: "Qila Didar Singh", value: "Qila Didar Singh" },
    { label: "Minchinabad", value: "Minchinabad" },
    { label: "Sambrial", value: "Sambrial" },
    { label: "Dunga bunga", value: "Dunga bunga" },
    { label: "Rawalakot", value: "Rawalakot" },
    { label: "Hasilpur", value: "Hasilpur" },
    { label: "Kot Radha Kishan", value: "Kot Radha Kishan" },
    { label: "Pasrur", value: "Pasrur" },
    { label: "Taxila", value: "Taxila" },
    { label: "Mailsi", value: "Mailsi" },
    { label: "Bhalwal", value: "Bhalwal" },
    { label: "Ahmed Pur East", value: "Ahmed Pur East" },
    { label: "Jhelum", value: "Jhelum" },
    { label: "Jamshoro", value: "Jamshoro" },
    { label: "Wah Cantt", value: "Wah Cantt" },
    { label: "Rajanpur", value: "Rajanpur" },
  ],
});


  const months = createListCollection({
    items: [
      { label: "January", value: "1" },
      { label: "February", value: "2" },
      { label: "March", value: "3" },
      { label: "April", value: "4" },
      { label: "May", value: "5" },
      { label: "June", value: "6" },
      { label: "July", value: "7" },
      { label: "August", value: "8" },
      { label: "September", value: "9" },
      { label: "October", value: "10" },
      { label: "November", value: "11" },
      { label: "December", value: "12" },
    ],
  });
  const [formData, setFormData] = useState({ city: "", year: "", month: "" });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
  console.log("in handle change");
  console.log(e.name);
  console.log("Field Name:", e.target.name);  // Log the name of the field
  console.log("Field Value:", e.target.value);  // Log the selected value
  
  // Check if the field name is 'month' and convert the value to a number
  const updatedValue = e.target.name === 'month' ? Number(e.target.value) : e.target.value;
  
  // Update the formData with the new value
  setFormData({
    ...formData,
    [e.target.name]: updatedValue,  // Dynamically update the field
  });

  console.log("Updated Form Data:", formData);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as a JSON string
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPrediction(data.predictedDonation); // Assuming the response has predictedDonation property
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <>
      <Container maxW="md" mt={8} p={6} borderRadius="md" boxShadow="lg">
        <Heading size="lg" textAlign="center" mb={4} color={"#f74f22"}>
          Donation Prediction
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <SelectRoot
              collection={cities}
              onValueChange={(item) =>
                handleChange({ target: { name: "city", value: item.value[0] } })
              }
            >
              <SelectLabel color={"black"}>Select City</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="Select City" color={"black"} />
              </SelectTrigger>
              <SelectContent>
                {cities.items.map((city) => (
                  <SelectItem item={city} key={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            <Text
              fontSize="sm"
              color={"black"}
              textAlign="left" // Aligns the text to the left
            >
              Select Year
            </Text>

            <Input
              type="number"
              name="year"
              placeholder="Enter year"
              value={formData.year}
              onChange={handleChange}
              color={"black"}
            />
            <SelectRoot
              collection={months}
              onValueChange={(item) =>
                handleChange({
                  target: { name: "month", value: item.value[0] },
                })
              }
            >
              <SelectLabel color={"black"}>Select Month</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="Select Month" color={"black"} />
              </SelectTrigger>
              <SelectContent>
                {months.items.map((month) => (
                  <SelectItem item={month} key={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>

            <Button
              colorScheme="blue"
              type="submit"
              width="full"
              bg="#f74f22"
              color={"white"}
            >
              Predict
            </Button>
            {prediction && (              
                <Box mt={4} p={3} bg="green" borderRadius="md">
                  <Text fontSize="lg" fontWeight="bold" color={"white"}>
                    Predicted Donation: {prediction}
                  </Text>
                </Box>
            )}
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default PredictionForm;
