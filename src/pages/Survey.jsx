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
import MultipleChoice from '../components/MultipleChoice';
import ShortAnswer from '../components/ShortAnswer';
import Checkboxes from '../components/Checkboxes';
import TextAnswer from '../components/TextAnswer';
import { Link, useHistory ,useLocation} from 'react-router-dom'
import axios from "axios";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Button,Modal } from 'react-bootstrap'
 



const Survey = ({setToken,token}) => {
    let history = useHistory(); 
    const location = useLocation();
    const myparam = location.state.id;
    const [pertanyaan,setPertanyaan] = useState([])
    const [section,setSection] = useState(0);
    const [initKuesioner, setInitKuesioner] = useState([])
    const [kuesionerSection , setKuesionerSection] = useState([])
    const [indexKS,setIndexKs] = useState(0) 
    const [is ,initIS] = useState([])
    const [isp ,initISP] = useState([])    
    const [p,setP] =useState("")
    const [checkTitle,setCheckTitle] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);setContent("")};
    const handleShow = () => setShow(true);
    const [content, setContent] = useState([]);      
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => {setShow1(false)};
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => {setShow2(false)};
    const handleShow2 = () => setShow2(true);
    const [kuesioner,setKuesioner] = useState("")
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await axios.get(`http://localhost:5000/kuesioner/title/${myparam}`);
            setKuesioner(response.data.message[0].penyebaran)
            if(response.data.message[0].id_mahasiswa != token){
                history.push("/")
            }
            // setCheckTitle(response.data.message[0].metode);
            if(response.data.message[0].metode== ""){
                setShow(true)
            }
            axios.get(`http://localhost:5000/kpsp/${myparam}`)
            .then(
                response=> {
                    if(response.data.message.length != 0){
                        var init = response.data.message.sort((a, b) => {
                            return a.section - b.section;
                        })
                        // console.log(init[init.length-1])
                        setSection(init[init.length-1].section+1)
                        var uniqueObjArray = [
                            ...new Map(response.data.message.map((item) => [item["section"], item])).values(),
                        ];
                        var data=[0]
                        var data1=[0]
                        for(let a = 0 ; a < uniqueObjArray.length; a++){
                            data.push(uniqueObjArray[a].section)
                            data1.push(uniqueObjArray[a].id_pertanyaan)
                        }
                        // console.log(data1)
                        initISP(data1)
                        // const [is ,initIS] = useState([])
                        initIS(data)
                    }
                }
            )
            
        
          axios.get(`http://localhost:5000/kuesioner/pertanyaan/${myparam}`)
              .then(
                  response=> {
                      if(response.data.message.length!=0){
                        var init = response.data.message[0].section
                        var array =[]
                        var array2d = []
                        var boolean = true;
                        response.data.message = response.data.message.sort(function(a,b){
                            return a.section - b.section;
                            }
                        );
                        for(let a = 0 ; a < response.data.message.length;a++){
                            if(init != response.data.message[a].section){
                                boolean =false 
                                init = response.data.message[a].section
                                array2d.push(array)
                                array = [] 
                            }
                            array.push(response.data.message[a])
                        }

                        array2d.push(array)
                        setInitKuesioner(array2d)
                        setPertanyaan(array2d[0])
                    }else{
                        setInitKuesioner([[undefined]])
                        setPertanyaan([])
                    }
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
            section: 0
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
            section: 0
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
            section: 0
            }).then((response) => {
                setPertanyaan(pertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
                // setPertanyaan(pertanyaan.concat(response.data.message))
            })
        
    }
    const share = ()=>{
        axios.patch(`http://localhost:5000/kuesioner/penyebaran/${myparam}`, {
            penyebaran: 1
        })
        axios.patch(`http://localhost:5000/kuesioner/title/${myparam}`,{
            pernyebaran : 1
        });
        setKuesioner(1)
        setShow2(true)
    }
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
            
            return(
                <>
                    <MultipleChoice id={pertanyaan[i].id } section={pertanyaan} idIndex={i} idKuesioner={myparam} idSection={section} setIdSection ={setSection} setInitKuesioner={setInitKuesioner} disPetanyaan = {pertanyaan} setDisPertanyaan={setPertanyaan} initKuesioner={initKuesioner} is={is} initIS={initIS} p ={p} setP={setP}/>
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
        var data = isp;
        var datais = is
        for(let a =0 ; a < isp.length;a++){
            if(data[a]== pertanyaan[index].id){
                datais[a]=undefined
            }
        }
        var newArray = datais.filter(function(f) { return f !== undefined })
        initIS(newArray)
        // console.log(pertanyaan[index])
        axios.delete(`http://localhost:5000/kuesioner/options/pertanyaan/${pertanyaan[index].id}`);
         axios.delete(`http://localhost:5000/kuesioner/pertanyaan/${pertanyaan[index].id}`);
        axios.delete(`http://localhost:5000/setionPertanyaan/${pertanyaan[index].id}/${myparam}`);
        
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
            section: 0   
            }).then((response) => {
        
                setPertanyaan(pertanyaan.concat(response.data.message))
            })
            
    }
    const selectSection  =() => {
        var data =[]
        
        if(is.length ==0){
            data.push(
                <option value={0} selected>Section Master</option>
            )
        }
        for (let a = 0 ; a < is.length; a++){
            if(a == 0 ){
                data.push(
                    <option value={is[a]} selected>Section Master</option>
                )
            }else{
                data.push(
                    <option value={is[a]} >Section {a}</option>
                )
            }
        }
        return data
    }
    const save= ()=>{
        setShow1(true)
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
                {/* <SectionDashboard /> */}
                <div class="header bg-primary pb-6">
                    <div class="container-fluid">
                        <div class="header-body">
                            <div class="row align-items-center py-4">
                                <div class="col-lg-10 col-7">
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
                                        <select  defaultValue={"Loncat ke section"} onChange={
                                            (e)=>{
                                                var boolean = is.findIndex((element) => element === parseInt(e.target.value));
                                                
                                                history.push("/section",{
                                                    id: myparam,
                                                    section:e.target.value,
                                                    idsection:section,
                                                    pageDis:parseInt(boolean)
                                                })
                                            }
                                        } class="form-control form-control-sm" >
                                        {selectSection()}
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
                            <div class="col-12">
                                <div class="row">
                                    <div className="col-6">
                                       <button type="button" onClick={save}    class="btn btn-primary">Simpan</button>
                                    </div>
                                    <div className="col-6">
                                    {kuesioner === 0 ? <>{<button type="button" onClick={share}    class="btn btn-primary">Bagikan</button>}</>:<></>}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <ModalKarakteristik token={token} show={show } handleClose={handleClose} setCheckTitle={setCheckTitle} checkTitle={checkTitle}/>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Body>
            <div class="d-flex justify-content-center">
                <i class="far fa-check-circle  fa-7x text-primary"></i>
               
            </div>
            <div class="d-flex justify-content-center mt-2">
                <h2>Data Anda Sudah Disebarkan Kepada Responden</h2>
            </div>
            </Modal.Body>
        </Modal>
       <Modal show={show2} onHide={handleClose2}>
            <Modal.Body>
            <div class="d-flex justify-content-center">
                <i class="far fa-check-circle  fa-7x text-primary"></i>
               
            </div>
            <div class="d-flex justify-content-center mt-2">
                <h2>Data Anda Sudah Tersimpan</h2>
            </div>
            </Modal.Body>
        </Modal>
    </>
    )
}



export default Survey;