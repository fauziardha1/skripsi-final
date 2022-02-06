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
    const [inputList,setInputList] = useState([]);   
    let history = useHistory(); 
    const location = useLocation();
    const myparam = location.state.id;
    const [indexPertanyaan,SetIndexPertanyaan] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);setContent("")};
    const handleShow = () => setShow(true);
    const [content, setContent] = useState([]);    
    const [checkTitle,setCheckTitle] = useState([]);
    const [section,setSection] = useState(0);
    const [initSection, setInitSection] = useState(0)
    const [kuesionerSection , setKuesionerSection] = useState([])
    const [indexKS,setIndexKs] = useState(0)    
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => {setShow1(false)};
    const handleShow1 = () => setShow1(true);
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await axios.get(`http://localhost:5000/kuesioner/title/${myparam}`);
            
            if(response.data.message[0].id_mahasiswa != token){
                history.push("/")
            }
            
            setCheckTitle(response.data.message[0].metode);

        
          axios.get(`http://localhost:5000/kuesioner/pertanyaan/${myparam}`)
              .then(
                  response=> {
                      var init = response.data.message[0].section
                      var initMessage = []
                      for(var a = 0 ; a < response.data.message.length ; a++){
                        if(init != response.data.message[a].section){
                            initMessage.push({type:"section",section:response.data.message[a].section})
                            init=   response.data.message[a].section
                        }
                            initMessage.push(response.data.message[a])
                            setSection(response.data.message[a].section)
                      }
                            
                    SetIndexPertanyaan(initMessage)
                  }
              ).catch(err => console.log(err))
              
          }
          fetchData();
        
      }, []);
      const createKuesioner = ()=>{
        setShow(true)
        
    }
    const save= ()=>{
        setShow1(true)
    }
    const onAddBtnPharagraph =  (e) => {
        // console.log(myparam)
        axios.post("http://localhost:5000/kuesioner/pertanyaan", {
            id_kuesioner: myparam,
            pertanyaan: "Title",
            type:"pharagraph",
            section: section
            }).then((response) => {
                SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))
                // setPertanyaan(pertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
            })
        
    }
    const onAddBtnShortText =(e)=> {
        axios.post("http://localhost:5000/kuesioner/pertanyaan", {
            id_kuesioner: myparam,
            pertanyaan: "Title",
            type:"short",
            section: section
            }).then((response) => {
                SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
                // setPertanyaan(pertanyaan.concat(response.data.message))
            })
        
    }
    const onAddBtnRadio =(e)=> {
        
        console.log(indexPertanyaan)
        axios.post("http://localhost:5000/kuesioner/pertanyaan", {
            id_kuesioner: myparam,
            pertanyaan: "Title",
            type:"radio",
            section: section 
            }).then((response) => {
        
                SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
                // setPertanyaan(pertanyaan.concat(response.data.message))
            })
            
    }
    const onAddBtnCheckBox =(e)=> {
        axios.post("http://localhost:5000/kuesioner/pertanyaan", {
            id_kuesioner: myparam,
            pertanyaan: "Title",
            type:"check",
            section: section
            }).then((response) => {
                SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
                // setPertanyaan(pertanyaan.concat(response.data.message))
            })
        
    }
    const onAddBtnSection =(e)=> {
        setSection(section+1)
        SetIndexPertanyaan(indexPertanyaan.concat({type:"section",section:section+1}))
    }
    
    function onCloseSection(index,i){
        
        for(let a = 0 ; a < indexPertanyaan.length; a++){
            if(indexPertanyaan[a].section == indexPertanyaan[index].section && indexPertanyaan[a].section != "section" ){
                axios.delete(`http://localhost:5000/kuesioner/options/pertanyaan/${indexPertanyaan[a].id}`);
                // console.log(indexPertanyaan[index].section)
                axios.delete(`http://localhost:5000/kuesioner/pertanyaan/${indexPertanyaan[a].id}`);
        
            }
        }
        // axios.delete(`http://localhost:5000/kuesioner/pertanyaan/section/${myparam}/${indexPertanyaan[index].section}`)
        
        var init  = indexPertanyaan.filter((e, i) => {
            return indexPertanyaan[i].section !== indexPertanyaan[index].section 
        })
        console.log(init);
        SetIndexPertanyaan(init);
        
        
    }
    
    function onClose(index,i){
        // alert(i)
        axios.delete(`http://localhost:5000/kuesioner/options/pertanyaan/${i}`);
         axios.delete(`http://localhost:5000/kuesioner/pertanyaan/${i}`);
        const init = inputList;
        // setInputList( 
        //     inputList.filter((e, i) => {
        //         return i !== index
        //     })
        // );
        SetIndexPertanyaan( 
            indexPertanyaan.filter((e, i) => {
                return i !== index
            })
        );
    }
    
    const handletext= init => (e)=>{
        const Title = e.target.value
        axios.patch(`http://localhost:5000/kuesioner/pertanyaan/${init}`,{
            pertanyaan : Title
        });
      }
      const choice=(i)=>{
        if(indexPertanyaan[i].type == "pharagraph"){
            return(<TextAnswer id={indexPertanyaan[i].id} type="text"/> )
        }else if(indexPertanyaan[i].type == "radio"){
            return(
                <>
                {/* const [kuesionerSection , setKuesionerSection] = useState([])
    const [indexKS,setIndexKs] = useState(0)    
     */}
                    <MultipleChoice id={indexPertanyaan[i].id } section={indexPertanyaan} idIndex={i} idKuesioner={myparam} sctn = {indexPertanyaan[i].section} kuesionerSection={kuesionerSection} setKuesionerSection={setKuesionerSection} indexKS={indexKS} setIndexKs={setIndexKs}/>
                    
                </>
            )
        }else if(indexPertanyaan[i].type == "short"){
            return(<ShortAnswer id={indexPertanyaan[i].id} type="short"/>)
        }else if(indexPertanyaan[i].type == "check"){
            return(<Checkboxes id={indexPertanyaan[i].id} />  )
        }else {
            return(
            <>
            </>
            )
        }
        
      }
    const quest  =(index) => {

        if(indexPertanyaan ){
            if(indexPertanyaan[index].type != "section"){
            return(

             <div class="card">
                <div class=" card-header border-0">
                                    
                    <div class="row">  
                        <div class="col-sm-11 col-7">
                            <div class="form-group">
                            <input type="text"  class="form-control form_name form_title" defaultValue={indexPertanyaan[index].pertanyaan} onChange={handletext(indexPertanyaan[index].id)} />
                            </div>
                        </div>
                        <div class="col-sm-1 col-7">
                            <a onClick={() => onClose(index,indexPertanyaan[index].id)} value={index} class=" btn  ">
                                <Close/>
                            </a>
                        </div>
                    </div>
                    {choice(index)}
                </div>
            </div>
            )
            }else{
                return(
                    <div class="row">  
                        <div class="col-sm-11 col-7">
                            <div class="form-group">
                            {/* <input type="text"  class="form-control form_name form_title" defaultValue={indexPertanyaan[index].pertanyaan} onChange={handletext(indexPertanyaan[index].id)} /> */}
                            <h1 class=" form_name form_title">Section {indexPertanyaan[index].section}</h1>
                            <hr class="m-0"/>
                    
                            </div>
                        </div>
                        <div class="col-sm-1 col-7">
                            <a onClick={() => onCloseSection(index,indexPertanyaan[index].id)} value={index} class=" btn  ">
                                <Close/>
                            </a>
                        </div>
                    </div>
                    

                   )
            }
        }
    }
    const buttonPenyebaran=()=>{
        console.log(checkTitle)
        if(checkTitle){
            return(
            <>
                {/* <a  onClick={handleShow} class="btn btn-sm btn-neutral" style={{color:"#8897EB"}}>
                <i class="fas fa-share-alt"></i> Bagikan
                </a> */}
            </>
            )
        }else{
            return(
                <>
                <a  onClick={handleShow} class="btn btn-sm btn-neutral" style={{color:"#8897EB"}}>
                <i class="fas fa-share-alt"></i> Bagikan
                </a>
            </>
            )
        }
    }

    return(
        <>
        <div id="wrapper">
            <SideBarAdmin class1="nav-link active"
                    class2="nav-link "
                    class3="nav-link"
            />
            <div class="main-content" id="panel">
                <HeaderAdmin setToken={setToken} token={token}/>
                <SectionDashboard />
                <div class="header bg-primary pb-6">
                    <div class="container-fluid">
                        <div class="header-body">
                            <div class="row align-items-center py-4">
                                <div class="col-lg-10 col-7">
                                    {buttonPenyebaran()}
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
                                        <select  defaultValue={"Loncat ke section"} class="form-control form-control-sm" >
                                            <option value="" selected>Section Master</option>
                                            
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {
                                indexPertanyaan.map
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
                                        <div class="row align-items-end">
                                            <div class="col">
                                                    <div class="p-1">
                                                        <a class=" btn  " onClick={onAddBtnSection}>
                                                            <span class="btn-inner--icon">
                                                            <DragHandleIcon/>
                                                            
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
                                <button type="button" onClick={save}    class="btn btn-primary">Kirim</button>
                                
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
        <ModalKarakteristik token={token} show={show } handleClose={handleClose} setCheckTitle={setCheckTitle} checkTitle={checkTitle}/>
       {/* <ModalPenyebaran show={show } handleClose={handleClose} token={token} content={content} setContent={setContent}/> */}
       <Modal show={show1} onHide={handleClose1}>
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


// import  { useState,useEffect } from 'react';
// import SectionDashboard from '../components/SectionDashbord';
// import SideBarAdmin from '../components/template/SideBarAdmin';
// import HeaderAdmin from '../components/template/HeaderAdmin';
// import ModalPenyebaran from '../components/ModalPenyebaran';
// import ModalKarakteristik from '../components/ModalKarakteristik';


// import "../style/survey.css"
// import Title from '../components/Title';
// import Close from "@material-ui/icons/Close";
// import Radio from '@material-ui/icons/RadioButtonChecked';
// import ShortText from "@material-ui/icons/ShortText";
// import Pharagraph from "@material-ui/icons/Subject";
// import { CheckBox } from '@material-ui/icons';
// import MultipleChoice from '../components/MultipleChoice';
// import ShortAnswer from '../components/ShortAnswer';
// import Checkboxes from '../components/Checkboxes';
// import TextAnswer from '../components/TextAnswer';
// import { Link, useHistory ,useLocation} from 'react-router-dom'
// import axios from "axios";
// import DragHandleIcon from '@mui/icons-material/DragHandle';
// import SectionKuesioner from '../components/SectionKuesioner';

// const Survey = ({setToken,token}) => {
//     const [inputList,setInputList] = useState([]);    
//     const location = useLocation();
//     const myparam = location.state.id;
//     const [indexPertanyaan,SetIndexPertanyaan] = useState([])
//     const [show, setShow] = useState(false);
//     const handleClose = () => {setShow(false);setContent("")};
//     const handleShow = () => setShow(true);
//     const [content, setContent] = useState([]);    
//     const [checkTitle,setCheckTitle] = useState([]);
//     const [section,setSection] = useState(0);
//     const [defaultSection,setDefaultSection] = useState([]);
    
//     const [initSection, setInitSection] = useState(0)
    
//     useEffect(() => {
//         const fetchData = async ()=>{
//             const response = await axios.get(`http://localhost:5000/kuesioner/title/${myparam}`);
//     setCheckTitle(response.data.message[0]);
        
//           axios.get(`http://localhost:5000/kuesioner/pertanyaan/${myparam}`)
//               .then(
//                   response=> {
//                       var init = response.data.message[0].section
//                       var initMessage = []
//                       for(var a = 0 ; a < response.data.message.length ; a++){
//                         if(init != response.data.message[a].section){
//                             initMessage.push({type:"section",section:response.data.message[a].section})
//                             init=   response.data.message[a].section
//                         }
//                             initMessage.push(response.data.message[a])
//                             setSection(response.data.message[a].section)
                        
//                       }
//                       console.log(initMessage)
//                      if(response.data.message.length!=0){       
//                         SetIndexPertanyaan(initMessage)
//                         setSection(response.data.message[response.data.message.length-1].section)
//                         var arr= []
//                         for(let a = 0 ; a <response.data.message.length;a++){
//                             if(response.data.message[a].master == 1){
//                                 arr.push(response.data.message[a].section)
//                             }
//                         } 
//                         setDefaultSection(arr)  
//                     }
//                 }
//               ).catch(err => console.log(err))
              
//           }
//           fetchData();
        
//       }, []);
//       const createKuesioner = ()=>{
        
//     }
//     const onAddBtnPharagraph =  (e) => {
//         // console.log(myparam)
//         axios.post("http://localhost:5000/kuesioner/pertanyaan", {
//             id_kuesioner: myparam,
//             pertanyaan: "Title",
//             type:"pharagraph",
//             section: section
//             }).then((response) => {
//                 SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))
//                 // setPertanyaan(pertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
//             })
        
//     }
//     const onAddBtnShortText =(e)=> {
//         axios.post("http://localhost:5000/kuesioner/pertanyaan", {
//             id_kuesioner: myparam,
//             pertanyaan: "Title",
//             type:"short",
//             section: section
//             }).then((response) => {
//                 SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
//                 // setPertanyaan(pertanyaan.concat(response.data.message))
//             })
        
//     }
//     const onAddBtnRadio =(e)=> {
        
//         console.log(indexPertanyaan)
//         axios.post("http://localhost:5000/kuesioner/pertanyaan", {
//             id_kuesioner: myparam,
//             pertanyaan: "Title",
//             type:"radio",
//             section: section 
//             }).then((response) => {
        
//                 SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
//                 // setPertanyaan(pertanyaan.concat(response.data.message))
//             })
            
//     }
//     const onAddBtnCheckBox =(e)=> {
//         axios.post("http://localhost:5000/kuesioner/pertanyaan", {
//             id_kuesioner: myparam,
//             pertanyaan: "Title",
//             type:"check",
//             section: section
//             }).then((response) => {
//                 SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
//                 // setPertanyaan(pertanyaan.concat(response.data.message))
//             })
        
//     }
//     const onAddBtnSection =(e)=> {
//         var arr= defaultSection
//         axios.post("http://localhost:5000/kuesioner/pertanyaan", {
//             id_kuesioner: myparam,
//             pertanyaan: "Title",
//             type:"radio",
//             section: section,
//             master : 1
//             }).then((response) => {
//                 console.log(response)
//                 SetIndexPertanyaan(indexPertanyaan.concat(response.data.message))// history.push("/form", { id: response.data.message });
//                 arr.push(response.data.message[0].section)
//                 // setPertanyaan(pertanyaan.concat(response.data.message))
//             })
//             setDefaultSection(arr)
//         setSection(section+1)
//         console.log(section)
//     }
    
//     function onCloseSection(index,i){
//         axios.delete(`http://localhost:5000/kuesioner/options/pertanyaan/${i}`);
//         axios.delete(`http://localhost:5000/kuesioner/pertanyaan/${i}`);
//     //    const init = inputList;
//        SetIndexPertanyaan( 
//            indexPertanyaan.filter((e, i) => {
//                return i !== index
//            })
//        ); 
//         for(let a = 0 ; a < indexPertanyaan.length; a++){
//             if(indexPertanyaan[a].section == indexPertanyaan[index].section && indexPertanyaan[a].section != "section" ){
//                 axios.delete(`http://localhost:5000/kuesioner/options/pertanyaan/${indexPertanyaan[a].id}`);
//                 // console.log(indexPertanyaan[index].section)
//                 axios.delete(`http://localhost:5000/kuesioner/pertanyaan/${indexPertanyaan[a].id}`);
        
//             }
//         }
//         // axios.delete(`http://localhost:5000/kuesioner/pertanyaan/section/${myparam}/${indexPertanyaan[index].section}`)
        
//         var init  = indexPertanyaan.filter((e, i) => {
//             return indexPertanyaan[i].section !== indexPertanyaan[index].section 
//         })
//         console.log(init);
//         SetIndexPertanyaan(init);
        
        
//     }
    
//     function onClose(index,i){
//         axios.delete(`http://localhost:5000/kuesioner/options/pertanyaan/${i}`);
//          axios.delete(`http://localhost:5000/kuesioner/pertanyaan/${i}`);
//         const init = inputList;
//         SetIndexPertanyaan( 
//             indexPertanyaan.filter((e, i) => {
//                 return i !== index
//             })
//         );
//     }
    
//     const handletext= init => (e)=>{
//         const Title = e.target.value
//         axios.patch(`http://localhost:5000/kuesioner/pertanyaan/${init}`,{
//             pertanyaan : Title
//         });
//       }
      
//     const quest  =(index) => {

            
//         if(indexPertanyaan[index].type == "pharagraph"){
//             return(<TextAnswer id={indexPertanyaan[index].id}  indexPertanyaan ={indexPertanyaan} onClose1={onClose} index1 ={index} type="text" handletext={handletext}/> )
//         }else if(indexPertanyaan[index].type == "radio" && indexPertanyaan[index].master == true){
            
//             return(
//                 <>
//                     <SectionKuesioner id={indexPertanyaan[index].id } ds={defaultSection} section={indexPertanyaan} idIndex={index} idKuesioner={myparam} indexPertanyaan ={indexPertanyaan} onClose1={onCloseSection} index1 ={index} handletext1={handletext}/>
                    
//                 </>
//             )
//         }else if(indexPertanyaan[index].type == "radio"){
//             return(
//                 <>
//                     <MultipleChoice id={indexPertanyaan[index].id } section={indexPertanyaan} idIndex={index} idKuesioner={myparam} indexPertanyaan ={indexPertanyaan} onClose1={onClose} index1 ={index} handletext1={handletext}/>
                    
//                 </>
//             )
//         }else if(indexPertanyaan[index].type == "short"){
//             return(<ShortAnswer id={indexPertanyaan[index].id} indexPertanyaan ={indexPertanyaan} onClose1={onClose} index1 ={index}type="short"handletext={handletext}/>)
//         }else if(indexPertanyaan[index].type == "check"){
            
//             return(<Checkboxes id={indexPertanyaan[index].id} indexPertanyaan ={indexPertanyaan} onClose1={onClose} index1 ={index} handletext1={handletext} />  )
//         }   
            
         
//     }
//     const buttonPenyebaran=()=>{
//         if(checkTitle.metode){
//             return(
//             <>
//                 {/* <a  onClick={handleShow} class="btn btn-sm btn-neutral" style={{color:"#8897EB"}}>
//                 <i class="fas fa-share-alt"></i> Bagikan
//                 </a> */}
//             </>
//             )
//         }else{
//             return(
//                 <>
//                 <a  onClick={handleShow} class="btn btn-sm btn-neutral" style={{color:"#8897EB"}}>
//                 <i class="fas fa-share-alt"></i> Bagikan
//                 </a>
//             </>
//             )
//         }
//     }

//     return(
//         <>
//         <div id="wrapper">
//             <SideBarAdmin class1="nav-link active"
//                     class2="nav-link "
//                     class3="nav-link"
//             />
//             <div class="main-content" id="panel">
//                 <HeaderAdmin setToken={setToken} token={token}/>
//                 <SectionDashboard />
//                 <div class="header bg-primary pb-6">
//                     <div class="container-fluid">
//                         <div class="header-body">
//                             <div class="row align-items-center py-4">
//                                 <div class="col-lg-10 col-7">
//                                     {buttonPenyebaran()}
                                    
//                                 </div>
//                                 <div class="col-lg-1 col-5 text-right">
                                    
//                                     <Link 
//                                         to={{
//                                             pathname:"/form", 
//                                             state: {
//                                                 id: myparam
//                                             }
//                                         }} 
//                                     >
//                                     <a href="#" class="btn btn-sm btn-neutral">Pertanyaan</a>
//                                     </Link>
//                                 </div>
//                                 <div class="col-lg-1 col-5 text-right">
                                    
//                                     <Link 
//                                         to={{
//                                             pathname:"/responden", 
//                                             state: {
//                                                 id: myparam
//                                             }
//                                         }} 
//                                     >
//                                     <a href="#" class="btn btn-sm btn-neutral">Responden</a>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="container-fluid mt--6">
//                     <div class=" row">
//                         <div class="col-10">
//                             {/* <h1>{myparam}</h1> */}
//                             <Title
//                             id={myparam}
//                             />
//                             {
//                                 indexPertanyaan.map((que,i)=>(
//                                     <>
//                                         {quest(i)}  
//                                     </>
                                    
//                                 ))
//                             }
//                         </div>
//                         <div class="col-2">
//                             <div class="card card_adding" style={{position:"fixed"}}>
//                                 <div class=" card-header border-0">
//                                     <div class="">
//                                         <div class="row align-items-end">
//                                             <div class="col">
//                                                 <div class="p-1">
//                                                     <a onClick={onAddBtnPharagraph} class=" btn  ">
//                                                         <span class="btn-inner--icon">
//                                                                 <Pharagraph/>
//                                                         </span>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="row align-items-end">
//                                             <div class="col">
//                                                 <div class="p-1">
//                                                     <a class=" btn  " onClick={onAddBtnShortText}>
//                                                         <span class="btn-inner--icon">
//                                                             <ShortText/>
//                                                         </span>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="row align-items-end">
//                                             <div class="col">
//                                                 <div class="p-1">
//                                                     <a class=" btn  " onClick={onAddBtnRadio}>
//                                                         <span class="btn-inner--icon">
//                                                         <Radio  />
//                                                         </span>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="row align-items-end">
//                                             <div class="col">
//                                                 <div class="p-1">
//                                                     <a class=" btn  " onClick={onAddBtnCheckBox}>
//                                                         <span class="btn-inner--icon">
//                                                         <CheckBox/>
                                                        
//                                                         </span>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="row align-items-end">
//                                             <div class="col">
//                                                     <div class="p-1">
//                                                         <a class=" btn  " onClick={onAddBtnSection}>
//                                                             <span class="btn-inner--icon">
//                                                             <DragHandleIcon/>
                                                            
//                                                             </span>
//                                                         </a>
//                                                     </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>    
//         </div>
//         <ModalKarakteristik token={token} show={show } handleClose={handleClose}/>
//        {/* <ModalPenyebaran show={show } handleClose={handleClose} token={token} content={content} setContent={setContent}/> */}
//     </>
//     )
// }

  
//   export default Survey;