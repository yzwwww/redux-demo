import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import IndexPage from './pages/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <IndexPage />
      </Provider>
    </div>
  )
}

export default App
