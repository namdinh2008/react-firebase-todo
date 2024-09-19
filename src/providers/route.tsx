import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../compomnents/home-page';
import { LoginPage } from '../compomnents/login-page';
import { ProtectedRoute } from '../compomnents/protected-route';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
        ],
    },
]);

export const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};