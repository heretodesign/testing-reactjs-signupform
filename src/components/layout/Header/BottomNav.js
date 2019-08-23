import React, { Component } from 'react'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const BottomNav = () => {

  return (
      <div className="container topNav">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://www.bjak.my/">
                  <span className="company" id="companyName">HeretoDesign Sdn Bhd</span>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end has-text-weight-bold">

            </div>

            <div className="navbar-end">
              <div className="navbar-item has-text-weight-bold">
                <div className="buttons">
                  <a className="button is-info">
                    <strong>GET STARTED</strong>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </nav>
      </div>
  );
}

export default BottomNav;
