import React,  { useState,useEffect } from 'react';
import Section from '../components/Section';
import SectionDashboard from '../components/SectionDashbord';
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import HeaderSection from '../components/template/HeaderSection';
import Table from '../components/Table';
import "../style/survey.css"

import { Link,useHistory,Redirect } from 'react-router-dom'
import $ from "jquery"
import Header from '../components/template/Header';
import CardInfo from '../components/CardInfo';
import Title from '../components/Title';
import Close from "@material-ui/icons/Close";

import 'chart.js/auto';
import Crop from "@material-ui/icons/CropOriginal";
import Radio from '@material-ui/icons/RadioButtonChecked';
import ShortText from "@material-ui/icons/ShortText";
import Pharagraph from "@material-ui/icons/Subject";
import { CheckBox } from '@material-ui/icons';
import MultipleChoice from '../components/MultipleChoice';
import ShortAnswer from '../components/ShortAnswer';
import Checkboxes from '../components/Checkboxes';
import TextAnswer from '../components/TextAnswer';

import { MDBContainer } from "mdbreact";
import { Doughnut, Pie } from "react-chartjs-2";
import HeaderDashboard from '../components/template/HeaderDashboard';
  import { Button,Modal } from 'react-bootstrap'
  import axios from "axios";
  import "../style/card.scss"

// import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  
const List = ({setToken,token}) =>{
  const [idKuesioner,setIdKuesioner] = useState([]);
  const [kuesioner,setKuesioner] = useState([]);
  const [index,setIndex] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);};
  const handleShow = () => setShow(true);
  const [jawaban, setJawaban] = useState([])
  const [initCard,setInitCard]=useState(1)
  const [total,setTotal] = useState(0)
  
  let today = new Date()
  useEffect(() => {
    const getData = async () => {
      axios.get(`http://localhost:5000/jawaban/mahasiswa/${token}`)
      .then(
          response=> {
            
            var clean = response.data.message.filter((arr, index, self) =>
            index === self.findIndex((t) => (t.id_mahasiswa === arr.id_mahasiswa )));

              setJawaban(response.data.message)
              // for(let a =0;a< response.data.message.length;a++){
              //   // if(response.data.message[a].expired >= Date().toISOString().split('T')[0]){
              //     console.log("wow")
              //     setTotal(20)
              //   // }
              // }
          }
      ).catch(err => console.log(err)) 
      
      axios.get(`http://localhost:5000/penyebaran/${token}`).
        then(response => {
          console.log(response.data)
          setKuesioner(response.data)
          for(let a =0;a< response.data.length;a++){
            if(response.data[a].penyebaran != 0){
              setTotal(total+1)
            }
          }
        }
      );
    }
    getData()
  },[])
  const cardKuesioner = (init)=>{
    let boolean = true;
    let number = Math.floor(Math.random() * 4);
    let image = ''
    if(number == 0 ){
      image = "https://picsum.photos/1000/1000"
    }else if(number == 1){
      image = "https://picsum.photos/501/500"
    }else if(number == 2){
      image = "https://picsum.photos/500/501"
    }else{
      image = "https://picsum.photos/500/500"
    }
    for(let a = 0 ; a < jawaban.length; a++){
      if(jawaban[a].id_penyebaran == kuesioner[init].id_penyebaran ){
        boolean =false
      }
    }
    console.log(kuesioner)
    if(kuesioner[init].penyebaran != 0){
      
    if(boolean){
    return(
      <>
        <Link to={{
            pathname:'/form-kuesioner', 
            state: {
              id: kuesioner[init].id,
              id_penyebaran:kuesioner[init].id_penyebaran
            }
        }}>
          <article class="postcard light blue">
            <a class="postcard__img_link" href="#">
              <img class="postcard__img" src={image} alt="Image Title" />
            </a>
            <div class="postcard__text t-dark">
            <h5 class="card-title text-uppercase text-muted mb-0"><a href="#">{kuesioner[init].title}</a></h5>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                {kuesioner[init].deskripsi}  
              </div>
              <ul class="postcard__tagbox">
                {/* <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li> */}
                {/* <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li> */}
                <li class="tag__item play blue">
                  Kerjakan
                  {/* <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a> */}
                </li>
              </ul>
            </div>
          </article>
        </Link>
      </>
    )
    }
    }
  }
  return(
    <>
      <div id="wrapper">
          <SideBarAdmin 
          
          class1="nav-link "
          class2="nav-link active"
          class3="nav-link"
          token={token}
          />
          <div class="main-content" id="panel">
              <HeaderAdmin setToken={setToken} token={token}/>
              <SectionDashboard />
              <div class="header bg-primary pb-6">
                  <div class="container-fluid">
                      <div class="header-body">
                          {/* <HeaderDashboard
                          icon="fa fa-pencil-alt"
                          title="Kuesioner Teman Anda"
                          /> */}
                          <div class="row">
                            <div class="col-xl-12 col-md-6">
                              <div class="card card-stats">
                                {/* <!-- Card body --> */}
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col">
                                      <h5 class="card-title text-uppercase text-muted mb-0">Total Kuesioener</h5>
                                      <span class="h2 font-weight-bold mb-0">{total} Kuesioner</span>
                                    </div>
                                    <div class="col-auto">
                                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                      <i class="far fa-list-alt"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <p class="mt-3 mb-0 text-sm">
                        
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                  <nav aria-label="...">
                  
                  </nav>  
              </div>
              <div class="container-fluid mt--5 " >
                  
                {
                  kuesioner.map((que,i)=>(
                    <>
                      {cardKuesioner(i)}
                    </>
                  ))
                }    
              </div>
          </div> 
          
      </div>

      <Modal show={show}>
          <Modal.Header  onClick={handleClose}>
          <Modal.Title>{index[0]} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <> </>
              <p style={{whiteSpace:"pre-line"}}>{index[1]}</p>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          <Link to={{
                    pathname:'/form-kuesioner', 
                    state: {
                      id: index[2],
                      id_penyebaran:index[3]
                    }
                }}>
          
          <Button type="submit" value="Submit" variant="primary" onClick={handleClose} >
               Kerjakan
          </Button>
          </Link>
          
          </Modal.Footer>
      </Modal>
  </>
  )
}

export default List;
  