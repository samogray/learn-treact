import React from 'react'
import './icon.scss'

const Icon = ({name, width, height, fill, stroke}) => {
  return (
    <i className="icon">
      <svg className='svg-icon' width={width} height={height} fill={fill} stroke={stroke}>
        <use xlinkHref={`#icon-${name}`} />
      </svg>
    </i>
  )
}

Icon.propTypes = {
  name: React.PropTypes.string,
  fill: React.PropTypes.string,
  stroke: React.PropTypes.string,
  height: React.PropTypes.number,
  width: React.PropTypes.number
}

export default Icon


