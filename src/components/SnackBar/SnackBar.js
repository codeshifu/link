import React from 'react'
import './snackbar.css'

const SnackBar = ({text}) => {
  return (
    <div className='_snackbar show'>
      {text}
    </div>
  )
}

export default SnackBar
