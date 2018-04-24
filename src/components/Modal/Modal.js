import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './modal.css'

class Modal extends Component {
  render () {
    return (
      <div className='_modal modal fade' id={this.props.modalId} tabIndex='-1' role='dialog' aria-labelledby='myModalLabel'>
        <div className='vertical-alignment-helper'>
          <div className='modal-dialog vertical-align-center'>
            <div className='modal-dialog' role='document'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  modalId: PropTypes.string.isRequired
}

export default Modal
