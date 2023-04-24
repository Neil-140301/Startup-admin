import { useLoaderData } from 'react-router-dom';
import { loadData } from '../lib/server/data';
import { Icon } from '@iconify/react';
import { shuffleArray } from '../lib/constants';
import { Link } from 'react-router-dom';

export async function startupLoader() {
	return await loadData();
}

const Startup = () => {
	/**
	 * @type {import('../../types/startup').StartupList}
	 */
	// @ts-ignore
	const data = useLoaderData();
	const all = shuffleArray(data.active.concat(data.review));

	return (
		<div className="h-full p-4">
			<div className="ml-10 mt-8 flex items-end gap-3">
				<span className="text-4xl font-bold text-sky-900">|</span>
				<h1 className="text-2xl font-medium">Startups</h1>
			</div>

			<div className="no-scroll my-10 flex h-96 justify-center overflow-auto pb-4">
				<table className="table w-11/12 rounded-lg text-center uppercase shadow">
					<thead>
						<tr>
							<th className="bg-slate-100 text-left">Name</th>
							<th className="bg-slate-100">Founded Year</th>
							<th className="bg-slate-100">Industry</th>
							<th className="bg-slate-100">Stage</th>
							<th className="bg-slate-100">Status</th>
							<th className="bg-slate-100" />
						</tr>
					</thead>

					<tbody>
						{all.map((startup) => (
							<tr key={startup.id}>
								<td className="text-left">{startup.name}</td>
								<td className="">{startup.foundedYear}</td>
								<td className="">{startup.industry}</td>
								<td className="">{startup.stage}</td>
								<td>
									<span
										className={`badge badge-sm font-semibold ${
											startup.status === 'active' ? 'badge-success badge-outline' : 'badge-primary'
										}`}
									>
										{startup.status}
									</span>
								</td>
								<td>
									<Link
										to={'manage/' + startup.id}
										className="btn-outline btn-accent btn-square btn"
									>
										<Icon className="text-2xl" icon="material-symbols:arrow-circle-right-rounded" />
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Startup;
