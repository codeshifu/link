import React, { Component } from 'react'
import {Provider} from '../AppContext/AppContext'
import {randomBytes} from 'crypto'

class AppProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bookmarks: {
        bookmark1: {
          title: 'Creating your own snippets',
          link: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets'
        },
        bookmark2: {
          title: 'Apache VirtualHost slow lookup',
          link: 'https://stackoverflow.com/questions/7547316/apache-virtualhost-slow-lookup'
        }
      }
    }
  }

  render () {
    return (
      <Provider value={{state: this.state,
        add: (data) => {
          const bookmarks = {...this.state.bookmarks}
          const key = randomBytes(5).toString('hex')
          bookmarks[key] = data
          this.setState({bookmarks})
        },
        edit: (id, updatedBookmark) => {
          const bookmarks = {...this.state.bookmarks}
          bookmarks[id] = updatedBookmark
          this.setState({bookmarks})
        },
        remove: (id) => {
          const bookmarks = {...this.state.bookmarks}
          delete bookmarks[id]
          this.setState({bookmarks})
        }}}>
        {this.props.children}
      </Provider>
    )
  }
}

export default AppProvider
