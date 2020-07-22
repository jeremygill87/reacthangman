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
    //Establish static properties that are never altered
    static defaultProps = {
        images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7],
        maxWrong: 6
    }
    //use constructor to initialize component's state
    constructor (props) {
        super(props);
        this.state = {
            wrong: 0,
            guessed: new Set([]),
            answer: getWord()
        }
        console.log(this.state)
    }

    //reads the value of the letter that corresponds with the button clicks
    handleInput = e => {
        let letter = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(letter),
            wrong: st.wrong + (st.answer.includes(letter) ? 0:1 )
        }));
        console.log(this.state)
    }

    //takes answer property, splits the characters, then assigns _'s for all characters within the answer that have not been guessed yet
    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    //renders letter buttons and assigns letter values to each button.  "Disabled" is a property designed to prevent duplicate letter guesses
    renderButtons() {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
            <button class="btn btn-lg btn-primary m-2" key={letter} value={letter} onClick={this.handleInput} disabled={this.state.guessed.has(letter)}>
                {letter}
            </button>
        ));
    }

    //Reset button for when you win or lose or just want to give up
    reset = () => {
        this.setState({
            wrong: 0,
            guessed: new Set([]),
            answer: getWord()
        });
    }

    render() {
        //gameOutcome generates the buttons upon new game, and changes string properties based on whether or not the player wins
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
                <h1 className="hangman-banner text-center">HangMan React</h1>
                <div className="hangman-box text-center">
                    <img src={this.props.images[this.state.wrong]} alt="" />
                </div>
                <div className="text-center">
                    <h4>Guess the word</h4>
                    <h2>
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </h2>
                    <p>{gameOutcome}</p>
                    <button className="reset-button btn btn-info" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Gameboard;