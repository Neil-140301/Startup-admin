import { Icon } from '@iconify/react';
import { redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';

// @ts-ignore
export async function selectAction({ request }) {
	const formData = await request.formData();
	const id = formData.get('startup-id');
	if (!id) return null;
	return redirect(id);
}

/**
 * @typedef {Object} ChooseStartupProps
 * @property {import("../../../types/startup").Startup[]} data
 * @param {ChooseStartupProps} props
 * @returns
 */
const ChooseStartup = ({ data }) => {
	const submit = useSubmit();
	return (
		<div className="card w-2/5 bg-base-100 shadow-sm shadow-indigo-400">
			<div className="card-body">
				<h2 className="card-title">Chooose a startup</h2>
				<Form method="post" className="my-5 w-full space-y-4">
					<select name="startup-id" className="select-bordered select w-full focus:outline-none">
						<option disabled selected>
							None
						</option>
						{data.map((startup) => (
							<option className="flex space-x-3" key={startup.id} value={startup.id}>
								{startup.name} | {startup.status?.toUpperCase()}
							</option>
						))}
					</select>
					<button
						onClick={(e) => submit(e.currentTarget.form, { replace: true })}
						className="btn-outline btn w-full  gap-5 text-xl"
					>
						<span>Go</span>
						<Icon className="text-2xl" icon="material-symbols:arrow-right-alt-rounded" />
					</button>
				</Form>
			</div>
		</div>
	);
};

export default ChooseStartup;

ChooseStartup.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
};
