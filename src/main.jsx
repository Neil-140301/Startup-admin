import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ErrorPage from './error';
import Root from './pages';
import Home from './pages/home';
import Startup, { startupLoader } from './pages/startups';
import Manage, { manageLoader } from './pages/manage';
import { selectAction } from './lib/components/selectCard';
import Login, { loginAction } from './pages/login';

const router = createBrowserRouter([
	{
		path: '/app',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'startups/',
				element: <Startup />,
				loader: startupLoader
			},
			{
				path: 'startups/manage/',
				element: <Manage />,
				action: selectAction,
				loader: manageLoader
			},
			{
				path: 'startups/manage/:id',
				element: <Manage />,
				loader: manageLoader
			}
		]
	},
	{
		path: '/',
		element: <Login />,
		action: loginAction
	}
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
