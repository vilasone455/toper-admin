import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './assets/css/tailwind.output.css'
import App from './App'
import { SidebarProvider } from './context/SidebarContext'
import { Provider } from 'react-redux';
import ThemedSuspense from './components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'
import * as serviceWorker from './serviceWorker'
import { store } from './instance/store'

ReactDOM.render(
  <SidebarProvider>
    <Provider store={store}>
      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences>
          <App />
        </Windmill>
      </Suspense>
    </Provider>
  </SidebarProvider>,
  document.getElementById('root')
)

serviceWorker.register()
