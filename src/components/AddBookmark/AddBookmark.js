import React from 'react'
import { Consumer } from '../AppContext/AppContext'
import AddEditBookmarkForm from '../AddEditBookmarkForm/AddEditBookmarkForm'
import PropTypes from 'prop-types'

const AddBookmark = ({bookmark}) => {
  return (
    <Consumer>
      {
          (({add}) => (
            <AddEditBookmarkForm
              bookmark={bookmark}
              onSubmit={(data) => add(data)} />
                  )
              )
          }
    </Consumer>
  )
}

AddBookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default AddBookmark
