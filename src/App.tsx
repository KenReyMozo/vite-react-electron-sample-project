import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Layout from './components/layout/Layout'
import { MemoryRouter as Router } from 'react-router-dom'
import LoginPage from '@/pages/login-page/LoginPage';
// import ErrorBoundary from './components/error-boundary/ErrorBoundary'

const App = () => {
	return (
	<>
	<Router>
	<div>
	<AppRouter />
	</div>
	</Router>
	</>
	);
};

export default App

const AppRouter = () => {
	return (
		
	<Routes>
		<Route path="/" index element={<LoginPage />} />
		<Route path="/about" element={<LoginPage />} />
	</Routes>
);
};