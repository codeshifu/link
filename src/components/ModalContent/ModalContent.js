import React from 'react'
import PropTypes from 'prop-types'

const ModalContent = ({modalTitle, children}) => {
  return (
    <div className='modal-content'>
      <div className='modal-header'>
        <h4 className='modal-title'>{modalTitle}</h4>
      </div>
      <div className='modal-body'>
        {children}
      </div>
    </div>
  )
}

ModalContent.propTypes = {
  modalTitle: PropTypes.string
}

export default ModalContent
