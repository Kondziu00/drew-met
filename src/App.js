import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Header from './components/MainPage/Header';
import Footer from './components/Footer/Footer';
import Services from './components/MainPage/Services';
import Contact from './components/MainPage/Contact';
import Gallery from './components/MainPage/Gallery';
import AboutUs from './components/MainPage/AboutUs';
import FullGallery from './components/MainPage/FullGallery';

const ScrollToHash = () => {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [hash]);

	return null;
};

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
			<ScrollToHash />
			<Nav />
			<main className='main-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/full-gallery' element={<FullGallery />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
