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
          link: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets',
          tags: ['vscode']
        },
        bookmark2: {
          title: 'Apache VirtualHost slow lookup',
          link: 'https://stackoverflow.com/questions/7547316/apache-virtualhost-slow-lookup',
          tags: ['apache']
        },
        bookmark3: {
          title: 'Empty View for Android\'s RecyclerView',
          link: 'http://akbaribrahim.com/empty-view-for-androids-recyclerview/',
          tags: ['android', 'recyclerview', 'empty-view']
        },
        bookmark4: {
          title: 'HTML Currency Symbols, Entities and Codes — HTML Arrows',
          link: 'http://htmlarrows.com/currency/',
          tags: ['html']
        },
        bookmark5: {
          title: 'PHP file_get_contents with variables - Stack Overflow',
          link: 'http://stackoverflow.com/questions/39688416/php-file-get-contents-with-variables',
          tags: ['php']
        },
        bookmark6: {
          title: 'osx - Access denied for user root - mysql on MAC OS - Stack Overflow',
          link: 'http://stackoverflow.com/a/36252036/4238544',
          tags: ['mac', 'osx']
        }
      },
      searchQuery: '',
      addBookmarkId: 'add_bookmark'
    }
  }

  render () {
    return (
      <Provider value={{
        bookmarks: this.state.bookmarks,
        searchQuery: this.state.searchQuery,
        addBookmarkId: this.state.addBookmarkId,
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
        },
        search: (query) => {
          this.setState({searchQuery: query})
        }}}>
        {this.props.children}
      </Provider>
    )
  }
}

export default AppProvider
