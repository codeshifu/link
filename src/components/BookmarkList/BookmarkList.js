import React from 'react'
import Bookmark from '../Bookmark/Bookmark'
import {Consumer} from '../AppContext/AppContext'
import filters from '../../filters/bookmarkFilter'
import './bookmarkList.css'

const BookmarkList = ({bookmarks = []}) => {
  return (
    <div className='_bookmarkList'>
      <Consumer>
        {
        ({bookmarks, searchQuery}) => {
          const filteredBookmarks = filters(bookmarks, searchQuery)
          if (filteredBookmarks.length <= 0) return <p style={{background: '#fff', margin: 0}} className='text-center'>No search results found</p>
          return filteredBookmarks.map(id =>
            <Bookmark
              key={id}
              tags={bookmarks[id].tags}
              bookmark={{...bookmarks[id], id}} />)
        }
      }
      </Consumer>
    </div>
  )
}

export default BookmarkList
