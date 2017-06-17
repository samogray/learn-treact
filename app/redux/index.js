import React from 'react';
import {Row, Col} from 'react-bootstrap'
import {PropTypes} from 'react'
import {connect} from 'react-redux'
import User from  './components/user'
import Page from  './components/page'
import {bindActionCreators} from 'redux'
import css from './redux.scss'
import Icon from './../components/icon'
import * as pageActions from './actions/page-actions'


class ReduxApp extends React.Component {
  render() {
    const {name, surname, age, country} = this.props.user
   // const {setData} = this.props.page
    return (
      <Row>
        <Col xs={12}>
          <Icon name="check" width={30} height={30} stroke="red"/>
          <div className={css.redux}>
            <User name={name}
                  surname={surname}
                  age={age}
                  country={country}/>
            <Page data={this.props.page}/>
          </div>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp)

