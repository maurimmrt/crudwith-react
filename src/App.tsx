import { useContext } from 'react';
import { Button, UserRow } from './components/';
import { AcceptIcon, CreateIcon } from './components/icons/';
import { ValueContext } from './context/ValueContext';
import { useUsers } from './hooks/';

export default function App() {
	const [value, setValue] = useContext(ValueContext)!;

	const users = useUsers(['Leanne Graham', 'Ervin Howell', 'Clementine Bauch']);

	return (
		<main className='container my-auto mx-3 sm:m-auto'>
			<h1 className='text-4xl font-bold text-center mb-4'>CRUD with React</h1>
			<section className='flex mb-5'>
				<input
					type='text'
					className='px-3 py-2 my-auto w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600'
					placeholder='Write something...'
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				{users.indexUser !== 0 ? (
					<Button
						className='bg-green-500 duration-150 text-white rounded-full active:bg-green-600'
						onClick={() => users.updated(value)}
					>
						<AcceptIcon />
					</Button>
				) : (
					<Button
						className='bg-indigo-500 duration-150 text-white rounded-full active:bg-indigo-600'
						onClick={() => users.create(value)}
					>
						<CreateIcon />
					</Button>
				)}
			</section>
			<section className='h-80 overflow-auto'>
				<ul>
					{users.names.map((user, id) => (
						<UserRow
							key={id}
							user={user}
							onDelete={() => users.delete(id)}
							onUpdate={() => users.updating(id)}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}
