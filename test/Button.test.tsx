import React from 'react';

import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test } from 'vitest';
import { Button } from '../src/components/Button';

beforeEach(() => {
	render(<Button>text</Button>);
});

test('Should have a text in the component', () => {
	expect(screen.getByText('text')).toBeDefined();
});
