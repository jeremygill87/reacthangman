import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
import Image0 from "./images/0.jpg";
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import Image6 from "./images/6.jpg";
import Image7 from "./images/7.jpg";
import Image8 from "./images/8.jpg";
import Image9 from "./images/9.jpg";
import Image10 from "./images/10.jpg";

class Hangmanbox extends Component {
    constructor(props) {
        super(props);
        const imageArray = [
            Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10
        ];
        this.state = {
            imageArray: imageArray
        }
        console.log({imageArray});
    }

    render() {
        return (
            <Row>
                <Col xs={6} md={4}>
                    <Image src={this.state.imageArray[0]} alt="testing"/>
                </Col>
            </Row>
                
        )
    }
    
}

export default Hangmanbox;