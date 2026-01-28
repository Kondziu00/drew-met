import './Gallery.css';

import img1 from '../../images/about.jpg';
import img2 from '../../images/about.jpg';
import img3 from '../../images/about.jpg';

const images = [img1, img2, img3];

const Gallery = () => {
	return (
		<section id='gallery' className='gallery'>
			<h2 className='gallery__title'>Galeria</h2>

			<div className='gallery__flex'>
				{images.map((src, index) => (
					<div className='gallery__item' key={index}>
						<img src={src} alt={`Galeria ${index + 1}`} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Gallery;
