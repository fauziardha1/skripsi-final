import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {

    constructor(props) {
        super(props);
      }
    
    
  render() {

    return (
        <>
            <nav id="navbar-main" class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="dashboard.html">
                        {/* <img src="./assets_admin/img/brand/white.png"/> */}
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                        <div class="navbar-collapse-header">
                        <div class="row">
                            <div class="col-6 collapse-brand">
                            <a href="dashboard.html">
                                <img src="./assets_admin/img/brand/blue.png"/>
                            </a>
                            </div>
                            <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                            </button>
                            </div>
                        </div>
                        </div>
                        
                        <hr class="d-lg-none" />
                        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li class="nav-item d-none d-lg-block ml-lg-4">
                        <Link to={"./"}>
                        
                            <a href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=ad_upgrade_pro" target="_blank" class="btn btn-neutral btn-icon">
                            <span class="nav-link-inner--text">Login</span>
                            </a>
                        </Link>
                        </li>
                        
                        <li class="nav-item d-none d-lg-block ml-lg-4">
                        <Link to={"./register"}>
                        
                            <a href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=ad_upgrade_pro" target="_blank" class="btn btn-neutral btn-icon">
                            <span class="nav-link-inner--text">Register</span>
                            </a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
  }
}


export default Header;