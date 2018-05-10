import React, { Component } from 'react'
import ModalContent from '../ModalContent/ModalContent'
import PropTypes from 'prop-types'
import './modal.css'

class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      renderChildren: false
    }
  }

  componentDidMount () {
    const id = this.props.modalId
    const $ = window.$

    $(`#${id}`).on('hidden.bs.modal', () => {
      const renderChildren = !this.state.renderChildren
      this.setState({renderChildren})
    })

    $(`#${id}`).on('show.bs.modal', () => {
      const renderChildren = !this.state.renderChildren
      this.setState({renderChildren})
    })
  }

  render () {
    const {modalTitle, modalId} = this.props
    return (
      <div className='_modal modal fade' id={modalId} tabIndex='-1' role='dialog' aria-labelledby='myModalLabel'>
        {this.state.renderChildren && (
        <ModalContent modalTitle={modalTitle}>
          {this.props.children}
        </ModalContent>
        )}
      </div>
    )
  }
}

Modal.propTypes = {
  modalId: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired
}

export default Modal
