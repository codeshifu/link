import React from 'react'
import Bookmark from '../Bookmark/Bookmark'
import {Consumer} from '../AppContext/AppContext'

const BookmarkList = ({bookmarks = []}) => {
  return (
    <Consumer>
      {
        ({state}) => Object.keys(state.bookmarks).map(id =>
          <Bookmark key={id} bookmark={{...state.bookmarks[id], id}} />)
        }
    </Consumer>
  )
}

export default BookmarkList
