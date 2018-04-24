import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './header.css'
import Search from '../Search/Search'

class Header extends Component {
  render () {
    const {title = 'My List'} = this.props
    return (
      <header className='_header'>
        <h2>{title}</h2>
        <Search />
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
