import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './nav-menu/index.js'
import { Grid, Row, Col } from 'react-bootstrap';

import './style/style.scss';

ReactDOM.render(
  <Grid fluid = {true}>
      <Row>
          <Col xs={12}>
              <TopMenu/>
          </Col>
      </Row>
  </Grid>,
  document.getElementById('root')
);