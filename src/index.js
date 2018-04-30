import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap3/dist/css/bootstrap.min.css'
import $ from 'jquery'
import AppProvider from './components/AppProvider/AppProvider'
window.jQuery = window.$ = $
require('bootstrap3/dist/js/bootstrap.min')

const boot = (
  <AppProvider>
    <App />
  </AppProvider>
)
ReactDOM.render(boot, document.getElementById('root'))
registerServiceWorker()
