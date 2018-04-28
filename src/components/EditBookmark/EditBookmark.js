import React, { Component } from 'react'
import AddBookmarkForm from '../AddBookmarkForm/AddBookmarkForm'
import { Consumer } from '../AppContext/AppContext'

class EditBookmark extends Component {
  constructor (props) {
    super(props)
    this.editBookmark = this.editBookmark.bind(this)
  }

  editBookmark (action, update) {
    action(update)
  }

  render () {
    return (
      <Consumer>
        {
            (({add}) => (
              <AddBookmarkForm
                bookmark={this.props.bookmark}
                onSubmit={(update) => this.editBookmark(add, update)} />
                )
            )
        }
      </Consumer>
    )
  }
}

export default EditBookmark
