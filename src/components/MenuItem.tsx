import { Link } from "react-router-dom";
import { ExpandableMenuElement, MenuElement } from "./Menu";

type MenuItemProps = {
  item: MenuElement | ExpandableMenuElement;
  setIsMenuCabinetOpen: (value: boolean) => void;
  pathname: string;
  isNavbarOpen: boolean;
  menuType: string;
};

const MenuItem = ({ item, setIsMenuCabinetOpen, pathname, isNavbarOpen, menuType }: MenuItemProps) => {
  return (
    <>
      <Link
        to={item.route}
        className="menu_block_contaner"
        onClick={() => {
          setIsMenuCabinetOpen(false);
        }}
      >
        <div className={`menu-bullet ${item.isSelected(pathname) && isNavbarOpen ? "menu-bullet-active" : ""}`}>
          {menuType === "main" ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <circle r="50%" cx="50%" cy="50%" fill="#0000ff" stroke="#0000ff" strokeWidth="0"></circle>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <circle r="50%" cx="50%" cy="50%" fill="#ff0000" stroke="#ff0000" strokeWidth="0"></circle>
            </svg>
          )}
        </div>
        <li className="menu-list_item">{item.label}</li>
      </Link>
      {(item as ExpandableMenuElement).subElements?.length && (
        <ul className="submenu">
          {(item as ExpandableMenuElement).subElements?.map((subElement, index) => (
            <li key={index} className="menu-list_item">
              <Link to={subElement.route}>{subElement.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuItem;
