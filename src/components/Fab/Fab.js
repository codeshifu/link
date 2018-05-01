import React from 'react'
import './fab.css'
import Modal from '../Modal/Modal'
import AddBookmark from '../AddBookmark/AddBookmark'
import { Consumer } from '../AppContext/AppContext'

const Fab = () => {
  return (
    <Consumer>
      {
        (({addBookmarkId}) => (
          <React.Fragment>
            <Modal modalId={addBookmarkId} modalTitle='Add bookmark'>
              <AddBookmark />
            </Modal>
            <div className='_fab' data-toggle='modal' data-target={`#${addBookmarkId}`}>
              <img src='/images/bookmark.svg' alt='add bookmark' />
            </div>
          </React.Fragment>
        ))
      }
    </Consumer>
  )
}

export default Fab
