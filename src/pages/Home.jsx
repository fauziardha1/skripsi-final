import React, { Component } from 'react';
import Section from '../components/Section';
import Header from '../components/template/Header';


import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      version: React.version
    }
  }

  componentDidMount() {
    this.setState({ title: 'navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2' });
    const script = document.createElement("script");
    script.src = "../assets/js/core/jquery.min.js";
    script.async = true;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "../assets/js/core/popper.min.js";
    script2.async = true;
    document.body.appendChild(script2);
    const script3 = document.createElement("script");
    script3.src = "../assets/js/core/bootstrap.min.js" ;
    script3.async = true;
    document.body.appendChild(script3);
    const script4 = document.createElement("script");
    script4.src = "../assets/js/plugins/perfect-scrollbar.jquery.min.js";
    script4.async = true;
    document.body.appendChild(script4);
    const script5 = document.createElement("script");
    script5.src = "../assets/js/plugins/bootstrap-switch.js";
    script5.async = true;
    document.body.appendChild(script5);
    const script6 = document.createElement("script");
    script6.src = "../assets/js/plugins/nouislider.min.js";
    script6.async = true;
    document.body.appendChild(script6);
    const script7 = document.createElement("script");
    script7.src = "../assets/js/plugins/moment.min.js";
    script7.async = true;
    document.body.appendChild(script7);
    const script8 = document.createElement("script");
    script8.src = "../assets/js/plugins/datetimepicker.js";
    script8.async = true;
    document.body.appendChild(script8);
    const script9 = document.createElement("script");
    script9.src = "../assets/js/plugins/bootstrap-datepicker.min.js";
    script9.async = true;
    document.body.appendChild(script9);
    const script10 = document.createElement("script");
    script10.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE";
    script10.async = true;
    document.body.appendChild(script10);
    const script11 = document.createElement("script");
    script11.src = "../assets/js/argon-design-system.min.js?v=1.2.2";
    script11.async = true;
    document.body.appendChild(script11);
    const link = document.createElement("link");
    // document.body.classList.add("bg-default");
  }
  

  render() {

    return (
      <>
      <div class="bg-gradient-primary">
        <div class="wrapper">
      {/* <h1>tahu{this.state.version}</h1> */}
          <Header
          class={this.state.title}
          />
          <Section/>
        </div>
      </div>
      </>
    )
  }
}
  
  export default Home;