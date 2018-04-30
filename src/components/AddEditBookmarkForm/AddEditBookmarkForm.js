import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { parse } from 'url'

class AddEditBookmarkForm extends Component {
  constructor (props) {
    super(props)
    const {title = '', link = '', id = ''} = this.props.bookmark || {}
    this.state = {
      title,
      link,
      id
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onLinkChange = this.onLinkChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onTitleChange (dom) {
    const title = dom.target.value
    this.setState({title})
  }
  onLinkChange (dom) {
    const link = dom.target.value
    this.setState({link})
  }

  onFormSubmit (e) {
    e.preventDefault()
    const title = this.title.value
    const link = this.url.value

    if (!title || !link) return
    if (!parse(link) || !parse(link).hostname) return

    this.props.onSubmit({title, link})
    this.title.value = ''
    this.url.value = ''
  }

  render () {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='bk_title'>Title</label>
          <input
            value={this.state.title}
            onChange={this.onTitleChange}
            ref={input => { this.title = input }}
            type='text'
            className='form-control'
            id='bk_title'
            required
            placeholder='e.g. apache virtualhost slow lookup' />
        </div>
        <div className='form-group'>
          <label htmlFor='bk_url'>URL</label>
          <input
            value={this.state.link}
            onChange={this.onLinkChange}
            ref={input => { this.url = input }}
            type='url'
            required
            className='form-control'
            id='bk_url'
            placeholder='e.g. https://stackoverflow.com/questions/7547316/apache-virtualhost-slow-lookup' />
        </div>
        <div className='modal-footer row'>
          <button type='submit' className='btn btn-primary'>Save</button>
        </div>
      </form>
    )
  }
}

AddEditBookmarkForm.propTypes = {
  bookmark: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export default AddEditBookmarkForm
