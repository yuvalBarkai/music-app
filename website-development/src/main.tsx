import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={Store}>
    <App />
  </Provider>,
)
