import { useContext, useEffect, useState } from 'react';
import { ValueContext } from '../context/ValueContext';

export const useUsers = (initialUsers: string[]) => {
	const [users, setUsers] = useState(initialUsers);
	const [indexUser, setIndexUser] = useState(0);
	const [value, setValue] = useContext(ValueContext)!;

	useEffect(() => {
		try {
			const storedUsers = window.localStorage.getItem('users');
			if (storedUsers) {
				setUsers(JSON.parse(storedUsers));
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		try {
			window.localStorage.setItem('users', JSON.stringify(users));
		} catch (error) {
			console.error(error);
		}
	}, [users]);

	const createUser = () => {
		if (!value) return;

		setUsers((prevUsers) => [...prevUsers, value]);
		setValue('');
	};

	const updateUser = (indexUser: number) => {
		setValue(users[indexUser]);
		setIndexUser(indexUser);
	};

	const deleteUser = (indexUser: number) => {
		setUsers((prevUsers) =>
			prevUsers.filter((_value, index) => index !== indexUser)
		);
	};

	const updatedUser = () => {
		if (!value) return;

		setUsers((prevUsers) =>
			prevUsers.map((user, index) => (index === indexUser ? value : user))
		);

		setIndexUser(0);
		setValue('');
	};

	return {
		users,
		indexUser,
		createUser,
		updateUser,
		deleteUser,
		updatedUser,
	};
};
