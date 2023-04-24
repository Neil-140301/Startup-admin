import { useLoaderData } from 'react-router-dom';
import { loadData } from '../lib/server/data';
import ChooseStartup from '../lib/components/selectCard';
import Startup from '../lib/components/startup';
import { Form } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';

/**
 *
 * @param {{params: {id?: string}}} loaderParams
 * @returns
 */
export async function manageLoader({ params }) {
	const result = await loadData();
	const all = result.active.concat(result.review);

	if (params.id) {
		return { data: [all.find((startup) => startup.id === params.id)], id: params.id };
	}

	return { data: all };
}

const Manage = () => {
	/**
	 * @type {import('../../types/startup').ManageLoaderResult}
	 */
	// @ts-ignore
	const data = useLoaderData();
	const [status, setStatus] = useState(data.data[0].status);

	return (
		<div className={`flex h-full p-4 ${data.id ? 'items-start gap-4' : 'flex-col'}`}>
			<div className="ml-10 mt-8 ">
				<div className="flex items-end gap-3">
					<span className="text-4xl font-bold text-sky-900">|</span>
					<h1 className="text-2xl font-medium">Manage</h1>
				</div>

				{data.id && (
					<div className="my-8 px-3">
						<div className="flex items-center gap-2">
							<span className="label-text font-medium text-slate-400">Status :</span>
							<span className="badge-primary badge">{status?.toUpperCase()}</span>
						</div>

						<div className="divider" />

						{status === 'review' && (
							<Form className="flex flex-col gap-3">
								<button
									onClick={() => setStatus('Active')}
									className="btn-success btn-sm btn gap-1"
								>
									<span>Accept</span>
									<Icon className="text-xl" icon="material-symbols:check-small-rounded" />
								</button>
								<button
									onClick={() => setStatus('Rejected')}
									className="btn-error btn-sm btn gap-1"
								>
									<span>Reject</span>
									<Icon className="text-xl" icon="material-symbols:cancel-outline-rounded" />
								</button>
							</Form>
						)}
					</div>
				)}
			</div>

			{data.id ? (
				<Startup data={data.data} />
			) : (
				<div className="flex h-96 items-center justify-center">
					<ChooseStartup data={data.data} />
				</div>
			)}
		</div>
	);
};

export default Manage;
