import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import '../../assets/styles/sidebar.css';
import SideBarLinks from './sideBarLinks';
import { useContext, useState } from 'react';
import AuthVerify from '../../services/auth.verify';
import Logo from '../utils/Logo';
import { ThemeContext } from '../../contexts/ThemeContext';

function Sidebar({ activeNavId }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const currentUser = AuthService.getCurrentUser();
  const userRoles = normalizeRoles(currentUser?.roles);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const logout = () => {
    AuthService.logout_req();
    navigate('/');
    window.location.reload();
  };

  const rootClasses = [
    'side-bar',
    isSideBarOpen ? 'open' : '',
    isCollapsed ? 'collapsed' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <div className="side-bar-header">
        <div className="side-bar-brand">
          <Logo />
        </div>
        <button className="side-bar-toggle" onClick={() => setIsCollapsed((prev) => !prev)} aria-label="Toggle sidebar width">
          <i className={isCollapsed ? 'fa fa-angle-right' : 'fa fa-angle-left'} aria-hidden="true"></i>
        </button>
        <span onClick={() => setIsSideBarOpen(false)} className="mobile" aria-hidden="true">
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <span onClick={() => setIsSideBarOpen(true)} className="mobile menu" aria-hidden="true">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
      </div>

      <ul>
        {SideBarLinks.filter((link) => userRoles.has(link.role)).map((link) => {
          return (
            <Link key={link.id} className="nav-link" to={link.to} onClick={() => setIsSideBarOpen(false)}>
              <li className={activeNavId === link.id ? 'active' : ''}>
                <i className={link.icon} aria-hidden="true"></i>
                <span className="label">{link.name}</span>
              </li>
            </Link>
          );
        })}
        <li className="nav-link" onClick={logout}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <span className="label">Log out</span>
        </li>
      </ul>

      <div className="theme-switch">
        <button onClick={toggleTheme}>
          <i className={isDarkMode ? 'fa fa-moon-o' : 'fa fa-sun-o'} aria-hidden="true"></i>
          <span className="label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>
      <AuthVerify logOut={logout} />
    </div>
  );
}

export default Sidebar;

function normalizeRoles(roles) {
  const normalized = new Set();

  (roles || []).forEach((role) => {
    const raw = String(role).trim().toUpperCase();
    if (!raw) return;
    normalized.add(raw.startsWith('ROLE_') ? raw : `ROLE_${raw}`);
  });

  return normalized;
}
