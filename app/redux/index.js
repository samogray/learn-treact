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

const FAKE_DATA = {
  2017: {
    year: 2017,
    photos: ['img1.jpeg', 'img1.jpeg', 'img2.jpeg']
  },
  2016: {
    year: 2016,
    photos: ['img1.jpeg']
  },
  2015: {
    year: 2015,
    photos: []
  },
}

const fakeServer = {
  getPhotosByYear: year => new Promise((resolve, reject) => {
    setTimeout(() => resolve(FAKE_DATA[year]), Math.random * 300 + 30)
  }),
  getPhotosBulk: years =>  new Promise((resolve, reject) => {
    setTimeout(() => resolve(_.map(_.pick(FAKE_DATA, years), item => ({[item.year]: item}))), Math.random * 300 + 30)
  }),
}



class ReduxApp extends React.Component {
  
  fetchPhotosToSet = year => {
    this.props.pageActions.startFetch()
    fakeServer.getPhotosByYear(year).then(({year, photos}) => this.props.pageActions.setPhotos(year, photos))
  }

  fetchPhotosToAppend =  year => {
    this.props.pageActions.startFetch()
    fakeServer.getPhotosByYear(year).then(({year, photos}) => this.props.pageActions.appendPhotos(year, photos))
  }
   
  render() {
    const {name, surname, age, country} = this.props.user
    const page = this.props.page
    const {setPhotos} = this.props.pageActions
    return (
      <Row>
        <Col xs={12}>
          <Icon name="check" width={30} height={30} stroke="red"/>
          <div className={css.redux}>
            <User name={name}
                  surname={surname}
                  age={age}
                  country={country}/>
            <Page page={page}
                  fetchPhotosToSet={this.fetchPhotosToSet}
                  fetchPhotosToAppend={this.fetchPhotosToAppend}/>
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

