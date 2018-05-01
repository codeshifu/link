import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { parse } from 'url'
import './addEditBookmarkForm.css'

class AddEditBookmarkForm extends Component {
  constructor (props) {
    super(props)
    const {title = '', link = '', tags = ''} = this.props.bookmark || {}
    this.state = {
      title,
      link,
      tags
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onLinkChange = this.onLinkChange.bind(this)
    this.onTagsChange = this.onTagsChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onTitleChange () {
    const title = this.title.value
    this.setState({title})
  }

  onLinkChange () {
    const link = this.url.value
    this.setState({link})
  }

  onTagsChange () {
    const tags = this.tags.value
    this.setState({tags})
  }

  onFormSubmit (e) {
    e.preventDefault()
    const title = this.title.value.trim()
    const link = this.url.value.trim()
    let tags = this.tags.value.trim()

    if (!title || !link || !tags) return
    if (!parse(link) || !parse(link).hostname) return

    tags = tags.trim(',')

    this.props.onSubmit({title, link, tags})
    this.title.value = ''
    this.url.value = ''
    this.tags.value = ''
  }

  render () {
    return (
      <form className='_addEditBookmarkForm' onSubmit={(e) => this.onFormSubmit(e)}>
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
            aria-describedby='titleBlock'
            placeholder='Undefined is not a function' />
          <span
            id='titleBlock'
            className='help-block'>
              Uncaught TypeError: undefined is not a function
          </span>
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
            aria-describedby='urlBlock'
            id='bk_url' />
          <span
            className='help-block'
            id='urlBlock'>URL must start with either <em>http://</em> or <em>https://</em> such as <em>https://stackoverflow.com/questions/23524180/</em></span>
        </div>
        <div className='form-group'>
          <label htmlFor='bk_tags'>Tags</label>
          <input
            value={this.state.tags}
            onChange={this.onTagsChange}
            ref={input => { this.tags = input }}
            type='text'
            placeholder=''
            required
            aria-describedby='tagBlock'
            className='form-control' />
          <span
            id='tagBlock'
            className='help-block'>At least one tag e.g. ( <em>javascript, react, state</em> ) separated by comma</span>
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
