import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'src/store'
import registerServiceWorker from 'src/utils/registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

import App from 'src/containers/App'

// Component

const handleRouteChange = () => {
  if (this.state.location !== 'POP') window.scrollTo(0, 0)
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter onUpdate={handleRouteChange}>
      <App/>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
