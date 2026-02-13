import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Nav.css';

const Nav = () => {
	return (
		<nav className='nav'>
			<Link to='/#header'>
				<img src={logo} alt='Logo' className='logo' />
			</Link>

			<ul className='nav-list'>
				<li>
					<Link to='/#services' className='nav-btn'>
						usługi
					</Link>
				</li>
				<li>
					<Link to='/#about' className='nav-btn'>
						o nas
					</Link>
				</li>
				<li>
					<Link to='/#gallery' className='nav-btn'>
						galeria
					</Link>
				</li>
				<li>
					<Link to='/#contact' className='nav-btn'>
						kontakt
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
