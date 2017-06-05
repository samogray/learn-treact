import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './nav-menu'
import Footer from './footer'
import Redux from './redux'
import Carousel from './carousel'
import {Provider} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap';
import configureStore from './redux/configure-store'
import './style/style.scss';
const __svg__ = { path: './sprite/svg/**/*.svg', name: 'assets/svg/[hash].sprite.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

const store = configureStore();

ReactDOM.render(
  <Grid fluid={true}>
    <Row>
      <Col xs={12}>
        <TopMenu/>
      </Col>
    </Row>
    <Carousel/>
    <Provider store={store}>
      <Redux/>
    </Provider>
    <Footer/>
  </Grid>,
  
  document.getElementById('root')
);
