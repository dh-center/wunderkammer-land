import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMenuCabinetOpen, setIsMenuCabinetOpen] = useState(false);

  const location = useLocation();
  useEffect(() => setIsNavbarOpen(false), [location]);

  return (
    <nav className={`navbar ${isNavbarOpen ? "navbar--open" : ""}`}>
      <div className="navbar_logo_wrapper mobile-only flex column content--center">
        <Link to="/">
          <div className="navbar_logo_container flex row content--start items--center">
            <div className="navbar_logo_block">
              <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 423.6 424">
                <g>
                  <path
                    fill="#ffffff"
                    d="M19,124.5C50.6,53.5,123.4,0.6,210.3,0c88.8-0.6,161.3,53.1,192.4,120.6c-29.4,50.8-58.7,101.6-88,152.3
                                    c-11.8-4.6-15.8-4.6-25.9,0.1c-22.2-38.4-44.3-76.8-66.7-115.5c6.7-4.8,10.3-11.6,10.3-19.8c0-6.4-2.6-12.3-7.4-16.9
                                    c-8.6-8.2-24.2-8.4-32.9,1c-5.1,5.6-7.1,11.9-6.3,19.2c0.8,7.4,5.2,12.7,11,17.2c-22.1,38.3-44.1,76.4-66.2,114.6
                                    c-8.7-4.6-17.1-4.5-25.6,0.6C76.3,223.7,47.7,174.2,19,124.5z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M15.1,134.4c28.2,48.8,56,97,83.7,145.1c-6.2,12.9-4.4,24.5,4.9,31.8c8.6,6.7,21.4,6.6,29.5-0.4c6.9-6,12.9-17.4,3.8-32.3
                                    c22.5-39,45.1-78.1,67.8-117.4c3.2,0,6.3,0,9.8,0c22.6,39.1,45.3,78.4,68.1,117.9c-4.1,5.8-5.3,12.4-3.8,19.3
                                    c1.1,5.2,4.2,9.4,8.3,12.8c8,6.6,20.6,6.7,28.7,0.3c7.9-6.2,13.2-17.9,5-32.4c28.6-49.5,57.3-99.2,86.1-149.1
                                    c37.4,88,10.9,193.1-69.1,252.3c-78.4,58.1-186.1,55.5-261.7-7.6C-0.9,310.2-15.8,209,15.1,134.4z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="navbar_logo_block">Wunderkammer</div>
          </div>
        </Link>
      </div>

      <div
        className={`menu-toggler_container ${isNavbarOpen ? "navbar--open" : ""}`}
        onClick={() => setIsNavbarOpen((prev) => !prev)}
      >
        <div className={`toggler_bullet ${isNavbarOpen ? "navbar--open" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle r="7" cx="50" cy="26" fill="#ffffff" stroke="#0000ff" strokeWidth="0"></circle>
            <circle r="7" cx="50" cy="50" fill="#ffffff" stroke="#0000ff" strokeWidth="0"></circle>
            <circle r="7" cx="50" cy="74" fill="#ffffff" stroke="#0000ff" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>

      <div
        className={`menu flex column content--space-between mobile-content--start items--start ${
          isNavbarOpen ? "navbar--open" : ""
        }`}
      >
        <div className="menu_container menu-top_container">
          <ul className="menu-top flex column content--start items--start">
            <Link to="/collection" className="menu_block_contaner menu_collection_contaner">
              <div className="menu-bullet menu-bullet_collection">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%" fill="#0000ff" stroke="#0000ff" strokeWidth="0"></circle>
                </svg>
              </div>
              <li className="menu_collection">Коллекция</li>
            </Link>

            <Link to="/map" className="menu_block_contaner menu_map_contaner">
              <div className="menu-bullet menu-bullet_map">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%" fill="#0000ff" stroke="#0000ff" strokeWidth="0"></circle>
                </svg>
              </div>
              <li className="menu_map">Карта</li>
            </Link>

            <button
              className="menu_block_contaner menu_cabinet_contaner"
              onClick={(event) => {
                event.preventDefault();
                setIsMenuCabinetOpen((prev) => !prev);
              }}
            >
              <div className={`menu-bullet menu-bullet_cabinet ${isMenuCabinetOpen && isNavbarOpen ? "cabinet--open" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%" fill="#0000ff" stroke="#0000ff" strokeWidth="0"></circle>
                </svg>
              </div>
              <li className={`menu_cabinet ${isMenuCabinetOpen ? "cabinet--open" : ""}`}>Кабинет</li>
            </button>

            <ul className={`submenu submenu-cabinet hidden ${isMenuCabinetOpen ? "fade_show" : ""}`}>
              <li>
                <Link to="/articles">Статьи</Link>
              </li>
              <li>
                <Link to="/cabinet">Медиа</Link>
              </li>
              <li>
                <Link to="/cabinet">Словарь</Link>
              </li>
              <li>
                <Link to="/cabinet">Игровая&nbsp;зона</Link>
              </li>
              <li>
                <Link to="/cabinet">Библиотека</Link>
              </li>
            </ul>
          </ul>
        </div>

        <div className="menu_container menu-bottom_container">
          <ul className="menu-bottom flex column content--start items--start">
            <Link to="#" className="menu_block_contaner menu_soroka_contaner">
              <div className="menu-bullet menu-bullet_soroka">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%" fill="#ff0000" stroke="#ff0000" strokeWidth="0"></circle>
                </svg>
              </div>
              <li className="menu_soroka">Платформа&nbsp;«Сорока»</li>
            </Link>

            <Link to="/about" className="menu_block_contaner menu_about_contaner">
              <div className="menu-bullet menu-bullet_about">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%" fill="#ff0000" stroke="#ff0000" strokeWidth="0"></circle>
                </svg>
              </div>
              <li className="menu_about">О&nbsp;проекте</li>
            </Link>

            <Link to="/team" className="menu_block_contaner menu_team_contaner">
              <div className="menu-bullet menu-bullet_team">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%" fill="#ff0000" stroke="#ff0000" strokeWidth="0"></circle>
                </svg>
              </div>
              <li className="menu_team">Команда</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
