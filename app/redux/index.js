import React from 'react';
import {Row, Col, ButtonToolbar, Button, Panel} from 'react-bootstrap'
import {PropTypes} from 'react'
import {connect} from 'react-redux'
import User from './components/user'
import Page from './components/page'
import {bindActionCreators} from 'redux'
import css from './redux.scss'
import Icon from './../components/icon'
import * as pageActions from './actions/page-actions'

const newData = [{
  year: 2017,
  photos: ['img1.jpeg', 'img1.jpeg', 'img2.jpeg', 'img2.jpeg', 'img2.jpeg', 'img2.jpeg'],
}, {
  year: 2016,
  photos: [],
}, {
  year: 2015,
  photos: ['img1.jpeg', 'img2.jpeg', 'img2.jpeg'],
}]

class ReduxApp extends React.Component {

  render() {
    const {deleteImage, setData} = this.props.pageActions
    const {name, surname, age, country} = this.props.user

    return (
      <Row>
        <Col xs={12}>
          <Icon name="check" width={30} height={30} stroke="red" />
          <Panel bsStyle="primary">
            <ButtonToolbar>
              <Button onClick={() => setData(newData)}>Завантажити</Button>
            </ButtonToolbar>
          </Panel>
          <Panel/>
          <div className={css.redux}>
            <User name={name}
              surname={surname}
              age={age}
              country={country} />
            <Page data={this.props.page} deleteImage={deleteImage} />
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


