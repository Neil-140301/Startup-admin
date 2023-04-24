import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 px-8 shadow-sm">
			<Link to={'/app'} className="disabled text-xl font-semibold text-green-500">
				Kaiku
			</Link>
		</div>
	);
};

export default Navbar;
