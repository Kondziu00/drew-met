import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Header from './components/MainPage/Header';
import Footer from './components/Footer/Footer';
import Services from './components/MainPage/Services';
import Contact from './components/MainPage/Contact';
import Gallery from './components/MainPage/Gallery';
import AboutUs from './components/MainPage/AboutUs';
import FullGallery from './components/MainPage/FullGallery';

const Home = () => {
	return (
		<main>
			<Header />
			<Services />
			<AboutUs />
			<Gallery />
			<Contact />
		</main>
	);
};

const App = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/full-gallery' element={<FullGallery />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
