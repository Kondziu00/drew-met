import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-content'>
					<img src={logo} alt='Logo' className='footer-logo' />
			</div>
			<div className='footer-bottom'>
				<p className='footer-text'>
					© {new Date().getFullYear()} DREW-MET. Wszystkie prawa zastrzeżone.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
