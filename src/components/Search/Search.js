import React, { Component } from 'react'
import './search.css'
import { Consumer } from '../AppContext/AppContext'

class Search extends Component {
  constructor (props) {
    super(props)
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch (action) {
    const query = this.searchInput.value
    action(query)
  }

  render () {
    return (
      <Consumer>
        {
          ({search}) => (
            <div className='_search'>
              <input
                ref={input => { this.searchInput = input }}
                onChange={() => this.onSearch(search)}
                type='text'
                className='form-control'
                placeholder='search bookmarks' />
            </div>
          )
        }
      </Consumer>
    )
  }
}

export default Search
