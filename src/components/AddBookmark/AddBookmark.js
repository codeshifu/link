import React from 'react'
import { Consumer } from '../AppContext/AppContext'
import AddEditBookmarkForm from '../AddEditBookmarkForm/AddEditBookmarkForm'

const AddBookmark = () => {
  return (
    <Consumer>
      {
          (({add}) => (
            <AddEditBookmarkForm
              onSubmit={(data) => add(data)} />))
          }
    </Consumer>
  )
}

export default AddBookmark
