import './AboutUs.css';
import about from '../../images/about.jpg';

const AboutUs = () => {
	return (
		<section id='about' className='AboutUs'>
			<div className='upper-about'>
				<div className='about-image'>
					<img src={about} alt='Zdjęcie dostawy drewna' className='about' />
				</div>
				<div className='aboutusinfo'>
					<h2 className='aboutustitle'>Poznaj Nas</h2>
					<h3 className='aboutustext'>
						<p>
							<span>
								Tradycja, jakość i solidność w obróbce drewna od wielu lat.
							</span>
							<br />
							<span>
								Drew-Met to rodzinna firma, która od wielu lat dostarcza drewno najwyższej jakości wraz z realizacją większych projektów.
							</span>
							<br />
							<br />
							<span>
								Nasza pasja do drewna i zaangażowanie w każdy projekt sprawiają, że jesteśmy zaufanym partnerem dla naszych klientów.
							</span>
							<br />
							<br />
							<br />
							<span>
								Zapraszamy do współpracy!
							</span>
						</p>
					</h3>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
