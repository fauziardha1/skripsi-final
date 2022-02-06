import  { useState,useEffect } from 'react';
import SectionDashboard from '../components/SectionDashbord';
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import "../style/survey.css"
import { Link, useHistory ,useLocation} from 'react-router-dom'
import axios from "axios";
import { Doughnut, Pie } from "react-chartjs-2";
// import randomNumber from 'random-number';
import Title from '../components/responden/Title';
import MultipleChoice from '../components/responden/MultipleChoice';
import ShortAnswer from '../components/responden/ShortAnswer';
import Checkboxes from '../components/responden/Checkboxes';
import TextAnswer from '../components/responden/TextAnswer';
import CardKarakteristik from '../components/CardKarakteristik';
var randomColor = require('randomcolor');   
const CardSampling = ({setToken,token}) => {
    const [sampling,setSampling] = useState(0)
    const [data,setaData] = useState([])
    
    const [conten,setConten] = useState("")
    const [penyebaran, setPenyebaran] = useState(false);
    const handleClosePenyebaran = () => {setPenyebaran(false)};
    useEffect(() => {
        const fetchData = async ()=>{
            let dataGender = []
            let dataProdi = []
            let dataAngkatan = []
            let data={

            }
            gender.forEach(function(item) {
                if(item != "") {
                    dataGender.push(item);
                }
           });
           prodi.forEach(function(item) {
                if(item != "") {
                    dataProdi.push(item);
                
                }
            });
            angkatan.forEach(function(item) {
                if(item != "") {
                    dataAngkatan.push(item);
                    
                }
            });
            if(dataProdi.length != 0 ){
                data.studi = dataProdi
            }
            if(dataAngkatan.length != 0 ){
                data.angkatan = dataAngkatan
            }
            if(dataGender.length != 0 ){
                data.gender = dataGender
            }
            // alert(angkatan.length)
            axios.post("http://localhost:5000/mahasiswa/length",data).then(
                response=> {
                    setResponden(response.data.id)
                    // alert(response.data.id)
                    // console.log(data)   
                }
            )
        }
        fetchData();

    });
    useEffect(() => {
        if(sampling == 0 ){
            setConten(contentSampling)
        }else{
            setConten(contentSampling)
        }
    },[sampling]);
    const close =()=>{
        setSampling(0)
        handleClose()
    }
    const inputReponden=(val)=>{
        if(val == "1"){
            let perkalian = (3.841*responden*.5*(1-.5))
            let pembagian = ((.05*.05)*(responden-1)+3.841*.5*(1-0.5))
            let sum =  perkalian/pembagian
            
            setSampling(parseInt(sum))    
                    
        }else if(val == "2"){
            let perkalian = (3.841*responden*.5*(1-.5))
            let pembagian = ((.05*.05)*(responden-1)+3.841*.5*(1-0.5))
            let sum =  perkalian/pembagian
            
            setSampling(parseInt(sum))    
            
        }else if(val == "3"){
            let sum = responden/(1+responden*0.05*0.05)
            setSampling(parseInt(sum))
        }else{
            setSampling(0)
        }
    }
    const contentSampling=()=>{
        return(
            <div class="form-group">
                <div>
                    <h3 class="text-center">Jumlah Responden</h3>
                    <div class="text-center">
                        <h1 style={{display:"inline-block"}}>{sampling}</h1><small style={{display:"inline-block"}}>/Orang</small>
                    </div>
                </div>
            </div>
        )
    }
    const submitSampling = async (e) => {
        e.preventDefault();
        
        setPenyebaran(true)
        handleClose()
    }
    return(
        <>
        <div class="col-12">
            <div class="card">
                <div class=" card-body">
                    {/* <div class="row">  
                        <div class="col-sm-12 col-7 "> */}
                            <div class="form-group">
                                <div style={{textAlign:"center"}}> 
                                    <div style={{fontSize:"70px"}}> 
                                        <i class="fas fa-user-friends"></i>
                                    </div>
                                    <h1 >Jumlah Responden</h1>
                                    <h1 style={{display:"inline",fontSize:"63px"}}>{responden}</h1>
                                    <p style={{display:"inline"}}>/Orang</p> 
                                </div>
                            </div>
                        {/* </div>
                    </div> */}
                </div>
            </div>
            <div class="card">
                <div class=" card-body">
                    <div class="row">  
                        <div class="col-sm-12 col-7 ">
                            <div class="form-group">
                                <p style={{fontSize:"30px"}}class="form-control form_name">Metode Sampling</p>
                                <div class="input-group">
                                    <select /*onChange={(val)=>inputReponden(val.target.value)}*/ class="custom-select" id="inputGroupSelect04">
                                        <option value="0" selected>Choose...</option>
                                        <option value="1">Rumus Krecjie dan Morgan</option>
                                        <option value="2">Rumus Isaac dan Michael</option>
                                        <option value="3">Rumus Slovi</option>
                                    </select>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" ><i class="fas fa-info"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                        
    </>
    )
}

export default CardSampling;
  