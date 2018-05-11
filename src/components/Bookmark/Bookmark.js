import React, { Component } from 'react'
import PropTypes from 'prop-types'
import url from 'url'
import './bookmark.css'
import Modal from '../Modal/Modal'
import EditBookmark from '../EditBookmark/EditBookmark'
import { Consumer } from '../AppContext/AppContext'
import Tag from '../Tag/Tag'
import OptionsMenu from '../OptionsMenu/OptionsMenu'

class Bookmark extends Component {
  constructor (props) {
    super(props)
    this.showTags = this.showTags.bind(this)
  }

  showTags () {
    const tags = this.props.tags || []
    return tags.map((tag, i) => <Tag tag={tag} key={i} />)
  }

  render () {
    const { title, link, id } = this.props.bookmark
    const parsedUrl = url.parse(link)

    return (
      <Consumer>
        {
        (({remove, showSnackBar}) => (
          <div className='_bookmark'>
            <a href={parsedUrl.href}>
              <h1 className='title'>{title}</h1>
              <p className='link'>{ parsedUrl.hostname && parsedUrl.hostname.replace('www.', '')}</p>
            </a>
            {this.showTags()}
            <OptionsMenu
              editModalId={id}
              onCopyURL={() => showSnackBar('URL copied')}
              onDelete={() => remove(id)} />
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
