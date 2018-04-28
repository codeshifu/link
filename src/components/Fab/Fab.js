import React from 'react'
import './fab.css'
import Modal from '../Modal/Modal'
import AddBookmark from '../AddBookmark/AddBookmark'

const Fab = () => {
  const modalId = 'add_bookmark'
  return (
    <React.Fragment>
      <Modal modalId={modalId} modalTitle='Add bookmark'>
        <AddBookmark />
      </Modal>
      <div className='_fab' data-toggle='modal' data-target={`#${modalId}`}>
        <img src='/images/bookmark.svg' alt='add bookmark' />
      </div>
    </React.Fragment>
  )
}

export default Fab
