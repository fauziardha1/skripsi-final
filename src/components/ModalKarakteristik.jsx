import  { useState,useEffect } from 'react';
import SectionDashboard from '../components/SectionDashbord';
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import "../style/survey.css"
import Title from '../components/Title';
import Close from "@material-ui/icons/Close";
import Radio from '@material-ui/icons/RadioButtonChecked';
import ShortText from "@material-ui/icons/ShortText";
import Pharagraph from "@material-ui/icons/Subject";
import { CheckBox } from '@material-ui/icons';
import MultipleChoice from '../components/MultipleChoice';
import ShortAnswer from '../components/ShortAnswer';
import Checkboxes from '../components/Checkboxes';
import TextAnswer from '../components/TextAnswer';
import { Link, useHistory ,useLocation} from 'react-router-dom'
import axios from "axios";
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ModalSampling from "./ModalSampling"
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';

const ModalKarakteristik = ({token,show,handleClose,setCheckTitle,checkTitle}) => {   
    const [responden,setResponden] = useState(0);
    const [gender,setGender] = useState(new Array(2).fill(""));    
    
    const [sampling, setSampling] = useState(false);
    const handleCloseSampling = () => {setSampling(false)};
    
    const [dataGender,setDataGender] = useState([])
    const [dataAngkatan,setDataAngkatan] = useState([])
    const [dataStudi,setDataStudi] = useState([])
    const [dataKelahiran,setDataKelahiran] = useState([])
    const [dataProvinsi,setDataProvinsi] = useState([])
    

    const [optionsGender,setOptionGender] = useState([])
    const [optionAngkatan,setOptionAngkatan] = useState([])
    const [optionStudi,setOptionStudi] =useState([])
    const [optionKelahiran,setOptionKelahiran] =useState([])
    const [optionProvinsi,setOptionProvinsi] =useState([])
    const [dGender,setDGender]=useState([])
    const [dAngkatan,setDAngkatan]=useState([])
    const [dStudi,setDStudi] = useState([])
    const [dKelahiran,setDKelahiran] = useState([])
    const [dProvinsi,setDProvinsi] = useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            axios.get(`http://localhost:5000/mhs`)
              .then(
                  response=> {
                      var uniqG = [...new Set(response.data.message.map(item => item.gender))];
                      var data =[]
                      for(let a = 0 ; a < uniqG.length; a++){
                        if(uniqG[a]=="P"){
                            data.push(
                                {value:uniqG[a],label:"Pria"}
                            )
                        }else{
                            data.push(
                                {value:uniqG[a],label:"Wanita"}
                            )
                        }
                      }
                      setDGender(uniqG)
                      setOptionGender(data)
                    uniqG = [...new Set(response.data.message.map(item => item.angkatan))];
                    data =[]
                      for(let a = 0 ; a < uniqG.length; a++){
                        data.push(
                            {value:uniqG[a],label:uniqG[a]}
                        )
                      }
                      setDAngkatan(uniqG)
                      setOptionAngkatan(data)
                      uniqG = [...new Set(response.data.message.map(item => item.studi))];
                    data =[]
                      for(let a = 0 ; a < uniqG.length; a++){
                        data.push(
                            {value:uniqG[a],label:uniqG[a]}
                        )
                      }
                      setDStudi(uniqG)
                      setOptionStudi(data)
                      uniqG = [...new Set(response.data.message.map(item => item.kelahiran))];
                    data =[]
                      for(let a = 0 ; a < uniqG.length; a++){
                        data.push(
                            {value:uniqG[a],label:uniqG[a]}
                        )
                      }
                      setDKelahiran(uniqG)
                      setOptionKelahiran(data)
                      uniqG = [...new Set(response.data.message.map(item => item.provinsi))];
                    data =[]
                      for(let a = 0 ; a < uniqG.length; a++){
                        data.push(
                            {value:uniqG[a],label:uniqG[a]}
                        )
                      }
                      setDProvinsi(uniqG)
                      setOptionProvinsi(data)
                  }
                  
              ).catch(err => console.log(err))
        }
        fetchData()
    },[])
    useEffect(() => {
        const fetchData = async ()=>{
            
          
            let data={
                
            }
            if(dataStudi.length != 0 ){
                data.studi = dataStudi
            }
            if(dataAngkatan.length != 0 ){
                data.angkatan = dataAngkatan
            }
            if(dataGender.length != 0 ){
                
                data.gender = dataGender
                
            }
            if(dataKelahiran.length != 0 ){
                data.kelahiran = dataKelahiran
            }
            if(dataProvinsi.length != 0 ){
                data.provinsi = dataProvinsi
            }
            axios.post("http://localhost:5000/mahasiswa/length",data).then(
                response=> {
                    setResponden(response.data.id) 
                }
            )
        }
        fetchData();

    }, [dataProvinsi]);
    useEffect(() => {
        const fetchData = async ()=>{
            
          
            let data={
                
            }
            if(dataStudi.length != 0 ){
                data.studi = dataStudi
            }
            if(dataAngkatan.length != 0 ){
                data.angkatan = dataAngkatan
            }
            if(dataGender.length != 0 ){
                
                data.gender = dataGender
                
            }
            if(dataKelahiran.length != 0 ){
                data.kelahiran = dataKelahiran
            }
            if(dataProvinsi.length != 0 ){
                data.provinsi = dataProvinsi
            }
            axios.post("http://localhost:5000/mahasiswa/length",data).then(
                response=> {
                    setResponden(response.data.id) 
                }
            )
        }
        fetchData();

    }, [dataGender]);
    useEffect(() => {
        const fetchData = async ()=>{
            let data={

            }
            
            if(dataStudi.length != 0 ){
                data.studi = dataStudi
            }
            if(dataAngkatan.length != 0 ){
                data.angkatan = dataAngkatan
            }
            if(dataGender.length != 0 ){
                data.gender = dataGender
            }
            if(dataKelahiran.length != 0 ){
                data.kelahiran = dataKelahiran
            }
            if(dataProvinsi.length != 0 ){
                data.provinsi = dataProvinsi
            }
            
            axios.post("http://localhost:5000/mahasiswa/length",data).then(
                response=> {
                    setResponden(response.data.id) 
                }
            )
        }
        fetchData();

    }, [dataAngkatan]);
    useEffect(() => {
        const fetchData = async ()=>{
            let data={

            }
            
            if(dataStudi.length != 0 ){
                data.studi = dataStudi
            }
            if(dataAngkatan.length != 0 ){
                data.angkatan = dataAngkatan
            }
            if(dataGender.length != 0 ){
                data.gender = dataGender
            }
            if(dataKelahiran.length != 0 ){
                data.kelahiran = dataKelahiran
            }
            if(dataProvinsi.length != 0 ){
                data.provinsi = dataProvinsi
            }
            
            axios.post("http://localhost:5000/mahasiswa/length",data).then(
                response=> {
                    setResponden(response.data.id) 
                }
            )
        }
        fetchData();

    }, [dataKelahiran]);
    useEffect(() => {
        const fetchData = async ()=>{
            let data={

            }
            
            if(dataStudi.length != 0 ){
                data.studi = dataStudi
            }
            if(dataAngkatan.length != 0 ){
                data.angkatan = dataAngkatan
            }
            if(dataGender.length != 0 ){
                data.gender = dataGender
            }
            if(dataKelahiran.length != 0 ){
                data.kelahiran = dataKelahiran
            }
            if(dataProvinsi.length != 0 ){
                data.provinsi = dataProvinsi
            }
            axios.post("http://localhost:5000/mahasiswa/length",data).then(
                response=> {
                    setResponden(response.data.id) 
                }
            )
        }
        fetchData();

    }, [dataStudi]);
    
    
    
    
    const close =()=>{
        // setDataStudi([])
        // setDataAngkatan([])
        // setDataGender([])
        // setAngkatan(new Array(3).fill(""))
        // setGender(new Array(2).fill(""))
        // setProdi(new Array(15).fill(""))
        // setCheckedAngkatan(new Array(3).fill(false))
        // setCheckedGender(new Array(2).fill(false))
        // setCheckedProdi(new Array(15).fill(false))
        // handleClose()
    }
    const submitKarakter = (e)=>{
        e.preventDefault();
        setSampling(true);
        

        handleClose()

    }
    
    const changeGender = e => { 
        var init = { gender: e ? e.map(x => x.value) : [] }
        setDataGender(init.gender);
        
        
      };
    const changeAngkatan = e => {
        var init = { angkatan: e ? e.map(x => x.value) : [] }
        setDataAngkatan( init.angkatan);
       
    };
    const changeStudi = e => {
        var init = { studi: e ? e.map(x => x.value) : [] }
        setDataStudi( init.studi);
       
    };
    const changeKelahiran = e => {
        var init = { kelahiran: e ? e.map(x => x.value) : [] }
        setDataKelahiran( init.kelahiran);
       
    };
    const changeProvinsi = e => {
        var init = { provinsi: e ? e.map(x => x.value) : [] }
        setDataProvinsi( init.provinsi);
       
    };
    return(
        <>
            <Modal show={show} onHide={close}>
                <form onSubmit={ submitKarakter }>
                
                <Modal.Header >
                    <Modal.Title>Karakteristik Responden Kuesioner</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="form-group">
                    <div>
                        <h3 class="text-center">Jumlah Responden</h3>
                        <div class="text-center">
                            <h1 style={{display:"inline-block"}}>{responden}</h1><small style={{display:"inline-block"}}>/Orang</small>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="basic-url">Gender</label>
                    
                    <Select
                    components={makeAnimated()}
                    isMulti
                    onChange={changeGender}
                    options={optionsGender}
                    />
                </div>
                <div class="form-group">
                    <label for="basic-url">Angkatan</label>
                    <Select
                    components={makeAnimated()}
                    isMulti
                    onChange={changeAngkatan}
                    options={optionAngkatan}
                    />
                </div>
                <div class="form-group">
                    <label for="basic-url">Program Studi</label>
                    <Select
                    components={makeAnimated()}
                    isMulti
                    onChange={changeStudi}
                    options={optionStudi}
                    />
                    
                </div>
                <div class="form-group">
                    <label for="basic-url">Kelahiran</label>
                    <Select
                    components={makeAnimated()}
                    isMulti
                    onChange={changeKelahiran}
                    options={optionKelahiran}
                    />
                    
                </div>
                
                <div class="form-group">
                    <label for="basic-url">Provinsi</label>
                    <Select
                    components={makeAnimated()}
                    isMulti
                    onChange={changeProvinsi}
                    options={optionProvinsi}
                    />
                    
                </div> 
                </Modal.Body>
                <Modal.Footer>
                <Button type="submit" value="Submit" variant="primary" >
                    Selanjutnya
                </Button>
                </Modal.Footer>
                </form>

            </Modal>
    
            <ModalSampling token={token}
                show={sampling} handleClose={handleCloseSampling}
                gender={dataGender} prodi={dataStudi} angkatan={dataAngkatan} kelahiran={dataKelahiran} provinsi={dataProvinsi}
                setGender={setDataGender} setProdi={setDataStudi} setAngkatan={setDataAngkatan} setDataKelahiran={setDataKelahiran} setDataProvinsi={setDataProvinsi}
                closing={close}
                setCheckTitle={setCheckTitle}
                checkTitle={checkTitle}
                dGender={dGender} dAngkatan={dAngkatan} dStudi={dStudi} dKelahiran={dKelahiran} dProvinsi={dProvinsi}
 
                
 
            />
        </>
        
    )
}
  
  export default ModalKarakteristik;