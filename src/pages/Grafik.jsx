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
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

var randomColor = require('randomcolor');   

const Grafik = ({setToken,token}) => {
    const [pertanyaan,setPertanyaan] = useState([])
    const [totalJawaban,setTotalJawaban] = useState([])
    const [title,setTitle] = useState([])
    const location = useLocation();
    const myparam = location.state.id;
    useEffect(() => {
        const fetchData = async ()=>{
            axios.get(`http://localhost:5000/kuesioner/pertanyaan/${myparam}`)
                .then(
                    response=> {
                        setPertanyaan(response.data.message)
                    }
                ).catch(err => console.log(err))
                axios.get(`http://localhost:5000/jawaban/${myparam}`)
                .then(
                    response=> {
                        
                        setTotalJawaban(response.data.message)
                    }
                ).catch(err => console.log(err))
                
            const response = await axios.get(`http://localhost:5000/kuesioner/title/${myparam}`);
            setTitle(response.data.message[0]); 
        }
        fetchData();
        
    }, []);
      


      const quest  =(index) => {
        if(pertanyaan[index].type == "pharagraph"){
            return(<TextAnswer id_pertanyaan={pertanyaan[index].id} textJawaban={pertanyaan[index].pertanyaan} type="text"/> )
        }else if(pertanyaan[index].type == "radio"){
            return(<MultipleChoice  id_pertanyaan={pertanyaan[index].id} textJawaban={pertanyaan[index].pertanyaan}/>)
        }else if(pertanyaan[index].type == "short"){
            return(<ShortAnswer id_pertanyaan={pertanyaan[index].id} textJawaban={pertanyaan[index].pertanyaan} type="short"/>)
        }else if(pertanyaan[index].type == "check"){
            return(<Checkboxes id_pertanyaan={pertanyaan[index].id} textJawaban={pertanyaan[index].pertanyaan}  type="short" />  )
        }
    }
    

      
    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = () => {
        const ws = XLSX.utils.json_to_sheet(totalJawaban);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, title.title + fileExtension);
    };
    

    return(
        <>
        <div id="wrapper">
            <SideBarAdmin 
            class1="nav-link active"
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
                                    <button   onClick={() => exportToCSV()} class="btn btn-sm btn-neutral" style={{color:"#8897EB"}}>
                                    <i class="fas fa-file-excel"></i> Excel
                                    </button>
                                    
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
                        <div class="col-12">
                            {/* <h1>{myparam}</h1> */}
                            <Title
                            id={myparam}
                            />
                            {
                                pertanyaan.map((que,i)=>(
                                    <>
                                        {quest(i)}  
                                    </>
                                    
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </>
    )
}

export default Grafik;
  