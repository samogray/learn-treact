import React from 'react'
import  style from './style.scss'
import  classnames from 'classnames'

class Mycomponent extends React.Component {
    render () {
        return (
          <div className={classnames (style.localTest, style.localTest)}>Local scope</div>
        )
        
    }
}

export default Mycomponent