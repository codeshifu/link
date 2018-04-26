import React, { Component } from 'react'
import Header from './components/Header/Header'
import Fab from './components/Fab/Fab'
import BookmarkList from './components/BookmarkList/BookmarkList'

class App extends Component {
  render () {
    return (
      <div style={{background: '#E8EAF6', paddingTop: 115}}>
        <Header />
        <BookmarkList />
        <Fab />
      </div>
    )
  }
}

export default App
