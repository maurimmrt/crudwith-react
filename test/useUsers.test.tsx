import React from 'react';

import { act, renderHook } from '@testing-library/react';
import { expect, test } from 'vitest';
import { ValueProvider } from '../src/context/ValueContext';
import { useUsers } from '../src/hooks';

const wrapper = ({ children }) => <ValueProvider>{children}</ValueProvider>;
const { result } = renderHook(
	() => useUsers(['Leanne Graham', 'Ervin Howell', 'Clementine Bauch']),
	{ wrapper }
);

test('should have initial users', () => {
	expect(result.current.names).toEqual([
		'Leanne Graham',
		'Ervin Howell',
		'Clementine Bauch',
	]);
});

test('should create a new user', () => {
	act(() => result.current.create('John Doe'));
	expect(result.current.names).toEqual([
		'Leanne Graham',
		'Ervin Howell',
		'Clementine Bauch',
		'John Doe',
	]);
});

test('should updating a user', () => {
	act(() => result.current.updating(3));
	expect(result.current.names).toEqual([
		'Leanne Graham',
		'Ervin Howell',
		'Clementine Bauch',
		'John Doe',
	]);
});

test('should updated a user', () => {
	act(() => result.current.updated('John'));
	expect(result.current.names).toEqual([
		'Leanne Graham',
		'Ervin Howell',
		'Clementine Bauch',
		'John',
	]);
});
