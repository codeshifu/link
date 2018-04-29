import React, { Component } from 'react'
import PropTypes from 'prop-types'
import url from 'url'
import './bookmark.css'
import Modal from '../Modal/Modal'
import EditBookmark from '../EditBookmark/EditBookmark'
import { Consumer } from '../AppContext/AppContext'

class Bookmark extends Component {
  render () {
    const { title, link, id } = this.props.bookmark
    const parsedUrl = url.parse(link)

    return (
      <Consumer>
        {
        (({remove}) => (
          <div className='_bookmark'>
            <a href={parsedUrl.href}>
              <h1 className='title'>{title}</h1>
              <p className='link'>{parsedUrl.hostname.replace('www.', '')}</p>
            </a>
            <div className='dropdown'>
              <span className='btn dropdown-toggle' data-toggle='dropdown'>
                <span className='glyphicon glyphicon-option-vertical' aria-hidden='true' />
              </span>
              <ul className='dropdown-menu dropdown-menu-right'>
                <li role='presentation'>
                  <a role='menuitem' data-toggle='modal' data-target={`#${id}`}>Edit</a>
                </li>
                <li role='presentation'>
                  <a role='menuitem'>Copy URL</a>
                </li>
                <li className='divider' />
                <li role='presentation'>
                  <a role='menuitem' onClick={() => remove(id)}>Delete</a>
                </li>
              </ul>
            </div>
            <Modal modalId={id} modalTitle='Edit bookmark'>
              <EditBookmark bookmark={this.props.bookmark} />
            </Modal>
          </div>
        ))
      }
      </Consumer>
    )
  }
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
}

export default Bookmark
