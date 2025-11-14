import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Header from './components/MainPage/Header';
import Footer from './components/Footer/Footer';
import Services from './components/MainPage/Services';
import Contact from './components/MainPage/Contact';
import Gallery from './components/MainPage/Gallery';

const App = () => {
	return (
		<Router>
			<Nav />
		<main>
			<Header />
			<Services />
			<Gallery />
			<Contact/>
		</main>
			<Footer />
		</Router>
	);
};

export default App;
