import { Link } from "react-router-dom";
import "../styles/pagelayout.css";
const Logo = () => (
  <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 423.6 424">
    <g>
      <path
        style={{ fill: "#0000FF" }}
        d="M19,124.5C50.6,53.5,123.4,0.6,210.3,0c88.8-0.6,161.3,53.1,192.4,120.6
     c-29.4,50.8-58.7,101.6-88,152.3c-11.8-4.6-15.8-4.6-25.9,0.1c-22.2-38.4-44.3-76.8-66.7-115.5c6.7-4.8,10.3-11.6,10.3-19.8
     c0-6.4-2.6-12.3-7.4-16.9c-8.6-8.2-24.2-8.4-32.9,1c-5.1,5.6-7.1,11.9-6.3,19.2c0.8,7.4,5.2,12.7,11,17.2
     c-22.1,38.3-44.1,76.4-66.2,114.6c-8.7-4.6-17.1-4.5-25.6,0.6C76.3,223.7,47.7,174.2,19,124.5z"
      ></path>
      <path
        style={{ fill: "#0000FF" }}
        d="M15.1,134.4c28.2,48.8,56,97,83.7,145.1c-6.2,12.9-4.4,24.5,4.9,31.8c8.6,6.7,21.4,6.6,29.5-0.4
    c6.9-6,12.9-17.4,3.8-32.3c22.5-39,45.1-78.1,67.8-117.4c3.2,0,6.3,0,9.8,0c22.6,39.1,45.3,78.4,68.1,117.9
     c-4.1,5.8-5.3,12.4-3.8,19.3c1.1,5.2,4.2,9.4,8.3,12.8c8,6.6,20.6,6.7,28.7,0.3c7.9-6.2,13.2-17.9,5-32.4
     c28.6-49.5,57.3-99.2,86.1-149.1c37.4,88,10.9,193.1-69.1,252.3c-78.4,58.1-186.1,55.5-261.7-7.6C-0.9,310.2-15.8,209,15.1,134.4z"
      ></path>
    </g>
  </svg>
);

const PageLayout = ({
  breadcrumbs,
  fullwidth,
  children
}: {
  breadcrumbs: { link: string; label: string; active?: boolean }[];
  fullwidth?: boolean;
  children?: JSX.Element;
}) => (
  <div className="page">
    <div className="navigation desktop-only">
      <Link to="/" className="small-logo">
        <Logo />
      </Link>

      {breadcrumbs.map(({ link, label, active }) => (
        <div className={`article_nav_item ${active ? "active" : ""}`} key={`${link}-${label}`}>
          <Link to={link}>{label}</Link>
        </div>
      ))}
    </div>
    <div className={fullwidth ? "content-fullwidth" : "content-centered"}>{children}</div>
  </div>
);
export default PageLayout;
