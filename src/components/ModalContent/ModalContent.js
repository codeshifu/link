import React from 'react'
import PropTypes from 'prop-types'

const ModalContent = ({modalTitle, children}) => {
  return (
    <div className='vertical-alignment-helper'>
      <div className='modal-dialog vertical-align-center'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='close'
                data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 className='modal-title'>{modalTitle}</h4>
            </div>
            <div className='modal-body'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalContent.propTypes = {
  modalTitle: PropTypes.string
}

export default ModalContent
