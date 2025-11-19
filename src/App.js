import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Header from './components/MainPage/Header';
import Footer from './components/Footer/Footer';
import Services from './components/MainPage/Services';
import Contact from './components/MainPage/Contact';
import Gallery from './components/MainPage/Gallery';
import AboutUs from './components/MainPage/AboutUs';

const App = () => {
	return (
		<Router>
			<Nav />
			<main>
				<Header />
				<Services />
				<AboutUs />
				<Gallery />
				<Contact />
			</main>
			<Footer />
		</Router>
	);
};

export default App;
