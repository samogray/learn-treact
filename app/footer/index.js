import {Row, Col} from 'react-bootstrap';
import React from 'react';

const Footer = () => {
  return (
      <div>
        <Row>
          <Col xs={12} md={3}>
            logo
          </Col>
          <Col xs={12} md={9}>
            menu footer
          </Col>
        </Row>
      </div>
  )
}

Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer

