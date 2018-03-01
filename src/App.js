import React, { Component } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main.js";
import Info from "./components/info/Info.js";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
