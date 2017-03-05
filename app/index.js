import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './nav-menu'
import Footer from './footer'
import Carts from './carts'
import {Grid, Row, Col} from 'react-bootstrap';
import './style/style.scss';

ReactDOM.render(
    <Grid fluid={true}>
      <Row>
        <Col xs={12}>
          <TopMenu/>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <Carts/>
        </Col>
        <Col xs={4}>
          aside
        </Col>
      </Row>
      <Row>
        <Footer/>
      </Row>

    </Grid>,
    document.getElementById('root')
);