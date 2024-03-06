export function Button({ className, onClick, children }) {
	return (
		<button
			type='button'
			className={`p-2 ms-3 ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
