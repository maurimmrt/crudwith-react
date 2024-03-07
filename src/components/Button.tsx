import { FC, MouseEventHandler, ReactNode } from 'react';

interface Button {
	className: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

export const Button: FC<Button> = ({ className, onClick, children }) => (
	<button
		type='button'
		className={`p-2 ms-3 ${className}`}
		onClick={onClick}
	>
		{children}
	</button>
);
