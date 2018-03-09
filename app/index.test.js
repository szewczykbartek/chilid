import React from 'react'
import ReactDOM from 'react-dom'
import AppLayout from './layouts/AppLayout'


it('renders without crashing', () => {
  ReactDOM.render((
    <AppLayout/>
  ), document.getElementById('root'))
})
