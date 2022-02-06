import  { useState,useEffect } from 'react';
import SectionDashboard from '../components/SectionDashbord';
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import ModalPenyebaran from '../components/ModalPenyebaran';
import ModalKarakteristik from '../components/ModalKarakteristik';


import "../style/survey.css"
import Title from '../components/Title';
import Close from "@material-ui/icons/Close";
import Radio from '@material-ui/icons/RadioButtonChecked';
import ShortText from "@material-ui/icons/ShortText";
import Pharagraph from "@material-ui/icons/Subject";
import { CheckBox } from '@material-ui/icons';
import MultipleChoiceSection from '../components/MultipleChoiceSection';
import ShortAnswer from '../components/ShortAnswer';
import Checkboxes from '../components/Checkboxes';
import TextAnswer from '../components/TextAnswer';
import { Link, useHistory ,useLocation} from 'react-router-dom'
import axios from "axios";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Button,Modal } from 'react-bootstrap'
 



const Section = ({setToken,token}) => {
    let history = useHistory();
     
    const location = useLocation();
    const myparam = location.state.id;
    const myparamSection = location.state.section;
    const [pertanyaan,setPertanyaan] = useState([])
    const [section,setSection] = useState(location.state.idsection);
    const [initKuesioner, setInitKuesioner] = useState([])
    const [kuesionerSection , setKuesionerSection] = useState([])
    const [indexKS,setIndexKs] = useState(0)    
    
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await axios.get(`http://localhost:5000/kuesioner/title/${myparam}`);
            
            if(response.data.message[0].id_mahasiswa != token){
                history.push("/")
            }
            
            
        
          axios.get(`http://localhost:5000//kuesioner/pertanyaan/section/${myparamSection}/${myparam}`)
              .then(
                  response=> {
                      
                        setPertanyaan(response.data.message)
                        console.log(response.data.message)
                  }
              ).catch(err => console.log(err))
              
          }
          fetchData();
        
    }, []);

    const onAddBtnPharagraph =  (e) => {
        // console.log(myparam)
        axios.post("http://localhost:5000/kuesioner/pertanyaan", {
            id_kuesioner: myparam,
            pertanyaan: "Title",
            type:"pharagraph",
            section: myparamSection
            }).then((response) => {
                setPertanyaan(pertanyaan.concat(response.data.message))
                // setPertanyaan(pertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
            })
        
    }
    const onAddBtnShortText =(e)=> {
        axios.post("http://localhost:5000/kuesioner/pertanyaan", {
            id_kuesioner: myparam,
            pertanyaan: "Title",
            type:"short",
            section: myparamSection
            }).then((response) => {
                setPertanyaan(pertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
                // setPertanyaan(pertanyaan.concat(response.data.message))
            })
        
    }
    
    const onAddBtnCheckBox =(e)=> {
        axios.post("http://localhost:5000/kuesioner/pertanyaan", {
            id_kuesioner: myparam,
            pertanyaan: "Title",
            type:"check",
            section: myparamSection
            }).then((response) => {
                setPertanyaan(pertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
                // setPertanyaan(pertanyaan.concat(response.data.message))
            })
        
    }
    // const onAddBtnSection =(e)=> {
    //     setSection(section+1)
    //     setPertanyaan(pertanyaan.concat({type:"section",section:section+1}))
    // }

    const handletext= init => (e)=>{
        const Title = e.target.value
        axios.patch(`http://localhost:5000/kuesioner/pertanyaan/${init}`,{
            pertanyaan : Title
        });
      }
      const choice=(i)=>{
        if(pertanyaan[i].type == "pharagraph"){
            return(<TextAnswer id={pertanyaan[i].id} type="text"/> )
        }else if(pertanyaan[i].type == "radio"){
            
          console.log(pertanyaan[i].id)
            return(
                <>
                    <MultipleChoiceSection id={pertanyaan[i].id } section={pertanyaan} idIndex={i} idKuesioner={myparam} idSection={section} setIdSection ={setSection} setInitKuesioner={setInitKuesioner} disPetanyaan = {pertanyaan} setDisPertanyaan={setPertanyaan} initKuesioner={initKuesioner} />
                </>
            )
        }else if(pertanyaan[i].type == "short"){
            return(<ShortAnswer id={pertanyaan[i].id} type="short"/>)
        }else if(pertanyaan[i].type == "check"){
            return(<Checkboxes id={pertanyaan[i].id} />  )
        }else {
            return(
            <>
            </>
            )
        }
        
      }
      function onClose(index){
        // // console.log(pertanyaan[index])
        axios.delete(`http://localhost:5000/kuesioner/options/pertanyaan/${pertanyaan[index].id}`);
        axios.delete(`http://localhost:5000/kuesioner/pertanyaan/${pertanyaan[index].id}`);
        
        // const init = inputList;
        setPertanyaan( 
            pertanyaan.filter((e, i) => {
                return i !== index
            })
        );
    }  

    const quest  =(a) => {
        var data=[]
        data.push(
            <>
                <div class="card">
                    <div class=" card-header border-0">
                                        
                        <div class="row">  
                            <div class="col-sm-11 col-7">
                                <div class="form-group">
                                <input type="text"  class="form-control form_name form_title" placeholder={pertanyaan[a].pertanyaan} onChange={handletext(pertanyaan[a].id)} />
                                </div>
                            </div>
                            <div class="col-sm-1 col-7">
                                <a onClick={() => onClose(a)} value={a} class=" btn  ">
                                    <Close/>
                                </a>
                            </div>
                        </div>
                        {choice(a)}
                    </div>
                </div>
            </>
            
        )
        return data;
    }
    const onAddBtnRadio =(e)=> {
        
        axios.post("http://localhost:5000/kuesioner/pertanyaan", {
            id_kuesioner: myparam,
            pertanyaan: "Title",
            type:"radio",
            section: myparamSection 
            }).then((response) => {
        
                setPertanyaan(pertanyaan.concat(response.data.message))
            })
            
    }
    const selectSection  =() => {
        var data =[]
        // console.log
        for (let a = 0 ; a < section+1; a++){
            if(a == 0 ){
                data.push(
                    <option value={a} selected>Section Master</option>
                )
            }else{
                data.push(
                    <option value={a} >Section {a}</option>
                )
            }
        }
        return data
    }
    return (
        <>
        <div id="wrapper">
            <SideBarAdmin class1="nav-link active"
                    class2="nav-link "
                    class3="nav-link"
                    token={token}
            />
            <div class="main-content" id="panel">
                <HeaderAdmin setToken={setToken} token={token}/>
                <SectionDashboard />
                <div class="header bg-primary pb-6">
                    <div class="container-fluid">
                        <div class="header-body">
                            <div class="row align-items-center py-4">
                                <div class="col-lg-10 col-7">
                                    {/* {buttonPenyebaran()} */}
                                    {/* <a  onClick={handleShow} class="btn btn-sm btn-neutral" style={{color:"#8897EB"}}>
                                    <i class="fas fa-share-alt"></i> Bagikan
                                    </a> */}
                                </div>
                                <div class="col-lg-1 col-5 text-right">
                                    
                                    <Link 
                                        to={{
                                            pathname:"/form", 
                                            state: {
                                                id: myparam
                                            }
                                        }} 
                                    >
                                    <a href="#" class="btn btn-sm btn-neutral">Pertanyaan</a>
                                    </Link>
                                </div>
                                <div class="col-lg-1 col-5 text-right">
                                    
                                    <Link 
                                        to={{
                                            pathname:"/responden", 
                                            state: {
                                                id: myparam
                                            }
                                        }} 
                                    >
                                    <a href="#" class="btn btn-sm btn-neutral">Responden</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid mt--6">
                    <div class=" row">
                        <div class="col-10">
                            {/* <h1>{myparam}</h1> */}
                            <Title
                            id={myparam}
                            />
                            <div class=" row mt-0 mb-3">
                                <div class="col-9">
                                    
                                </div>
                                <div className="col-3">
                                    <div class="input-group">
                                        <select  onChange={
                                            (e)=>{
                                                if(e.target.value==0){
                                                    history.push("/form",{
                                                        id: myparam,
                                                    })
                                                    
                                                }else{
                                                    history.replace("/section",{
                                                        id: myparam,
                                                        section:e.target.value,
                                                        idsection:section
                                                    })
                                                }
                                            }
                                        } class="form-control form-control-sm" >
                                        <option value={0} selected>Section Master</option>
                                        <option value={myparamSection} selected>Section {location.state.pageDis}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {

                                pertanyaan.map
                                ((que,i)=>(
                                    <>
                                        {quest(i)}  
                                    </>
                                    
                                ))
                            } 
                                
                        </div>
                        <div class="col-2">
                            <div class="card card_adding" style={{position:"fixed"}}>
                                <div class=" card-header border-0">
                                    <div class="">
                                        <div class="row align-items-end">
                                            <div class="col">
                                                <div class="p-1">
                                                    <a onClick={onAddBtnPharagraph} class=" btn  ">
                                                        <span class="btn-inner--icon">
                                                                <Pharagraph/>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row align-items-end">
                                            <div class="col">
                                                <div class="p-1">
                                                    <a class=" btn  " onClick={onAddBtnShortText}>
                                                        <span class="btn-inner--icon">
                                                            <ShortText/>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row align-items-end">
                                            <div class="col">
                                                <div class="p-1">
                                                    <a class=" btn  " onClick={onAddBtnRadio}>
                                                        <span class="btn-inner--icon">
                                                        <Radio  />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row align-items-end">
                                            <div class="col">
                                                <div class="p-1">
                                                    <a class=" btn  " onClick={onAddBtnCheckBox}>
                                                        <span class="btn-inner--icon">
                                                        <CheckBox/>
                                                        
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" row">
                            <div class="col-6">
                                {/* <button type="button" onClick={save}    class="btn btn-primary">Kirim</button> */}
                                
                                {/* <button type="submit" value="Submit"  class="btn btn-primary">Kirim</button> */}
                            </div>
                            <div class="col-6 text-right">
                                {/* <button onClick={clear} class="btn btn-secondary">Hapus Jawaban</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        {/* <ModalKarakteristik token={token} show={show } handleClose={handleClose} setCheckTitle={setCheckTitle} checkTitle={checkTitle}/> */}
       {/* <ModalPenyebaran show={show } handleClose={handleClose} token={token} content={content} setContent={setContent}/> */}
       {/* <Modal show={show1} onHide={handleClose1}>
            <Modal.Body>
            <div class="d-flex justify-content-center">
                <i class="far fa-check-circle  fa-7x text-primary"></i>
               
            </div>
            <div class="d-flex justify-content-center mt-2">
                <h2>Data Anda Sudah Tersimpan</h2>
            </div>
            </Modal.Body>
        </Modal> */}
    </>
    )
}



export default Section;