import { Outlet } from 'react-router-dom';
import Sidebar from '../lib/components/sidebar';
import Navbar from '../lib/components/navbar';

/**
 *
 * Root layout for the app
 */
const Root = () => {
	return (
		<div className="bg-slate-50">
			{/* navbar */}
			<Navbar />

			{/* page */}
			<Sidebar>
				<Outlet />
			</Sidebar>
		</div>
	);
};

export default Root;
