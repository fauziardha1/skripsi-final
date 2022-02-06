// CardKarakteristik

import  { useState,useEffect } from 'react';
import "../style/survey.css"
import axios from "axios";
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ModalPenyebaran from './ModalPenyebaran'

const ModalSampling = ({}) => {  
    
    const [responden,setResponden] = useState(0);
    const [angkatan,setAngkatan] =useState(new Array(3).fill(""));
    const [gender,setGender] = useState(new Array(2).fill(""));    
    const [prodi,setProdi] =useState(new Array(15).fill(""));
    const [kelahiran,setKelahiran] =useState(new Array(7).fill(""));
    const [provinsi,setProvinsi] =useState(new Array(34).fill(""));
   const [checkedGender,setCheckedGender] = useState(new Array(2).fill(false));    
    const [checkedProdi,setCheckedProdi] =useState(new Array(15).fill(false));
    const [checkedAngkatan,setCheckedAngkatan] =useState(new Array(3).fill(false));
    const [checkedKelahiran,setCheckedKelahiran] =useState(new Array(7).fill(false));
    const [checkedProvinsi,setCheckedProvinsi] =useState(new Array(34).fill(false));
    useEffect(() => {
        const fetchData = async ()=>{
            let dataGender = []
            let dataProdi = []
            let dataAngkatan = []
            let dataKelahiran =[]
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
            kelahiran.forEach(function(item) {
                if(item != "") {
                    dataKelahiran.push(item);
                    
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
            if(dataKelahiran.length != 0){
                data.kelahiran = dataKelahiran
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

    }, [gender]);
    useEffect(() => {
        const fetchData = async ()=>{
            let dataGender = []
            let dataProdi = []
            let dataAngkatan = []
            let dataKelahiran =[]
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
            kelahiran.forEach(function(item) {
                if(item != "") {
                    dataKelahiran.push(item);
                    
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
            if(dataKelahiran.length != 0){
                data.kelahiran = dataKelahiran
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
        // alert(angkatan)

    }, []);
    useEffect(() => {
        const fetchData = async ()=>{
            let dataGender = []
            let dataProdi = []
            let dataAngkatan = []
            let dataKelahiran =[]
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
            kelahiran.forEach(function(item) {
                if(item != "") {
                    dataKelahiran.push(item);
                    
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
            if(dataKelahiran.length != 0){
                data.kelahiran = dataKelahiran
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
        // alert(angkatan)

    }, [angkatan]);
    useEffect(() => {
        const fetchData = async ()=>{
            let dataGender = []
            let dataProdi = []
            let dataAngkatan = []
            let dataKelahiran =[]
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
            kelahiran.forEach(function(item) {
                if(item != "") {
                    dataKelahiran.push(item);
                    
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
            if(dataKelahiran.length != 0){
                data.kelahiran = dataKelahiran
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
        // alert(angkatan)

    }, [kelahiran]);
    useEffect(() => {
        const fetchData = async ()=>{
            let dataGender = []
            let dataProdi = []
            let dataAngkatan = []
            let dataKelahiran =[]
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
            kelahiran.forEach(function(item) {
                if(item != "") {
                    dataKelahiran.push(item);
                    
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
            if(dataKelahiran.length != 0){
                data.kelahiran = dataKelahiran
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

    }, [prodi]);
    const handleKelahiran = (index) =>{
        let arrProd=[
            "1999","2000",
            "2001","2002","2003","2004"
        ];
        let iniProd =[
            "","","","","",
            "",""
        ]
        const updatedcheckedKelahiran = checkedKelahiran.map((item, position) =>
            index === position ? !item : item
        );
        setCheckedKelahiran(updatedcheckedKelahiran)
        if(updatedcheckedKelahiran[index]){
            iniProd = kelahiran;
            iniProd[index] = arrProd[index]
        }else{
            iniProd = kelahiran;
            iniProd[index]=""
        }
        setKelahiran([iniProd[0],iniProd[1],iniProd[2],iniProd[3],iniProd[4],iniProd[5]])

        
    }
    const handleGender = (index) => {
        const updatedCheckedState = checkedGender.map((item, position) =>
            index === position ? !item : item
        );
        setCheckedGender(updatedCheckedState);
        const data = ["",""];
        if(index == 0){
            if(!checkedGender[0]){
                data[0]="P"
                data[1]=gender[1]
            }else{
                data[0]=""
                data[1]=gender[1]
            }
        }else{
            if(!checkedGender[1]){
                data[1]="W"
                data[0]=gender[0]
                
            }else{
                data[1]=""
                data[0]=gender[0]
            }
        }
        setGender(data)
        
    };
    const handleProdi = (index) =>{
        let arrProd=[
            "teknik geologi","teknik geofisika","teknik perminyakan",
            "teknik elektro","teknik mesin","teknik kimia",
            "teknik logistik","menejemen","ekonomi",
            "teknik sipil","teknik lingkungan","ilmu komputer",
            "Kimia","hubungan internasional","komunikasi"
        ];
        let iniProd =[
            "","","","","",
            "","","","","",
            "","","","",""
        ]
        const updatedcheckedProdi = checkedProdi.map((item, position) =>
            index === position ? !item : item
        );
        setCheckedProdi(updatedcheckedProdi)
        if(updatedcheckedProdi[index]){
            iniProd = prodi;
            iniProd[index] = arrProd[index]
        }else{
            iniProd = prodi;
            iniProd[index]=""
        }
        setProdi([iniProd[0],iniProd[1],iniProd[2],iniProd[3],iniProd[4],iniProd[5],iniProd[6],iniProd[7],iniProd[8],iniProd[9],iniProd[10],iniProd[11],iniProd[12],iniProd[13],iniProd[14]])

        
    }
    
    const handleAngkatan = (index) =>{
        let arrAngkatan=[
            "2018","2019","2020"
        ];
        let iniAngkatan =[
            "","",""
        ]
        const updatedcheckedAngkatan = checkedAngkatan.map((item, position) =>
            index === position ? !item : item
        );
        setCheckedAngkatan(updatedcheckedAngkatan)
        if(updatedcheckedAngkatan[index]){
            iniAngkatan = angkatan;
            iniAngkatan[index] = arrAngkatan[index]
        }else{
            iniAngkatan = angkatan;
            iniAngkatan[index]=""
        }
        setAngkatan([iniAngkatan[0],iniAngkatan[1],iniAngkatan[2]])
        
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
                                    <h1 style={{display:"inline",fontSize:"63px"}}>{kelahiran[5]}{responden}</h1>
                                    <p style={{display:"inline"}}>/Orang</p> 
                                </div>
                            </div>
                        {/* </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div class="col-12">
                <div class="card">
                    <div class=" card-body">
                        {/* <div class="row">  
                            <div class="col-sm-12 col-7 "> */}
                                <div class="form-group">
                                <p style={{fontSize:"30px"}}class="form-control form_name">Karakteristik Responden</p>
                                </div>
                            {/* </div>
                        </div> */}
                    </div>
                </div>
                
            </div>
            <div class="col-6">
                <div class="card">
                    <div class=" card-body">
                        <div class="row">  
                            <div class="col-sm-12 col-7 ">
                                <div class="form-group">
                                <p style={{fontSize:"30px"}}class="form-control form_name">Jenis Kelamin</p>
                                </div>
                            </div>
                            <div class="col-sm-12 ">
                                <div class="form-group">
                                    {/* <textarea required defaultValue={title.deskripsi} class="form_name form-control" disabled  style={{whiteSpace:"pre-line",background:"white",textareaHeight: "38"}} id="exampleFormControlTextarea1"></textarea> */}
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedGender[0]}
                                                                onChange={() => handleGender(0)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                Pria
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedGender[1]}
                                                                onChange={() => handleGender(1)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                Wanita
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class=" card-body">
                        <div class="row">  
                            <div class="col-sm-12 col-7 ">
                                <div class="form-group">
                                <p style={{fontSize:"30px"}}class="form-control form_name">Angkatan</p>
                                </div>
                            </div>
                            <div class="col-sm-12 ">
                                <div class="form-group">
                                    {/* <textarea required defaultValue={title.deskripsi} class="form_name form-control" disabled  style={{whiteSpace:"pre-line",background:"white",textareaHeight: "38"}} id="exampleFormControlTextarea1"></textarea> */}
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedAngkatan[0]}
                                                                onChange={() => handleAngkatan(0)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                2018
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedAngkatan[1]}
                                                                onChange={() => handleAngkatan(1)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                2019
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedAngkatan[2]}
                                                                onChange={() => handleAngkatan(2)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                2020
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" show={false}>
                    <div class=" card-body">
                        <div class="row">  
                            <div class="col-sm-12 ">
                                <div class="form-group">
                                <p style={{fontSize:"30px"}}class="form-control form_name">Studi</p>
                                </div>
                            </div>
                            <div class="col-sm-12 ">
                                <div class="form-group">
                                    {/* <textarea required defaultValue={title.deskripsi} class="form_name form-control" disabled  style={{whiteSpace:"pre-line",background:"white",textareaHeight: "38"}} id="exampleFormControlTextarea1"></textarea> */}
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[0]}
                                                                onChange={() => handleProdi(0)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                aceh
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[1]}
                                                                onChange={() => handleProdi(1)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            sumatra utara
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[2]}
                                                                onChange={() => handleProdi(2)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            sumatra utara
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[3]}
                                                                onChange={() => handleProdi(3)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            riau
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[4]}
                                                                onChange={() => handleProdi(4)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                kepulauan riau
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[5]}
                                                                onChange={() => handleProdi(5)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            jambi
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[6]}
                                                                onChange={() => handleProdi(6)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            sumatra selatan
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[7]}
                                                                onChange={() => handleProdi(7)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            kepulauan bangka belitung
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[8]}
                                                                onChange={() => handleProdi(8)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            bengkulu
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[9]}
                                                                onChange={() => handleProdi(9)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            dki jakarta
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[10]}
                                                                onChange={() => handleProdi(10)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            banten
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[11]}
                                                                onChange={() => handleProdi(11)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            jawa barat
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[12]}
                                                                onChange={() => handleProdi(12)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            jawa tengah
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[13]}
                                                                onChange={() => handleProdi(13)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            di yogyakarta
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[14]}
                                                                onChange={() => handleProdi(14)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            jawa timur
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card" show={false}>
                    <div class=" card-body">
                        <div class="row">  
                            <div class="col-sm-12 col-7 ">
                                <div class="form-group">
                                <p style={{fontSize:"30px"}}class="form-control form_name">Studi</p>
                                </div>
                            </div>
                            <div class="col-sm-12 ">
                                <div class="form-group">
                                    {/* <textarea required defaultValue={title.deskripsi} class="form_name form-control" disabled  style={{whiteSpace:"pre-line",background:"white",textareaHeight: "38"}} id="exampleFormControlTextarea1"></textarea> */}
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[0]}
                                                                onChange={() => handleProdi(0)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik geologi
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[1]}
                                                                onChange={() => handleProdi(1)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik geofisika
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[2]}
                                                                onChange={() => handleProdi(2)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik perminyakan
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[3]}
                                                                onChange={() => handleProdi(3)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik elektro
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[4]}
                                                                onChange={() => handleProdi(4)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik mesin
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[5]}
                                                                onChange={() => handleProdi(5)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik kimia
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[6]}
                                                                onChange={() => handleProdi(6)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik logistik
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[7]}
                                                                onChange={() => handleProdi(7)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                menajemen
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[8]}
                                                                onChange={() => handleProdi(8)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                ekonomi
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[9]}
                                                                onChange={() => handleProdi(9)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik sipil
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[10]}
                                                                onChange={() => handleProdi(10)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                teknik lingkungan
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[11]}
                                                                onChange={() => handleProdi(11)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                            ilmu komputer
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[12]}
                                                                onChange={() => handleProdi(12)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                kimia
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[13]}
                                                                onChange={() => handleProdi(13)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                hubungan internasional
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedProdi[14]}
                                                                onChange={() => handleProdi(14)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                komunikasi
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class=" card-body">
                        <div class="row">  
                            <div class="col-sm-12 col-7 ">
                                <div class="form-group">
                                <p style={{fontSize:"30px"}}class="form-control form_name">Angkatan</p>
                                </div>
                            </div>
                            <div class="col-sm-12 ">
                                <div class="form-group">
                                    {/* <textarea required defaultValue={title.deskripsi} class="form_name form-control" disabled  style={{whiteSpace:"pre-line",background:"white",textareaHeight: "38"}} id="exampleFormControlTextarea1"></textarea> */}
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedKelahiran[0]}
                                                                onChange={() => handleKelahiran(0)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                1999
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedKelahiran[1]}
                                                                onChange={() => handleKelahiran(1)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                2000
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedKelahiran[2]}
                                                                onChange={() => handleKelahiran(2)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                2001
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedKelahiran[3]}
                                                                onChange={() => handleKelahiran(3)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                2002
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedKelahiran[4]}
                                                                onChange={() => handleKelahiran(4)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                2003
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="form-check">
                                                            <input 
                                                                class="form-check-input"
                                                                type="checkbox" 
                                                                checked={checkedKelahiran[5]}
                                                                onChange={() => handleKelahiran(5)}
                                                            />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                2004
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
    
  
  export default ModalSampling;