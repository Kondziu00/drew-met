import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import img1 from '../../images/about.jpg';
import img2 from '../../images/about.jpg';
import img3 from '../../images/about.jpg';

const images = [img1, img2, img3];

const Gallery = () => {
	const [currentIndex, setCurrentIndex] = useState(null);
	const [direction, setDirection] = useState('right');

	const closeModal = () => setCurrentIndex(null);

	const prevImg = (e) => {
		e.stopPropagation();
		setDirection('left');
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextImg = (e) => {
		e.stopPropagation();
		setDirection('right');
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === 'Escape') closeModal();
			if (e.key === 'ArrowLeft') prevImg(e);
			if (e.key === 'ArrowRight') nextImg(e);
		};

		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, []);

	return (
		<section id='gallery' className='gallery'>
			<h2 className='gallery__title'>galeria</h2>

			<div className='gallery__flex'>
				{images.map((src, index) => (
					<div
						className='gallery__item'
						key={index}
						onClick={() => setCurrentIndex(index)}>
						<img src={src} alt={`Galeria ${index + 1}`} />
					</div>
				))}
			</div>

			{currentIndex !== null && (
				<div className='modal' onClick={closeModal}>
					<button className='modal__arrow left' onClick={prevImg}>
						‹
					</button>

					<button className='modal__arrow right' onClick={nextImg}>
						›
					</button>

					<div className='modal__content' onClick={(e) => e.stopPropagation()}>
						<button className='modal__close' onClick={closeModal}>
							×
						</button>

						<img
							key={currentIndex}
							src={images[currentIndex]}
							alt=''
							className={`modal__image slide-${direction}`}
						/>
					</div>
				</div>
			)}
			<Link to='/full-gallery' className='gallery__more-button'>
				<p>Zobacz więcej!</p>
			</Link>
		</section>
	);
};

export default Gallery;
