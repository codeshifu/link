import React, { Component } from 'react'
import ModalContent from '../ModalContent/ModalContent'
import PropTypes from 'prop-types'
import './modal.css'

class Modal extends Component {
  render () {
    const {modalTitle, modalId} = this.props
    return (
      <div className='_modal modal fade' id={modalId} tabIndex='-1' role='dialog' aria-labelledby='myModalLabel'>
        <div className='vertical-alignment-helper'>
          <div className='modal-dialog vertical-align-center'>
            <div className='modal-dialog' role='document'>
              <ModalContent modalTitle={modalTitle}>
                {this.props.children}
              </ModalContent>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  modalId: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired
}

export default Modal
