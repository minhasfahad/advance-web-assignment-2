import "../styles/Home.css";
import { Link } from "react-router";

import Header from "../components/Header";
import Cards from "../components/Cards";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
