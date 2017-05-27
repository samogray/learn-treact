import {Row, Col} from 'react-bootstrap';
import React from 'react';

const Footer = () => {
  return (
    <Row>
      <Col xs={12} md={3}>
        logo
      </Col>
      <Col xs={12} md={9}>
        menu footer
      </Col>
    </Row>
  )
}

Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer

