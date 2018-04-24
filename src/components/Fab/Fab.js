import React from 'react'
import './fab.css'
import Modal from '../Modal/Modal'
import AddBookmarkForm from '../AddBookmarkForm/AddBookmarkForm'

const Fab = () => {
  const modalId = 'add_bookmark'
  return (
    <React.Fragment>
      <Modal modalId={modalId}>
        <AddBookmarkForm modalId='add_bookmark' />
      </Modal>
      <div className='_fab' data-toggle='modal' data-target={`#${modalId}`}>
        <img src='/images/bookmark.svg' alt='add bookmark' />
      </div>
    </React.Fragment>
  )
}

export default Fab
