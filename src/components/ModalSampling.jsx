import  { useState,useEffect } from 'react';
import "../style/survey.css"
import axios from "axios";
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ModalPenyebaran from './ModalPenyebaran'

const ModalSampling = ({token ,show,handleClose,gender,prodi,angkatan,setGender,setProdi,setAngkatan,closing,setCheckTitle,checkTitle,setKelahiran,setProvinsi,kelahiran,provinsi,dGender,dAngkatan,dStudi,dKelahiran,dProvinsi}) => {   
    const [responden,setResponden] = useState(0);
    const [sampling,setSampling] = useState(0)
    const [conten,setConten] = useState("")
    const [penyebaran, setPenyebaran] = useState(false);
    const handleClosePenyebaran = () => {setPenyebaran(false)};
    useEffect(() => {
        const fetchData = async ()=>{
            let data={
            }
            if(prodi.length != 0){
                data.studi = prodi
            }
            if(angkatan.length != 0 ){
                data.angkatan = angkatan
            }
            if(gender.length != 0 ){
                data.gender = gender
            }
            if(kelahiran.length != 0 ){
                data.kelahiran = kelahiran
            }
            if(provinsi.length != 0 ){
                data.provinsi = provinsi
            }
            // // alert(angkatan.length)
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
        // closing()
        // setProdi([])
        // setAngkatan([])
        // setGender([])
        // setSampling(0)
        // handleClose()
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
                    <h3 class="text-center">Jumlah Sampling</h3>
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
            <Modal show={show} onHide={close}>
                <form onSubmit={ submitSampling }>
                            
                <Modal.Header >
                    <Modal.Title>Jumlah Responden Kuesioner</Modal.Title>
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
                    {conten}
                    <div class="form-group">
                        <label for="basic-url">Metode Sampling Data :</label>
                        <div class="input-group">
                            <select onChange={(val)=>inputReponden(val.target.value)} class="custom-select" id="inputGroupSelect04">
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
                    

                   
                </Modal.Body>
                <Modal.Footer>
                <Button type="submit" value="Submit" variant="primary" >
                    Selanjutnya
                </Button>
                </Modal.Footer>
                </form>
            </Modal>
            <ModalPenyebaran token={token} 
                show={penyebaran} handleClose={handleClosePenyebaran}
                gender={gender} prodi={prodi} angkatan={angkatan} sampling={sampling} setSampling={setSampling} kelahiran={kelahiran} provinsi={provinsi}
                closing={closing} setCheckTitle={setCheckTitle}
                checkTitle={checkTitle}
                dGender={dGender} dAngkatan={dAngkatan} dStudi={dStudi} dKelahiran={dKelahiran} dProvinsi={dProvinsi}
 
                />
        </>
    )
}
    
  
  export default ModalSampling;