import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'
import './assets/styles.css'

const root = document.getElementById('root')
const store = createStore(reducers)


render(<Provider store={store}>
    <App/>
</Provider>, root)