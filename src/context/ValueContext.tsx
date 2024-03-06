import { useState, createContext, ReactNode } from 'react';

type ValueContextType =
	| [string, React.Dispatch<React.SetStateAction<string>>]
	| null;

interface ValueProviderProps {
	children: ReactNode;
}

export const ValueContext = createContext<ValueContextType>(null);

export const ValueProvider = ({ children }: ValueProviderProps) => {
	const [value, setValue] = useState('');

	return (
		<ValueContext.Provider value={[value, setValue]}>
			{children}
		</ValueContext.Provider>
	);
};
