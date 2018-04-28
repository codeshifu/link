import React, { Component } from 'react'
import AddBookmarkForm from '../AddBookmarkForm/AddBookmarkForm'
import { Consumer } from '../AppContext/AppContext'

class EditBookmark extends Component {
  constructor (props) {
    super(props)
    this.editBookmark = this.editBookmark.bind(this)
  }

  render () {
    return (
      <Consumer>
        {
            (({edit}) => (
              <AddBookmarkForm
                bookmark={this.props.bookmark}
                onSubmit={(update) => edit(this.props.bookmark.id, update)} />)
            )
        }
      </Consumer>
    )
  }
}

export default EditBookmark
