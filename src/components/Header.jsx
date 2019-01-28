import React from "react";

const Header = props => {
  var subNav = props.all.menuLink.map((v, i) => {
    return (
      <li>
        <a href={v} className="drop-text">
          {props.all.menuText[i]}
        </a>
      </li>
    );
  });
  console.log(subNav);
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="header d-md-flex justify-content-between align-items-center py-3 px-lg-3 px-2">
            <div id="logo">
              <h1>
                <a className="" href="index.html">
                  <img src={props.all.logo} />
                </a>
              </h1>
            </div>

            <div className="nav_w3ls">
              <nav>
                <label htmlFor="drop" className="toggle">
                  Menu
                </label>
                <input type="checkbox" id="drop" />
                <ul className="menu">
                  <li>
                    <a href="index.html" className="active">
                      Home
                    </a>
                  </li>
                  <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                    <label htmlFor="drop-2" className="toggle toogle-2">
                      Pages{" "}
                      <span className="fa fa-angle-down" aria-hidden="true" />
                    </label>
                    <a href="#">
                      Pages{" "}
                      <span className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <input type="checkbox" id="drop-2" />
                    <ul>{subNav}</ul>
                  </li>
                  <li className="ml-lg-4 ml-md-3 mt-md-0 mt-2">
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
