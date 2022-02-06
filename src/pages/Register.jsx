import React, { Component } from 'react';
import Header from '../components/template/Header';
import SectionRegister from '../components/SectionRegister';
import { useState, useEffect } from 'react'

const Register =({setToken})=>{
  useEffect(() => {
      const script = document.createElement("script");
      script.src = "../assets/vendor/jquery/dist/jquery.min.js";
      script.async = false;
      document.body.appendChild(script);
      const script2 = document.createElement("script");
      script2.src = "../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js";
      script2.async = false;
      document.body.appendChild(script2);
      const script3 = document.createElement("script");
      script3.src = "../assets/vendor/js-cookie/js.cookie.js";
      script3.async = false;
      document.body.appendChild(script3);
      const script4 = document.createElement("script");
      script4.src = "../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"
      script4.async = false;
      document.body.appendChild(script4);
      const script5 = document.createElement("script");
      script5.src = "../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js";
      script5.async = false;
      document.body.appendChild(script5);
      const script6 = document.createElement("script");
      script6.src = "../assets/vendor/chart.js/dist/Chart.min.js"
      script6.async = false;
      document.body.appendChild(script6);
      const script7 = document.createElement("script");
      script7.src = "../assets/vendor/chart.js/dist/Chart.extension.js";
      script7.async = false;
      document.body.appendChild(script7);
      const script8 = document.createElement("script");
      script8.src = "../assets/js/argon.js?v=1.2.0";
      script8.async = false;
      document.body.appendChild(script8);
    }, []);

  return(
    <>
        <div class="bg-gradient-primary">
    
          <div class="wrapper ">
              <Header/>
              <SectionRegister setToken={setToken}/>
          </div>
        </div>
        </>
  )
}


    
  export default Register;