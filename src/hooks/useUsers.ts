import { useContext, useEffect, useState } from 'react';
import { ValueContext } from '../context/ValueContext';

export const useUsers = (initialUsers: string[]) => {
	const [names, setNames] = useState(initialUsers);
	const [indexUser, setIndexUser] = useState(0);
	const [, setValue] = useContext(ValueContext)!;

	useEffect(() => {
		try {
			const storedUsers = window.localStorage.getItem('users');
			if (storedUsers) {
				setNames(JSON.parse(storedUsers));
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		try {
			window.localStorage.setItem('users', JSON.stringify(names));
		} catch (error) {
			console.error(error);
		}
	}, [names]);

	return {
		indexUser,
		names,
		create: (userName: string) => {
			if (!userName) return;

			setNames((prevUsers) => [...prevUsers, userName]);
			setValue('');
		},
		updating: (indexUser: number) => {
			setValue(names[indexUser]);
			setIndexUser(indexUser);
		},
		delete: (indexUser: number) => {
			setNames((prevUsers) =>
				prevUsers.filter((_value, index) => index !== indexUser)
			);
		},
		updated: (userName: string) => {
			if (!userName) return;

			setNames((prevUsers) =>
				prevUsers.map((user, index) => (index === indexUser ? userName : user))
			);

			setIndexUser(0);
			setValue('');
		},
	};
};
