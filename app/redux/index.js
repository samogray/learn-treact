import React from 'react';
import {Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import css from './redux.scss'


const ReduxApp = ({name, surname, age, country}) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={css.redux}>
          <img src={require('./img/img1.jpeg')} alt="hey"/>
        </div>
      </Col>
      <Col xs={12}>
        <div className={css.redux}>
          <h1>Hello {name} {surname}!</h1>
          <h3><span>You have {age} year</span></h3>
          <h3><span>and you from {country}</span></h3>
        </div>
      </Col>
    </Row>
  )
}

function mapStateToProps(state) {
  return {
    name: state.name,
    surname: state.surname,
    age: state.age,
    country: state.country,
  }
}

ReduxApp.propTypes = {
  name: React.PropTypes.string,
  surname: React.PropTypes.string,
  age: React.PropTypes.number,
  country: React.PropTypes.string
}

export default  connect(mapStateToProps)(ReduxApp)

