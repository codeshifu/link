import React, { Component } from 'react'
import './search.css'

class Search extends Component {
  render () {
    return (
      <div className='_search'>
        <input type='text' className='form-control' placeholder='search bookmarks' />
      </div>
    )
  }
}

export default Search
