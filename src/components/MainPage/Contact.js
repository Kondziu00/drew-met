import './Contact.css';

const Contact = () => {
	return (
		<section id='contact' className='contact'>
			<h2 className='contact-section-title'>kontakt</h2>
			<div className='contact-info'>
				<div className='contact-details'>
					<div className='phone'>
						<div className='phone-icon'>📞</div>
						<p className='phone-info'>
							Zadzwoń Marcin Guzik
							<br />
							123 123 123
						</p>
					</div>
					<div className='address'>
						<div className='address-icon'>📍</div>
						<p className='address-info'>
							ul. Wyzwolenia 133 <br />
							Poręba 42-480
						</p>
					</div>
					<div className='hours'>
						<div className='hours-icon'>⏰</div>
						<div className='hours-text'>
							<p className='hours-info'>Godziny otwarcia</p>
							<span className='hours-details'>
								Poniedziałek - Piątek: 10:00 - 18:00
								<br />
								Sobota: w wybrane dni
							</span>
						</div>
					</div>
				</div>
				<div className='map-container'>
					<iframe
						className='map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5077.156005343265!2d19.364105144999794!3d50.486199400324054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471723ceff4da4c5%3A0x7df0b75bac8a9664!2sTartak%20DREW-MET%20Por%C4%99ba!5e0!3m2!1spl!2spl!4v1762279764626!5m2!1spl!2spl'
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</div>
			</div>
		</section>
	);
};

export default Contact;
