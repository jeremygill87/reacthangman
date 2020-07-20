import React, { Component } from "react";
import Hangmanbox from "./components/hangmanbox";
import Header from "./components/header";
import Lettersbox from "./components/lettersbox";
import WinLoss from "./components/winlossbox";
import WordContainer from "./components/wordcontainer";
import './App.css';

    // let letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <WinLoss/>
        <WordContainer/>
        <Lettersbox/>
        <Hangmanbox/>
      </div>
    )
  }
}