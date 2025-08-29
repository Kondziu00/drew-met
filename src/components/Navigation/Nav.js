import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to="/">
        <img src={logo} alt="Logo" className='logo'/>
      </Link>
      <ul className='nav-list'>
        <li>
          <Link to="/about">
            <button className='nav-btn'>usługi</button>
          </Link>
        </li>
        <li>
          <Link to="/transport">
            <button className='nav-btn'>transport</button>
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <button className='nav-btn'>galeria</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button className='nav-btn'>kontakt</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
