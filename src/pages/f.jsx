import  { useState,useEffect } from 'react';
import SectionDashboard from '../components/SectionDashbord';
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import ModalPenyebaran from '../components/ModalPenyebaran';
import ModalKarakteristik from '../components/ModalKarakteristik';


import "../style/survey.css"
import Title from '../components/form_kuesioner/Title';
import Close from "@material-ui/icons/Close";
import Radio from '@material-ui/icons/RadioButtonChecked';
import ShortText from "@material-ui/icons/ShortText";
import Pharagraph from "@material-ui/icons/Subject";
import { CheckBox } from '@material-ui/icons';
import MultipleChoice from '../components/form_kuesioner/MultipleChoice';
import ShortAnswer from '../components/form_kuesioner/ShortAnswer';
import Checkboxes from '../components/form_kuesioner/Checkboxes';
import TextAnswer from '../components/form_kuesioner/TextAnswer';
import { Link, useHistory ,useLocation} from 'react-router-dom'
import axios from "axios";


const Form = ({setToken,token}) => {
    const location = useLocation();
    const myparam = location.state.id;//id_kuesioner
    const [pertanyaan,setPertanyaan] = useState([])
    const [jawaban, setJawaban] = useState([]);
    const [section , setSection] = useState([])
    let history = useHistory();
    useEffect(() => {
        const fetchData = async ()=>{
            var initDataSection=[];
            var initDataPertanyaan = []
            axios.post(`http://localhost:5000/jawaban/mahasiswa/${token}`,{
                id_kuesioner: myparam
            })
            .then(
                response=> {
                    if(response.data.message.id_penyebaran == location.state.id_penyebaran){
                        history.push("/list")
                    }
                }
            ).catch(err => console.log(err))  
            
            
            axios.get(`http://localhost:5000/kuesioner/pertanyaan/${myparam}`)
              .then(
                  response=> {
                    // axios.get(`http://localhost:5000/options/section/kuesioner/${myparam}`)
                    // .then(
                    //     result=> {
                            setSection(response);
                            // for(var a = 0 ; a < result.data.message.length; a++){
                                initDataPertanyaan = response.data.message.filter((e, i) => {
                                    return response.data.message[i].section == response.data.message[0].section
                                })
                            //   }
                              console.log(initDataPertanyaan)
                              setPertanyaan(initDataPertanyaan)
                              setJawaban(new Array(initDataPertanyaan).fill(""))
                    //     }
                    // ).catch(err => console.log(err))
                    
                  }
              ).catch(err => console.log(err))
              
          }
          fetchData();
          
      }, []);
    //   jawaban, setJawaban
      const choice=(i)=>{
        if(pertanyaan[i].type == "pharagraph"){
            return(<TextAnswer id={pertanyaan[i].id} jawaban={jawaban} setIndex={i} setJawaban={setJawaban} type="text"/> )
        }else if(pertanyaan[i].type == "radio"){
            return(
            <>
                <MultipleChoice id={pertanyaan[i].id} jawaban={jawaban} setIndex={i} setJawaban={setJawaban} pertanyaan={pertanyaan} setPertanyaan={setPertanyaan}/>
                
            </>
            )
        }else if(pertanyaan[i].type == "short"){
            return(<ShortAnswer id={pertanyaan[i].id} jawaban={jawaban} setIndex={i} setJawaban={setJawaban} type="short"/>)
        }else if(pertanyaan[i].type == "check"){
            return(<Checkboxes id={pertanyaan[i].id} jawaban={jawaban} setIndex={i} setJawaban={setJawaban} type="short" />  )
        }
        
      }
      const quest  =(index) => {
        
        if(pertanyaan){    
            
            return(

             <div class="card">
                <div class=" card-header border-0">
                                    
                    <div class="row">  
                        <div class="col-sm-12 col-7">
                            <div class="form-group">
                                <p class="form-control form_name form_title"> {pertanyaan[index].pertanyaan}</p>
                            </div>
                        </div>
                        
                    </div>
                    {choice(index)}
                </div>
            </div>
            )
        }
    }
    const clear=()=>{
        window.location.reload();
    }
    const simpanJAwaban = async (e) => {
        e.preventDefault();
        const array =[]
        for(let a = 0 ; a < pertanyaan.length;a++){
            if(jawaban[a] == ""){
                return
            }
            array.push({
                id_penyebaran: location.state.id_penyebaran,
               id_mahasiswa : token,
               id_kuesioner:myparam,
               id_pertanyaan: pertanyaan[a].id,
               jawaban : jawaban[a]
               
            })
        }
        await axios.post('http://localhost:5000/jawaban',array)
        .then((response) => {
            alert(response.data.message)
            console.log(response.data.message)
          }) ;
          history.push("/list")
        // console.log(Array.isArray(array[1]))
    }   
    const test=()=>{
        alert(Array.isArray(jawaban[1]))
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
                            
                        </div>
                    </div>
                </div>
                <div class="container-fluid mt--4">
                    <div class=" row mb-5">
                        <div class="col-12">
                            <Title
                            id={myparam}
                            />
                            <form  onSubmit={ simpanJAwaban }>
                            {
                                pertanyaan.map((que,i)=>(
                                    <>
                                        {quest(i)}  
                                    </>
                                    
                                ))
                            }
                            <div class=" row">
                                <div class="col-6">
                                    <button type="submit" value="Submit"  class="btn btn-primary">Kirim</button>
                                </div>
                                <div class="col-6 text-right">
                                    <button onClick={clear} class="btn btn-primary-outline">Hapus Jawaban</button>
                                </div>
                            </div>    
                            </form>                        
                        </div>
                        
                    </div>
                </div>
            </div>    
        </div>
    </>
    )
}

  
  export default Form;