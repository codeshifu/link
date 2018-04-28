import React, { Component } from 'react'
import { Consumer } from '../AppContext/AppContext'
import AddBookmarkForm from '../AddBookmarkForm/AddBookmarkForm'

class AddBookmark extends Component {
  render () {
    return (
      <Consumer>
        {
            (({add}) => (
              <AddBookmarkForm
                bookmark={this.props.bookmark}
                onSubmit={(data) => add(data)} />
                    )
                )
            }
      </Consumer>
    )
  }
}

export default AddBookmark
