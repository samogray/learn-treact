import React from 'react'
import Item from './item'
import {Row} from 'react-bootstrap';


const Layout = (props) => {
  return (
      <Row>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </Row>
  )
}

Layout.propTypes = {}
Layout.defaultProps = {}

export default Layout

