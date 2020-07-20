import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';

class Lettersbox extends Component {
    constructor(props) {
        super(props);
        let letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

        this.state = {
            letterArray: letterArray
        }

    }
    render() {
        return(
            <div className="letterscontainer">
                <h3>{this.state.letterscontainer}</h3>
            </div>
        )
    }
}

export default Lettersbox;