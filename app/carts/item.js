import React from 'react'
import {Col, Thumbnail, Button} from 'react-bootstrap';

const Item = () => {
  return (
      <Col xs={6} md={4}>
        <Thumbnail src="https://vk.cc/6kwwuj" alt="242x200" responsive>
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
  )
}

Item.propTypes = {}
Item.defaultProps = {}

export default Item

