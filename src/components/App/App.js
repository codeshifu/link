import React, { Component } from 'react'
import Header from '../Header/Header'
import Fab from '../Fab/Fab'
import BookmarkList from '../BookmarkList/BookmarkList'
import './app.css'

class App extends Component {
  render () {
    return (
      <div className='_app'>
        <Header />
        <BookmarkList />
        <Fab />
      </div>
    )
  }
}

export default App
