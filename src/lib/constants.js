export const navItems = [
	{
		label: 'Home',
		base: '/app',
		routes: []
	},
	{
		label: 'Startups',
		base: '/app/startups',
		routes: [
			{
				name: 'View',
				path: '/'
			},
			{
				name: 'Manage',
				path: '/manage'
			}
		]
	}
];

/**
 *
 * @param {import("../../types/startup").Startup[]} array
 */
export function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}
