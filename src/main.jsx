import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './components/App/App.jsx'
import { Provider } from 'react-redux';
import { store, persistor  } from './redux/store.js'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
)
