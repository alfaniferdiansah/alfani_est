import { NavLink } from 'react-router-dom';
import './index.scss';

const Navigation = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="link-wrapper">
          <li className="link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="link">
            <NavLink to="/tambah">Add Karyawan</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;