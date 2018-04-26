import React, { Component } from 'react'
import { Consumer } from '../AppContext/AppContext'

class AddBookmarkForm extends Component {
  constructor (props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit (e, action) {
    e.preventDefault()
    const title = this.title.value
    const link = this.url.value

    if (!title || !link) return

    action({title, link})

    this.title.value = ''
    this.url.value = ''
  }
  render () {
    return (
      <Consumer>
        {
            (({add}) => (
              <form onSubmit={(e) => this.onFormSubmit(e, add)}>
                <div className='form-group'>
                  <label htmlFor='bk_title'>Title</label>
                  <input ref={input => { this.title = input }} type='text' className='form-control' id='bk_title' placeholder='e.g. apache virtualhost slow lookup' />
                </div>
                <div className='form-group'>
                  <label htmlFor='bk_url'>URL</label>
                  <input ref={input => { this.url = input }} type='text' className='form-control' id='bk_url' placeholder='e.g. stackoverflow.com/questions/7547316/apache-virtualhost-slow-lookup' />
                </div>
                <div className='modal-footer row'>
                  <button type='submit' className='btn btn-primary'>Add</button>
                </div>
              </form>
            ))
        }
      </Consumer>
    )
  }
}

export default AddBookmarkForm
