import React, { Component } from 'react'
import PropTypes from 'prop-types'
import url from 'url'
import './bookmark.css'

class Bookmark extends Component {
  render () {
    const { title, link } = this.props
    const parsedUrl = url.parse(link)
    return (
      <div className='_bookmark'>
        <a href={parsedUrl.href}>
          <h1 className='title'>{title}</h1>
          <p className='link'>{parsedUrl.hostname.replace('www.', '')}</p>
        </a>
      </div>
    )
  }
}

Bookmark.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
export default Bookmark
