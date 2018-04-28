import React, { Component } from 'react'
import crypto from 'crypto'

class AddBookmarkForm extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.bookmark)
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
    const id = crypto.randomBytes(5).toString('hex')

    if (!title || !link) return
    this.props.onSubmit({title, link, id})
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
            placeholder='e.g. apache virtualhost slow lookup' />
        </div>
        <div className='form-group'>
          <label htmlFor='bk_url'>URL</label>
          <input
            value={this.state.link}
            onChange={this.onLinkChange}
            ref={input => { this.url = input }}
            type='text' className='form-control'
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

export default AddBookmarkForm
