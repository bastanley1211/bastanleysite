import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import { Routes, Route } from "react-router-dom";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route
          path="/blog"
          component={() => {
            window.location.href = "https://blog.bethanystanley.co/";
            return null;
          }}
        />
      </Routes>
      <Main />
      <ScrollButton />
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

function BlogRoute() {
  return <Blog />;
}
export default App;
