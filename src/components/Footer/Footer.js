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
						<li>ul. Leśna 12</li>
						<li>42-400 Poręba</li>
					</ul>
					<ul>
						<li>📞Telefon</li>
						<li>123 123 123</li>
					</ul>
					{/* <ul>
						<li>✉️Email</li>
						<li>kontakt@drew-met.pl</li>
					</ul> */}
					<ul>
						<li>⏰Godziny otwarcia</li>
						<li>Pon-Pt 9-18</li>
						<li>Sobota: w wybrane dni</li>
					</ul>

					{/* <p>📍 Adres: ul. Leśna 12, 00-000 Miasto</p>
					<p>📞 Telefon: 123 456 789</p>
					<p>✉️ Email: kontakt@drew-met.pl</p>
					<p>
						⏰ W tych godzinach jesteśmy otwarci
						<p>Pon-Pt: 9-18</p>
						<p>Sobota: w wybrane dni </p>
					</p> */}
				</div>
			</div>

			<div className='footer-bottom'>
				<p>
					© {new Date().getFullYear()} DREW-MET. Wszystkie prawa zastrzeżone.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
