const Home = () => {
	return (
		<div className="no-scroll grid h-full grid-cols-4 gap-10 overflow-auto p-8">
			{new Array(8).fill(0).map((_, index) => (
				<div key={index} className="card bg-white">
					<div className="card-body">
						<div className="h-8 w-8 rounded-full bg-gray-200" />
						<div className="h-3 rounded-full bg-gray-200" />
						<div className="h-3 w-11/12 rounded-full bg-gray-200" />
						<div className="h-3 w-3/4  rounded-full bg-gray-200" />
						<div className="my-3 h-40 rounded-lg bg-gray-200" />
						<div className="h-3 w-1/3 rounded-lg bg-gray-200" />
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
