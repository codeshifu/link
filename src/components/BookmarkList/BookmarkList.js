import React from 'react'
import Bookmark from '../Bookmark/Bookmark'
import {Consumer} from '../AppContext/AppContext'

const BookmarkList = ({bookmarks = []}) => {
  return (
    <Consumer>
      {
        ({state}) => state.bookmarks.map((bookmark, i) =>
          <Bookmark key={i} bookmark={bookmark} />)
        }
    </Consumer>
  )
}

export default BookmarkList
