import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'

const Layout = lazy(() => import("./components/layout/Layout"))

const LoginPage = lazy(() => import("./pages/login-page/LoginPage"))

function App() {

	return (
		<BrowserRouter>
			
			<Suspense>
			<Routes>
		
			<Route
				element={
						<Layout/>
						}>

							<Route index element={
								<ErrorBoundary>
									<LoginPage/>
								</ErrorBoundary>
							}/>

					</Route>

				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}

export default App
