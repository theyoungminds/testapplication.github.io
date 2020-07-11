import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App-header">
      <Header />
      <Navbar />
      <Row />
      <Footer />
    </div>
  );
}

export default App;
