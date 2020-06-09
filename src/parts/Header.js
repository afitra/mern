import React from "react";
import Button from "elements/Button/Button";
import BrandIcon from "parts/IconText";
import Fade from "react-reveal/Fade";
export default function Header(props) {
  let getNavLinkClass = (path) => {
    return (props.location.pathname = path ? " active" : " ");
  };
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon></BrandIcon>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    home
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    browse
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    stories
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
