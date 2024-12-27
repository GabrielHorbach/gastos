import { Layout } from 'components/Layout';
import ProtectedRoute from 'components/ProtectedRoute';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/profile',
            element: <h1>Profile</h1>,
          },
          {
            path: '/settings',
            element: <h1>Settings</h1>,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
