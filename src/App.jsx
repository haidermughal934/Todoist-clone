import {Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MiddelSection from "./components/MiddelSection";
import Navbar from "./components/Navbar";
import WorkTemplate from "./components/WorkTemplate";
import PerTemplate from "./components/PerTemplate";
import EduTemplate from "./components/EduTemplate";
import MngeTemplate from "./components/MngeTemplate";
import MsTemplate from "./components/MSTemplate";
import CsTemplate from "./components/CSTemplate";
import Button from "./components/Button";
import Imgtext from "./components/Imgtext";


function App() {
  return (
    <>
      <>
        <Navbar />
        <HeroSection />
        <Imgtext />
        <Button />
        <Routes>
          <Route path="/" element={<WorkTemplate />} />
          <Route path="/WorkTemplate" element={<WorkTemplate />} />
          <Route path="/PerTemplate" element={<PerTemplate />} />
          <Route path="/EduTemplate" element={<EduTemplate />} />
          <Route path="/MngeTemplate" element={<MngeTemplate />} />
          <Route path="/MsTemplate" element={<MsTemplate />} />
          <Route path="/CsTemplate" element={<CsTemplate />} />
        </Routes>
        <MiddelSection />
        <Footer />
      </>
    </>
  );
}

export default App;
