import React from 'react'
import { Consumer } from '../AppContext/AppContext'
import AddEditBookmarkForm from '../AddEditBookmarkForm/AddEditBookmarkForm'
import PropTypes from 'prop-types'

const EditBookmark = ({bookmark}) => {
  return (
    <Consumer>
      {
          (({edit}) => (
            <AddEditBookmarkForm
              bookmark={bookmark}
              onSubmit={(update) => edit(bookmark.id, update)} />))
      }
    </Consumer>
  )
}

EditBookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default EditBookmark
