import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap3/dist/css/bootstrap.min.css'
import $ from 'jquery'
window.jQuery = window.$ = $
require('bootstrap3/dist/js/bootstrap.min')

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
