import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from 'src/utils/registerServiceWorker'

import './index.scss'

import App from 'src/containers/App'

// Component

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
