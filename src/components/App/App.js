import React, { Component } from 'react'
import Header from '../Header/Header'
import Fab from '../Fab/Fab'
import BookmarkList from '../BookmarkList/BookmarkList'
import './app.css'
import SnackBar from '../SnackBar/SnackBar'
import { Consumer } from '../AppContext/AppContext'

class App extends Component {
  render () {
    return (
      <Consumer>
        {
          (({snackBarText}) => (
            <div className='_app'>
              <Header />
              <BookmarkList />
              <Fab />
              {snackBarText && (<SnackBar text={snackBarText} />)}
            </div>
          ))
        }
      </Consumer>
    )
  }
}

export default App
