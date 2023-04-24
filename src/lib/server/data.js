import startup_data from '../../../kaiku_data.json';

/**
 *  Loads the data from the json file
 * @returns {Promise<import('../../../types/startup').StartupList>}
 */
export async function loadData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				review: startup_data.slice(0, 5).map((startup) => ({ ...startup, status: 'review' })),
				active: startup_data.slice(5).map((startup) => ({ ...startup, status: 'active' }))
			});
		}, 500);
	});
}
