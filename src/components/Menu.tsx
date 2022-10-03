import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ABOUT_URL, ARTICLES_URL, CABINET_URL, COLLECTION_URL, MAP_URL, TEAM_URL } from "../utils/urls";

class MenuItem {
  label: string;
  route: string;
  constructor(label: string, route: string) {
    this.label = label;
    this.route = route;
  }

  isSelected(path: string): boolean {
    return path.startsWith(this.route);
  }
}
class ExpandableMenuItem extends MenuItem {
  subItems: MenuItem[] = [];
  constructor(label: string, route: string, subItems?: MenuItem[]) {
    super(label, route);

    if (subItems) {
      this.subItems = subItems;
    }
  }

  isSelected(path: string): boolean {
    return super.isSelected(path) || this.subItems.some((item) => item.isSelected(path));
  }
}

const Menu = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMenuCabinetOpen, setIsMenuCabinetOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  useEffect(() => setIsNavbarOpen(false), [location]);

  const mainMenu = [
    new MenuItem("Коллекция", COLLECTION_URL),
    new MenuItem("Карта", MAP_URL),
    new ExpandableMenuItem("Кабинет", CABINET_URL, [new MenuItem("Статьи", ARTICLES_URL)])
  ];

  const footerMenu = [new MenuItem("О проекте", ABOUT_URL), new MenuItem("О Команда", TEAM_URL)];

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
            {mainMenu.map((item, index) => (
              <div>
                <Link
                  key={index}
                  to={item.route}
                  className="menu_block_contaner"
                  onClick={() => {
                    setIsMenuCabinetOpen(false);
                  }}
                >
                  <div className={`menu-bullet ${item.isSelected(pathname) && isNavbarOpen ? "menu-bullet-active" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                      <circle r="50%" cx="50%" cy="50%" fill="#0000ff" stroke="#0000ff" strokeWidth="0"></circle>
                    </svg>
                  </div>
                  <li className="menu-list_item">{item.label}</li>
                </Link>
                {(item as ExpandableMenuItem).subItems?.length && (
                  <ul className="submenu">
                    {(item as ExpandableMenuItem).subItems?.map((subitem) => (
                      <li className="menu-list_item">
                        <Link to={subitem.route}>{subitem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="menu_container menu-bottom_container">
          <ul className="menu-bottom flex column content--start items--start">
            {footerMenu.map((item, index) => (
              <div>
                <Link
                  key={index}
                  to={item.route}
                  className="menu_block_contaner"
                  onClick={() => {
                    setIsMenuCabinetOpen(false);
                  }}
                >
                  <div className={`menu-bullet ${item.isSelected(pathname) && isNavbarOpen ? "menu-bullet-active" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                      <circle r="50%" cx="50%" cy="50%" fill="#ff0000" stroke="#ff0000" strokeWidth="0"></circle>
                    </svg>
                  </div>
                  <li className="menu-list_item">{item.label}</li>
                </Link>
                {(item as ExpandableMenuItem).subItems?.length && (
                  <ul className="submenu">
                    {(item as ExpandableMenuItem).subItems?.map((subitem) => (
                      <li className="menu-list_item">
                        <Link to={subitem.route}>{subitem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
