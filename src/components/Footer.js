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
            <Col xs={3} md={1}>
              <ul>
                <li>
                  <a href='https://github.com/'><FontAwesomeIcon icon={['fab', 'github']} size='lg'/></a>
                </li>
              </ul>
            </Col>
            <Col xs={3} md={1}>
              <ul>
                <li>
                  <a href='https://www.linkedin.com/'><FontAwesomeIcon icon={['fab', 'linkedin']} size='lg'/></a>
                </li>
              </ul>
            </Col>
            <Col xs={3} md={1}>
              <ul>
                <li>
                  <a href='https://twitter.com/'><FontAwesomeIcon icon={['fab', 'twitter']} size='lg'/></a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className='copyright'><a>© 2019 Gleb Rezoun</a></div>
      </div>
    )
  }
}

export default Footer;
