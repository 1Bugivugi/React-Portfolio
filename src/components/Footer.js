import React, { Component } from 'react';
import '../css/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render(){
    return(
      <div id='footer' className='p-3'>
        <Container>
          <Row>
            <Col xs={4} md={4}>
            <ul>
              <li>
                Favorite Food: <FontAwesomeIcon icon='igloo' />
              </li>
            </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;
