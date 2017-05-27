import React from 'react';
import {Row, Col} from 'react-bootstrap'
import css from './redux.scss'

const ReduxApp = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={css.redux}>
          <img src={require('./img/img1.jpeg')} alt="hey"/>
        </div>
      </Col>
    </Row>
  )
}

ReduxApp.propTypes = {}
ReduxApp.defaultProps = {}

export default  ReduxApp

