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
  
const Exam = ({setToken,token}) =>{
    const [mahasiswa, setMahasiswa]=useState([])
    const [optionAngkatan,setOptionAngkatan]=useState("")
    const [optionStudi,setOptionStudi]=useState("")
    const [optionProvinsi,setOptionProvinsi]=useState("")
    const [optionKelahiran,setOptionKelahiran]=useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => setShow(true);
    useEffect(() => {
        var data = []
        axios.get(`http://localhost:5000/mahasiswa/${token}`).then( (response) =>{
            setMahasiswa(response.data.message[0])
            setOptionAngkatan(response.data.message[0].angkatan)
            setOptionStudi(response.data.message[0].studi)
            setOptionProvinsi(response.data.message[0].provinsi)
            setOptionKelahiran(response.data.message[0].kelahiran)
         });
    },[])
  
    const save= async(e)=>{
        e.preventDefault();
        var array={
            angkatan:optionAngkatan,
            studi:optionStudi,
            provinsi:optionProvinsi,
            kelahiran:optionKelahiran
        }
        await axios.patch(`http://localhost:5000/mahasiswa/${token}`,array).then(
            result=>{
                if(result.data.message.length != 0){
                    setShow(true)
                }
            }
        )
        setShow(true)
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
                <div class="header pb-6 d-flex align-items-center" style={{minHeight: "500px",backgroundImage: "url(../assets/img/theme/campusPertamina.jpg)", backgroundSize: "cover", backgroundPosition: "center top"}}>
                {/* minHeight: "500px",backgroundImage: "url(../assets/img/theme/profile-cover.jpg)", backgroundSize: "cover", backgroundPosition: "center top" */}
    {/*  */}

                    <span class="mask bg-primary opacity-8"></span>
                    <div class="container-fluid d-flex align-items-center">
                        <div class="row">
                            <div class="col-lg-7 col-md-10">
                                <h1 class="display-2 text-white">Hello {mahasiswa.name}</h1>
                            </div>
                            <div class="col-lg-7 col-md-10">
                                <p class="text-white mt-0 mb-5">Ini adalah halaman profil. di halaman ini anda bisa mengedit biodata anda</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid mt--9">
                    <div class="row">
                        <div class="col-xl-12 order-xl-1">
                        <form onSubmit={ save }>
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h3 class="mb-0">Edit Biodata </h3>
                                        </div>
                                        <div class="col-4 text-right">
                                            <button type="submit" class="btn btn-sm btn-primary">Simpan</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    {/* <h1>tahu{defValue(1)}</h1> */}
                                    <h6 class="heading-small text-muted mb-4"></h6>
                                    <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-first-name">Angkatan</label>
                                                    <select class="form-control" value={optionAngkatan} onChange={(e)=>{
                                                        setOptionAngkatan(e.target.value)
                                                    }} id="sel1">
                                                        <option value={2018}>2018</option>
                                                        <option value={2019}>2019</option>
                                                        <option value={2020}>2020</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-first-name">Studi</label>
                                                    <select class="form-control"  value={optionStudi} onChange={(e)=>{
                                                        setOptionStudi(e.target.value)
                                                    }} id="sel1">
                                                        <option value={"teknik geologi"}>teknik geologi</option>
                                                        <option value={"teknik geofisika"}>teknik geofisika</option>
                                                        <option value={"teknik perminyakan"}>teknik perminyakan</option>
                                                        <option value={"teknik elektro"}>teknik elektro</option>
                                                        <option value={"teknik mesin"}>teknik mesin</option>
                                                        <option value={"teknik kimia"}>teknik kimia</option>
                                                        <option value={"teknik logistik"}>teknik logistik</option>
                                                        <option value={"menejemen"}>menejemen</option>
                                                        <option value={"ekonomi"}>ekonomi</option>
                                                        <option value={"teknik sipil"}>teknik sipil</option>
                                                        <option value={"teknik lingkungan"}>teknik lingkungan</option>
                                                        <option value={"ilmu komputer"}>ilmu komputer</option>
                                                        <option value={"kimia"}>kimia</option>
                                                        <option value={"hubungan internasional"}>hubungan internasional</option>
                                                        <option value={"komunikasi"}>komunikasi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-first-name">Provinsi</label>
                                                    <select class="form-control" defaultValue="SUMATERA UTARA" value={optionProvinsi} onChange={(e)=>{
                                                        setOptionProvinsi(e.target.value)
                                                    }} id="sel1">
                                                    <option value="ACEH">
                                                        ACEH
                                                    </option>
                                                    <option value="SUMATERA UTARA">
                                                        SUMATERA UTARA
                                                    </option>
                                                    <option value="SUMATERA BARAT">
                                                        SUMATERA BARAT
                                                    </option>
                                                    <option value="RIAU">
                                                        RIAU
                                                    </option>
                                                    <option value="JAMBI">
                                                        JAMBI
                                                    </option>
                                                    <option value="SUMATERA SELATAN">
                                                        SUMATERA SELATAN
                                                    </option>
                                                    <option value="BENGKULU">
                                                        BENGKULU
                                                    </option>
                                                    <option value="LAMPUNG">
                                                        LAMPUNG
                                                    </option>
                                                    <option value="KEPULAUAN BANGKA BELITUNG">
                                                        KEPULAUAN BANGKA BELITUNG
                                                    </option>
                                                    <option value="KEPULAUAN RIAU">
                                                        KEPULAUAN RIAU
                                                    </option>
                                                    <option value="DKI JAKARTA">
                                                        DKI JAKARTA
                                                    </option>
                                                    <option value="JAWA BARAT">
                                                        JAWA BARAT
                                                    </option>
                                                    <option value="JAWA TENGAH">
                                                        JAWA TENGAH
                                                    </option>
                                                    <option value="DI YOGYAKARTA">
                                                        DI YOGYAKARTA
                                                    </option>
                                                    <option value="JAWA TIMUR">
                                                        JAWA TIMUR
                                                    </option>
                                                    <option value="BANTEN">
                                                        BANTEN
                                                    </option>
                                                    <option value="BALI">
                                                        BALI
                                                    </option>
                                                    <option value="NUSA TENGGARA BARAT">
                                                        NUSA TENGGARA BARAT
                                                    </option>
                                                    <option value="NUSA TENGGARA TIMUR">
                                                        NUSA TENGGARA TIMUR
                                                    </option>
                                                    <option value="KALIMANTAN BARAT">
                                                        KALIMANTAN BARAT
                                                    </option>
                                                    <option value="KALIMANTAN TENGAH">
                                                        KALIMANTAN TENGAH
                                                    </option>
                                                    <option value="KALIMANTAN SELATAN">
                                                        KALIMANTAN SELATAN
                                                    </option>
                                                    <option value="KALIMANTAN TIMUR">
                                                        KALIMANTAN TIMUR
                                                    </option>
                                                    <option value="SULAWESI UTARA">
                                                        SULAWESI UTARA
                                                    </option>
                                                    <option value="SULAWESI SELATAN">
                                                        SULAWESI SELATAN
                                                    </option>
                                                    <option value="SULAWESI TENGGARA">
                                                        SULAWESI TENGGARA
                                                    </option>
                                                    <option value="GORONTALO">
                                                        GORONTALO
                                                    </option>
                                                    <option value="SULAWESI BARAT">
                                                        SULAWESI BARAT
                                                    </option>
                                                    <option value="MALUKU">
                                                        MALUKU
                                                    </option>
                                                    <option value="MALUKU UTARA">
                                                        MALUKU UTARA
                                                    </option>
                                                    <option value="PAPUA">
                                                        PAPUA
                                                    </option>
                                                    <option value="PAPUA BARAT">
                                                        PAPUA BARAT
                                                    </option>
                                                    <option value="SULAWESI TENGAH">
                                                        SULAWESI TENGAH
                                                    </option>
                                                    <option value="KALIMANTAN UTARA">
                                                        KALIMANTAN UTARA
                                                    </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label class="form-control-label" for="input-first-name">Kelahiran</label>
                                                    <select class="form-control" value={optionKelahiran} onChange={(e)=>{
                                                        setOptionKelahiran(e.target.value)
                                                    }} id="sel1">
                                                        <option value={"1999"}>1999</option>
                                                        <option value={"2000"}>2000</option>
                                                        <option value={"2001"}> 2001</option>
                                                        <option value={"2002"}>2002</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>



    {/*  */}
                </div>
                <div class="container-fluid mt--5 " >
                    
                    
                </div>
            </div> 
            
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
            
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button type="submit" value="Submit" variant="primary" >
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Exam;
  