import './App.css';
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Nav></Nav>
		<main>
			<p>Hello Drew-Met!</p>
		</main>
		</Router>
	);
}

export default App;
