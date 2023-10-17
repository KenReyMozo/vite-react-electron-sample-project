import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Layout from './components/layout/Layout'
import { MemoryRouter as Router } from 'react-router-dom'
import LoginPage from '@/pages/login-page/LoginPage';
import HomePage from '@/pages/home-page/HomePage';
import AuthLayout from '@/components/layout/AuthLayout';
import { Suspense, lazy } from 'react';
// import ErrorBoundary from './components/error-boundary/ErrorBoundary'

const LazyProfilePage = lazy(() => import('@/pages/profile-page/ProfilePage'))

const App = () => {
	return (
	<>
	<Router>
	<div className='bg-gray-800'>
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

		<Route path='/user' element={<AuthLayout/>}>
			<Route path="home" element={<HomePage />} />
			<Route path="profile" element={
			<Suspense>
				<LazyProfilePage/>
			</Suspense>
		} />
		</Route>
	</Routes>
);
};