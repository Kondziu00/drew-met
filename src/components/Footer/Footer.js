import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='footer-left'>
					<img src={logo} alt='Logo' className='footer-logo' />
				</div>
				<div className='footer-center'>
					<ul>
						<li>📍Adres</li>
						<li>ul. Wyzwolenia 133</li>
						<li>42-480 Poręba</li>
					</ul>
					<ul>
						<li>📞Telefon</li>
						<li>123 123 123</li>
					</ul>
					<ul>
						<li>⏰Godziny otwarcia</li>
						<li>Pon-Pt 10-17</li>
						<li>Sobota: w wybrane dni</li>
					</ul>
				</div>
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
