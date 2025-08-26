import react from 'react';
import './Nav.css';
import { BrowserRouter as Link } from 'react-router-dom';

function Nav() {
	return (
		<div className='nav-container'>
			<nav className='nav'>
				<ul className='nav-list'>
					<li>
						<Link>
							<button className='nav-btn'>
								<p>O nas</p>
							</button>
						</Link>
					</li>
					<li>
						<Link>
							<button className='nav-btn'>
								<p>Galeria</p>
							</button>
						</Link>
					</li>
					<li>
						<Link>
							<button className='nav-btn'>
								<p>Kontakt</p>
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
