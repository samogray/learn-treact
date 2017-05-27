import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './nav-menu'
import Footer from './footer'
import Redux from './redux'
import Carousel from './carousel'
import {Grid, Row, Col} from 'react-bootstrap';
import './style/style.scss';

ReactDOM.render(
  <Grid fluid={true}>
    <Row>
      <Col xs={12}>
        <TopMenu/>
      </Col>
    </Row>
    <Carousel/>
    <Redux/>
    <Footer/>

  </Grid>,
  document.getElementById('root')
);
