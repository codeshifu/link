import React from 'react'

const OptionsMenu = ({editModalId, onCopyURL, onDelete}) => {
  return (
    <div className='dropdown'>
      <span className='btn dropdown-toggle' data-toggle='dropdown'>
        <span className='glyphicon glyphicon-option-vertical' aria-hidden='true' />
      </span>
      <ul className='dropdown-menu dropdown-menu-right'>
        <li role='presentation'>
          <a role='menuitem' data-toggle='modal' data-target={`#${editModalId}`}>Edit</a>
        </li>
        <li role='presentation'>
          <a role='menuitem' onClick={onCopyURL}>Copy URL</a>
        </li>
        <li className='divider' />
        <li role='presentation'>
          <a role='menuitem' onClick={onDelete}>Delete</a>
        </li>
      </ul>
    </div>
  )
}

export default OptionsMenu
