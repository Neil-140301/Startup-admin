import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

/**
 * @typedef {Object} StartupProps
 * @property {import("../../../types/startup").Startup[]} data
 * @param {StartupProps} props
 * @returns
 */
const Startup = ({ data }) => {
	const {
		name,
		foundedYear,
		oneLiner,
		stage,
		industry,
		logoUrl,
		website,
		incorporatedLocation,
		targetRaise,
		targetEquity,
		productHighlights,
		members
	} = data[0];
	return (
		<div className="no-scroll max-h-full flex-1 overflow-auto pb-4 pt-8">
			<div className="mx-auto w-4/5 rounded bg-base-100 p-6 shadow">
				<div className="grid grid-cols-3 gap-6">
					<StartupField span="col-span-3">
						<div className="flex items-center gap-5">
							<img src={logoUrl} className="h-14 w-14 rounded" />
							<h1 className="text-2xl font-bold">{name}</h1>
							<a className="text-blue-500" href={website} target="_blank" rel="noreferrer">
								<Icon icon="tabler:external-link" className="text-2xl" />
							</a>
						</div>
					</StartupField>
					<StartupField label="Founded Year" value={foundedYear.toString()} />
					<StartupField label="Location" value={incorporatedLocation} />
					<StartupField label="Industry" value={industry} />
					<StartupField label="Stage" value={stage} />
					<StartupField label="Target Raise" value={formatter.format(targetRaise)} />
					<StartupField label="Target Equity" value={formatter.format(targetEquity)} />
					<StartupField label="About" span="col-span-3" value={oneLiner} />
					<StartupField label="Highlights" span="col-span-3">
						<div className="my-2 flex items-center gap-2">
							{productHighlights.map((highlight) => (
								<span key={highlight} className="badge badge-primary badge-outline">
									{highlight.toUpperCase()}
								</span>
							))}
						</div>
					</StartupField>
					<StartupField label="Members" span="col-span-3">
						<div className="my-2 flex items-center gap-10">
							{members.map(({ firstName, lastName, pictureUrl, role }) => (
								<div key={pictureUrl} className="flex flex-col items-center gap-2 text-sm">
									<img src={pictureUrl} className="h-12 w-12 rounded-full" />
									<div className="flex flex-col items-center font-semibold">
										<p>
											{firstName} {lastName}
										</p>
										<span className="text-slate-500">{role}</span>
									</div>
								</div>
							))}
						</div>
					</StartupField>
				</div>
			</div>
		</div>
	);
};

export default Startup;

/**
 * @param {{label?: string; value?:string; span?: string, badge?:string; children?: JSX.Element}} props
 * @returns
 */
function StartupField({ label, value, span = 'col-span-1', badge = '', children }) {
	return (
		<div className={`form-control gap-1 ${span}`}>
			{label && <span className="label-text font-medium text-slate-400">{label}</span>}
			{children || <p className={`text-xl ${badge}`}>{value}</p>}
		</div>
	);
}

Startup.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
};

StartupField.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	span: PropTypes.string,
	badge: PropTypes.string,
	children: PropTypes.element
};
