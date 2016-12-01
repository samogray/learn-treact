import React from 'react'
import  style from './style.scss'
import  classnames from 'classnames'

class Mycomponent extends React.Component {
    render () {
        return (
          <div className={classnames(style.localTest, style.border /*'global-class-name'*/)}>Local scope <div className={style.localTest__element}></div></div>
        )
        
    }
}

export default Mycomponent