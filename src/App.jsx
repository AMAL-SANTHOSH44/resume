import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeGenerator from "./pages/ResumeGenerator";
import FormPage from "./pages/FormPage";
import PNF from "./pages/PNF";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="resumegenerator" element={<ResumeGenerator />} />
        <Route path="formpage" element={<FormPage />} />
        <Route path="*" element={<PNF/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
