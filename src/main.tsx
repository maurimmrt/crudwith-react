import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ValueProvider } from './context/ValueContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ValueProvider>
			<App />
		</ValueProvider>
	</StrictMode>
);
