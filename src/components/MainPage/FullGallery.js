import React from 'react';
import './FullGallery.css';

import img1 from '../../images/about.jpg';
import img2 from '../../images/about.jpg';
import img3 from '../../images/about.jpg';
import img4 from '../../images/about.jpg';
import img5 from '../../images/about.jpg';
import img6 from '../../images/about.jpg';
import img7 from '../../images/about.jpg';
import img8 from '../../images/about.jpg';
import img9 from '../../images/about.jpg';
import img10 from '../../images/about.jpg';
import img11 from '../../images/about.jpg';
import img12 from '../../images/about.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const FullGallery = () => {
	return (
		<section className='full-gallery'>
			<h1 className='full-gallery__title'>
				<span className='first-letter'>p</span>ełna{' '}
				<span className='first-letter'>g</span>aleria!{' '}
				<span className='first-letter'>s</span>prawdź więcej naszych realizacji!
			</h1>

			<div className='full-gallery__container'>
				{images.map((src, index) => (
					<div className='full-gallery__item' key={index}>
						<img src={src} alt={`Galeria ${index + 1}`} />
					</div>
				))}
			</div>
		</section>
	);
};

export default FullGallery;
