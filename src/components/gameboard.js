import React, { Component } from 'react';
import './gameboard.css';
import { getWord } from './wordlist';

import Image1 from "./images/4.jpg";
import Image2 from "./images/5.jpg";
import Image3 from "./images/6.jpg";
import Image4 from "./images/7.jpg";
import Image5 from "./images/8.jpg";
import Image6 from "./images/9.jpg";
import Image7 from "./images/10.jpg";

class Gameboard extends Component {
    static defaultProps = {
        images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7],
        maxWrong: 6
    }

    constructor (props) {
        super(props);
        this.state = {
            wrong: 0,
            guessed: new Set([]),
            answer: getWord()
        }
        console.log(this.state)
    }

    handleInput = e => {
        let letter = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(letter),
            wrong: st.wrong + (st.answer.includes(letter) ? 0:1 )
        }));
        console.log(this.state)
    }

    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    renderButtons() {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
            <button class="btn btn-lg btn-primary m-2" key={letter} value={letter} onClick={this.handleInput} disabled={this.state.guessed.has(letter)}>
                {letter}
            </button>
        ));
    }

    reset = () => {
        this.setState({
            wrong: 0,
            guessed: new Set([]),
            answer: getWord()
        });
    }

    render() {
        const winner = this.guessedWord().join("") === this.state.answer;
        const gameOver = this.state.wrong >= this.props.maxWrong;
        let gameOutcome = this.renderButtons();

        if (winner) {
            gameOutcome = "A winner is you."
        }

        if (gameOver) {
            gameOutcome = "Loser.  Just give up."
        }

        return (
            <div className="gameboard container">
                <h1 className="text-center">HangMan React</h1>
                <div className="text-center">
                    <img src={this.props.images[this.state.wrong]} alt="" />
                </div>
                <div className="text-center">
                    <h4>Guess the word</h4>
                    <p>
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </p>
                    <p>{gameOutcome}</p>
                    <button className="btn btn-info" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Gameboard;