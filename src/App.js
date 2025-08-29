import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Header from './components/MainPage/Header';

const App = () => {
	return (
		<Router>
			<Nav />
		<main>
			<Header />
		</main>
		</Router>
	);
}

export default App;
