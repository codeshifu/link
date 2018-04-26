import React, { Component } from 'react'
import {Provider} from '../AppContext/AppContext'

class AppProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bookmarks: [
        {
          title: 'Creating your own snippets',
          link: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets'
        },
        {
          title: 'Apache VirtualHost slow lookup',
          link: 'https://stackoverflow.com/questions/7547316/apache-virtualhost-slow-lookup'
        }
      ]
    }
  }

  render () {
    return (
      <Provider value={{state: this.state,
        add: (data) => {
          const update = this.state.bookmarks
          update.push(data)
          this.setState({bookmarks: update})
        }}}>
        {this.props.children}
      </Provider>
    )
  }
}

export default AppProvider
