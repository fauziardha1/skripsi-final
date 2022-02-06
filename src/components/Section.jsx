import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Section extends Component {

  render() {

    return (
        <>
            <div class="main-content">
                <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                </div>
                <div class="container mt--8 pb-5">
                    <div class="row justify-content-center">
                        
                        <div class="col-lg-5 col-md-7 text-center">
                            <h1 class="lead text-white" style={{fontSize:"50px",fontFamily: 'Open Sans'}}> <i class="fas fa-poll-h" style={{color:"white"}}>  Kuesioner</i></h1>
                                <div class="btn-wrapper mt-6">
                                <Link to={"./Login"}>        
                                    <a href="https://www.creative-tim.com/product/argon-design-system" class="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
                                        <span class="btn-inner--icon"><i class="fas fa-poll-h"></i></span>
                                        <span class="btn-inner--text">Buat Kuesioner</span>
                                    </a>
                                </Link>  
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <footer class="py-5 bg-gradient-primary" id="footer-main">
                <div class="container">
                
                </div>
            </footer>
        </>
    )
  }
}


export default Section;