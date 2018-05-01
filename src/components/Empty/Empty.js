import React from 'react'
import './empty.css'
import { Consumer } from '../AppContext/AppContext'

const Empty = () => {
  return (
    <Consumer>
      {
            (({addBookmarkId}) => (
              <div className='_empty'>
                <div className='content'>
                  <img src='/images/lonely.png' alt='' />
                  <p>
                    It's lonely here. <span
                      className='text-primary btn'
                      data-toggle='modal'
                      data-target={`#${addBookmarkId}`}>Add a bookmark</span>
                  </p>
                </div>
              </div>
            ))
        }
    </Consumer>
  )
}

export default Empty
