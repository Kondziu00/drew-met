import './Services.css';
import {
	FaHome,
	FaTree,
	FaShieldAlt,
	FaCubes,
	FaTruck,
	FaRulerCombined,
} from 'react-icons/fa';

const Services = () => {
	return (
		<section className='services'>
			<h2 className='section-title'>nasze usługi</h2>
			<div className='underline'></div>

			<div className='services-list'>
				<div className='service-card'>
					<FaHome className='service-icon' />
					<h3>Więźba dachowa</h3>
					<p>Solidne konstrukcje dachowe</p>
				</div>
				<div className='service-card'>
					<FaTree className='service-icon' />
					<h3>Deski i łaty</h3>
					<p>Drewno budowlane w różnych wymiarach</p>
				</div>
				<div className='service-card'>
					<FaShieldAlt className='service-icon' />
					<h3>Impregnacja drewna</h3>
					<p>Ochrona przed wilgocią i szkodnikami</p>
				</div>
				<div className='service-card'>
					<FaTruck className='service-icon' />
					<h3>Transport drewna</h3>
					<p>Szybka i bezpieczna dostawa</p>
				</div>
				<div className='service-card'>
					<FaRulerCombined className='service-icon' />
					<h3>Cięcie na wymiar</h3>
					<p>Dopasowanie elementów wg projektu</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
