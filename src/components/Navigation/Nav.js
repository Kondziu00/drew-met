import logo from '../../images/logo.png';
import './Nav.css';

const Nav = () => {
	return (
		<nav className='nav'>
			<a href='#header'>
				<img src={logo} alt='Logo' className='logo' />
			</a>

			<ul className='nav-list'>
				<li>
					<a href='#services'>
						<button className='nav-btn'>usługi</button>
					</a>
				</li>
				<li>
					<a href='#about'>
						<button className='nav-btn'>o nas</button>
					</a>
				</li>
				<li>
					<a href='#gallery'>
						<button className='nav-btn'>galeria</button>
					</a>
				</li>
				<li>
					<a href='#contact'>
						<button className='nav-btn'>kontakt</button>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
