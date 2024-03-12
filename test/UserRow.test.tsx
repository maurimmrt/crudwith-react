import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';
import { UserRow } from '../src/components/UserRow';

const onDelete = vi.fn();
const onUpdate = vi.fn();

beforeEach(() => {
	render(
		<UserRow
			user='Test User'
			onDelete={onDelete}
			onUpdate={onUpdate}
		/>
	);
});

test('Should have a user name', () => {
	const text = screen.getByText('Test User');
	expect(text).toBeDefined();
});

test('Should call onDelete button', () => {
	fireEvent.click(screen.getAllByRole('button')[0]);
	expect(onUpdate).toHaveBeenCalled();
});

test('Should call onUpdate button', () => {
	fireEvent.click(screen.getAllByRole('button')[1]);
	expect(onDelete).toHaveBeenCalled();
});
