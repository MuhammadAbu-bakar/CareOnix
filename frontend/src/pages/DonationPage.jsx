import React from 'react'
import Donation from "../components/Donation"
import Banner from "@/components/Banner";
function DonationPage() {
    return (
      <>
        <Banner title="Donate Now" path="Home / Donate Now"></Banner>
        <Donation></Donation>
      </>
    );
}

export default DonationPage
