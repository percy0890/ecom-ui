import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footer.scss';

export default function Footer(props) {
  const [activeItemPath, setActiveItemPath] = React.useState();

  return (
    <ul className="footer">
      {props.menuItems.filter(menuItem => menuItem.sidebar).map(menuItem => {
        const { name, icon, iconActive, path } = menuItem;
        return (
          <NavLink
            exact
            to={path}
            activeClassName="active"
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              setActiveItemPath(location.pathname);
              return true;
            }}
            key={name}
          >
            <li className="footer-item">
              <img
                src={activeItemPath === path ? iconActive : icon}
                alt={name}
                className="menu-icon"
              />
              <div className="menu-text">{name}</div>
            </li>
          </NavLink>
        );
      })}
    </ul>
  );
}

Footer.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
