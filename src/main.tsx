import React from 'react'
import ReactDOM from 'react-dom/client'

import '@assets/main.css'

import Router from './routes/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
