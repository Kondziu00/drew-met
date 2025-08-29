import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Header from './components/MainPage/Header';
import Footer from './components/Footer/Footer';


const App = () => {
	return (
		<Router>
			<Nav />
		<main>
			<Header />
		</main>
			<Footer />
		</Router>
	);
};

export default App;
