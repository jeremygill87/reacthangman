import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <Container>
                        <h1>React Hangman</h1>
                        <p>Hangman Game Using React and Merriam-Webster's API</p>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;