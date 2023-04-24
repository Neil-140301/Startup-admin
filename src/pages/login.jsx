import { Form } from 'react-router-dom';
import Navbar from '../lib/components/navbar';
import { Icon } from '@iconify/react';
import { redirect } from 'react-router-dom';

export async function loginAction() {
	return redirect('/app');
}

const Login = () => {
	return (
		<div className="login-bg relative h-screen">
			<Navbar />
			<div className="absolute left-0 top-16 h-[calc(100vh-4rem)] w-full bg-black opacity-50 backdrop-blur" />

			<div className="flex h-[calc(100vh-4rem)] items-center justify-center ">
				<div className="card w-96 bg-base-100 shadow shadow-indigo-400">
					<div className="card-body items-center">
						<h2 className="card-title">Welcome 😄</h2>
						<Form method="post" className="my-5 w-full space-y-4">
							<button className="btn-outline btn w-full  gap-5 text-xl">
								<span>Go</span>
								<Icon className="text-2xl" icon="material-symbols:arrow-right-alt-rounded" />
							</button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
