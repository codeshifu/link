import React from 'react'
import PropTypes from 'prop-types'
import './tag.css'

const Tag = ({tag}) => {
  return (
    <span className='_tag'>{tag}</span>
  )
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired
}

export default Tag
