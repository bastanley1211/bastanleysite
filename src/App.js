import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
      <Main />
      <Footer />
    </>
  );
}

function HomeRoute() {
  return <Home />;
}

function AboutRoute() {
  return <About />;
}

function ContactRoute() {
  return <Contact />;
}

export default App;
