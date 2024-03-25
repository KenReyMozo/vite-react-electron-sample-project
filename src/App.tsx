import './App.css';
import { Route, Routes, MemoryRouter as Router } from 'react-router-dom';
import AuthLayout from '@/components/layout/AuthLayout';
import { Suspense, lazy } from 'react';

const LazyHomePage = lazy(() => import('@/pages/home-page/HomePage'));
const LazyLoginPage = lazy(() => import('@/pages/login-page/LoginPage'));
const LazyProfilePage = lazy(() => import('@/pages/profile-page/ProfilePage'));

const App = () => {
  return (
    <Router>
      <div className="bg-gray-800">
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        }
      />

      <Route path="/user" element={<AuthLayout />}>
        <Route
          path="home"
          element={
            <Suspense>
              <LazyHomePage />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <Suspense>
              <LazyProfilePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
