import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './nav-menu/index.js'
import MyComponent from './another-component/index.js'
import AnotherComponent from './component/index.js'
import { Grid, Row, Col } from 'react-bootstrap';

import './style/style.scss';

ReactDOM.render(
  <Grid fluid={true}>
      <Row>
          <Col xs={12}>
              <TopMenu/>
          </Col>
      </Row>
      <Row>
          <Col xs={12}>
              <MyComponent/>
          </Col>
      </Row>
      <Row>
          <Col xs={12}>
              <AnotherComponent/>
          </Col>
      </Row>
  </Grid>,
  document.getElementById('root')
);