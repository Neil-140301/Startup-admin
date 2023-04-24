import { Icon } from '@iconify/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { navItems } from '../constants';
import { Link } from 'react-router-dom';

/**
 *  Sidebar component
 *  @typedef {{children: JSX.Element}} SidebarProps
 *  @param {SidebarProps} props
 */
const Sidebar = ({ children }) => {
	return (
		<div className="drawer-mobile drawer h-[calc(100vh-4rem)]">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">{children}</div>
			<div className="drawer-side w-64 rounded-r-lg bg-sky-800 shadow">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="space-y-5 py-4 pl-6">
					{navItems.map((item) => (
						<NavItem key={item.label} {...item} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;

/**
 * @typedef {Object} NavItemProps
 * @property {string} label
 * @property {{name: string; path: string}[]} routes
 * @property {string} base
 * @param {NavItemProps} props
 * @returns
 */
function NavItem({ label, routes, base }) {
	const [checked, setChecked] = useState(false);

	return (
		<li
			className={`group collapse cursor-pointer rounded-l-md border-2 border-r-0 border-sky-600 text-slate-100 transition-all duration-200 hover:border-0 hover:bg-sky-400 hover:text-slate-700`}
		>
			<input
				type="checkbox"
				disabled={routes.length === 0}
				onChange={(e) => setChecked(e.currentTarget.checked)}
			/>
			<div className="collapse-title font-medium">
				<div className="flex items-center gap-2 text-lg">
					<Icon icon={'material-symbols:home-health-rounded'} className="text-2xl" />
					<span>{label}</span>
				</div>
			</div>
			<div
				className={`collapse-content ml-5 ${
					checked && 'border-t border-slate-100 group-hover:border-slate-700'
				}`}
			>
				<ul className="space-y-3 pt-3 text-slate-100 group-hover:text-slate-700">
					{routes.map((r) => (
						<li className="underline" key={r.name}>
							<Link to={base + r.path}>{r.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</li>
	);
}

NavItem.propTypes = {
	label: PropTypes.string.isRequired,
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
	base: PropTypes.string.isRequired
};

Sidebar.propTypes = {
	children: PropTypes.element.isRequired
};
