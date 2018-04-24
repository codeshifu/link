import React, { Component } from 'react'
import ModalContent from '../ModalContent/ModalContent'

class AddBookmarkForm extends Component {
  render () {
    return (
      <ModalContent modalTitle='Add bookmark'>
        <div className='form-group'>
          <label htmlFor='bk_title'>Title</label>
          <input type='text' className='form-control' id='bk_title' placeholder='e.g. apache virtualhost slow lookup' />
        </div>
        <div className='form-group'>
          <label htmlFor='bk_url'>URL</label>
          <input type='text' className='form-control' id='bk_url' placeholder='e.g. stackoverflow.com/questions/7547316/apache-virtualhost-slow-lookup' />
        </div>
        <div className='modal-footer row'>
          <button type='button' className='btn btn-primary'>Add</button>
        </div>
      </ModalContent>
    )
  }
}

export default AddBookmarkForm
