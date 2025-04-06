// components/Layout.js
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main >
        <Outlet /> {/* This will render the current page */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
