import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import words from "./words.json";
import { render } from '@testing-library/react';



class WordContainer extends Component {
    constructor(props) {
        super(props);
        let randomizer = Math.floor(Math.random() * words.length);
        this.state = {
            randomizer: randomizer,
            guessingWord:""
        }
    }

    componentDidMount() {
        this.returnWord(this.state.guessingWord);
    }
    returnWord = (guessingWord) => {
        this.setState({ guessingWord: words[this.state.randomizer ]});
        console.log("Your word is " + this.state.guessingWord);
    }


    render() {
        return (
            <div className="container">
                <h3>{this.state.randomizer}</h3>
                <h3>{this.state.guessingWord}</h3>
            </div>
        )
    }
}
export default WordContainer;