import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

class WinLoss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wincount: 0,
            losscount: 0
        }
    }

    // updateWin = () => {
    //     this.setState({ wincount: wincount + 1 }, 
    //         console.log("You win"))
    // }

    // updateLose = () => {
    //     this.setState({ losscount: losscount + 1}, 
    //         console.log("You lose"))
    // }

    render() {
        return (
            <Row>
                <Col xs={6} md={4}>
                    <h2>Win Count: {this.state.wincount}</h2>
                    <h2>Loss Count: {this.state.losscount}</h2>
                </Col>
            </Row>
        )
    }
}

export default WinLoss;