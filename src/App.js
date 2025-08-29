import './App.css';
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<Router>
			<Nav />
			<main>
				<p>Hello Drew-Met!</p>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
