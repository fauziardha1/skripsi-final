import  { useState,useEffect } from 'react';
import SectionDashboard from '../components/SectionDashbord';
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import "../style/survey.css"
import Title from '../components/form_kuesioner/Title';
import MultipleChoice from '../components/form_kuesioner/MultipleChoice';
import ShortAnswer from '../components/form_kuesioner/ShortAnswer';
import Checkboxes from '../components/form_kuesioner/Checkboxes';
import TextAnswer from '../components/form_kuesioner/TextAnswer';
import { Link, useHistory ,useLocation} from 'react-router-dom'
import axios from "axios";


const Form = ({setToken,token}) => {
    let history = useHistory();
    // idKuesioner
    const location = useLocation();
    const myparam = location.state.id;
    // setting pertanyaan
    const [pertanyaan,setPertanyaan] = useState([])
    const [masterPertanyaan, setMasterPertanyaan] = useState([])
    const [sectionPertanyaan,setSectionPertanyaan] = useState([])
    const [page,setPage] = useState(0)
    const [section,setSection] = useState([])
    const [jawaban,setJawaban] = useState([])
    const [idOp,setIdOp]= useState([]) 
    const [display,setDisplay] = useState(0)
    useEffect(() => {
        const fetchData = async ()=>{
            axios.get(`http://localhost:5000/kuesioner/pertanyaan/${myparam}`)
            .then(
                response=>{
                    if(response.data.message.length  != 0){
                        var data  = response.data.message
                        data = response.data.message.sort(function(a,b){
                            return a.section - b.section;
                            }
                        );
                        var initMaster=[]
                        var init =[]
                        for(let a = 0 ; a < data.length;a++){
                            if(data[a].section == 0){
                                // console.log(a)
                                initMaster.push(data[a])
                            }else{
                                init.push(data[a])
                            }

                        }
                        setMasterPertanyaan(initMaster)
                        if(init.length != 0){
                            init = init.sort((a,b) => (a.section > b.section) ? 1 : ((b.section > a.section) ? -1 : 0))
                            setSectionPertanyaan(init)
                        }
                        setPertanyaan([data[0]])
                    }
                }
            )
            axios.get(`http://localhost:5000/kpsp/${myparam}`)
            .then(
                response=>{
                    if(response.data.message.length  != 0){
                        setSection(response.data.message)
                    }
                }
            )
            

          
        }
        fetchData();
          
      }, []);
    const choice=(i)=>{
        if(pertanyaan[i].type == "pharagraph"){
            return(<TextAnswer id={pertanyaan[i].id} jawaban={jawaban} setIndex={i} setJawaban={setJawaban} type="text" idOp={idOp} setIdOp={setIdOp}/> )
        }else if(pertanyaan[i].type == "radio"){
            return(
            <>
                <MultipleChoice id={pertanyaan[i].id} jawaban={jawaban} setIndex={i} setJawaban={setJawaban} kuesioner={myparam} idOp={idOp} setIdOp={setIdOp} section={section}/>
                
            </>
            )
        }else if(pertanyaan[i].type == "short"){
            return(<ShortAnswer id={pertanyaan[i].id} jawaban={jawaban} setIndex={i} setJawaban={setJawaban} type="short" idOp={idOp} setIdOp={setIdOp}/>)
        }else if(pertanyaan[i].type == "check"){
            return(<Checkboxes id={pertanyaan[i].id} jawaban={jawaban} setIndex={i} setJawaban={setJawaban} type="short"  idOp={idOp} setIdOp={setIdOp}/>  )
        }else{
            return(
                <>
                    <h1>ASNKAND</h1>
                </>
            )
        }
    }

    const quest  =() => {
        let data =[]
        if(pertanyaan.length!=0){
            if(pertanyaan[page]!=""){
                data.push(
                    <div class="card">
                        <div class=" card-header border-0">
                                            
                            <div class="row">  
                                <div class="col-sm-12 col-7">
                                    <div class="form1-group">
                                        <p class="form-control form_name form_title"> {pertanyaan[page].pertanyaan}</p>
                                    </div>
                                </div>
                                
                            </div>
                            {choice(page)}
                        </div>
                    </div>
                    // <h1>{page}</h1>
                )
            }else{
                data.push(
                    <> 
                        <div class="d-flex justify-content-center mb-3">
                            <i class="far fa-check-circle fa-5x"></i>
                        </div>
                        <div  class="d-flex justify-content-center mb-4">
                            <h3>Tekan Tombol Kirim Untuk Menyelesaikan Kuesioner</h3>
                        </div>
                    </>
                )
            }
        }
        // }
        return data
    }
    const next = ()=>{

        var indexPage = page+1
        if(jawaban[page] != undefined){
            var index = section.findIndex(function(item, i){
                return item.id_option === idOp[page].id
            });
            if(index != -1){
                var data = []
                for(let a = 0 ; a < page+1;a++){
                    data.push(pertanyaan[a])
                }
                var boole = true
                for(let a = 0 ; a< sectionPertanyaan.length; a++){
                    if(section[index].section ==sectionPertanyaan[a].section ){
                        data.push(sectionPertanyaan[a])
                        boole = false
                    }
                } 
                // console.log(sectionPertanyaan)
                if(sectionPertanyaan.length == 0 || boole){
                    for(let a = pertanyaan.length; a>page+1; a--){
                        pertanyaan.pop()
                    }
                    var i = masterPertanyaan.findIndex(function(item, i){
                        return item.id === pertanyaan[pertanyaan.length-1].id
                    });
                    var i = masterPertanyaan.findIndex(function(item, i){
                        return item.id === pertanyaan[pertanyaan.length-1].id
                    });
                    if(i < masterPertanyaan.length-1){
                        var inn = sectionPertanyaan.findIndex(function(item, i){
                            return item.section === pertanyaan[pertanyaan.length-1].section
                        });
                        if(sectionPertanyaan[inn+1].section == sectionPertanyaan[inn].section){
                            setPertanyaan(pertanyaan.concat(sectionPertanyaan[inn+1]))
                        
                        }else{
                            setPertanyaan(pertanyaan.concat(masterPertanyaan[i+1]))
                        
                        }
                        // if()
                        
                        setDisplay(1)
                    }else{
                        setPertanyaan(pertanyaan.concat(""))
                        setDisplay(2)
                        
                    }
                    setPage(indexPage)
                }else{
                    setPertanyaan(data)
                    setPage(indexPage)
                    setDisplay(1)
                }
                
            }else{
                if(pertanyaan.length-1>page){
                    
                    console.log(pertanyaan)
                    console.log(page)
                    for(let a = pertanyaan.length; a>page+1; a--){
                        pertanyaan.pop()
                    }
                    var i = masterPertanyaan.findIndex(function(item, i){
                        return item.id === pertanyaan[pertanyaan.length-1].id
                    });
                    if(i < masterPertanyaan.length-1){
                        var inn = sectionPertanyaan.findIndex(function(item, i){
                            return item.section === pertanyaan[pertanyaan.length-1].section
                        });
                        if(inn != -1){
                            if(sectionPertanyaan[inn+1].section == sectionPertanyaan[inn].section){
                                setPertanyaan(pertanyaan.concat(sectionPertanyaan[inn+1]))
                            
                            }else{
                                setPertanyaan(pertanyaan.concat(masterPertanyaan[i+1]))
                            
                            }
                        }else{
                            setPertanyaan(pertanyaan.concat(masterPertanyaan[i+1]))
                        }
                        
                        setDisplay(1)
                    }else{
                        setPertanyaan(pertanyaan.concat(""))
                        setDisplay(2)
                        
                    }
                    // setPertanyaan(pertanyaan)
                    setPage(indexPage)
                }else{
                    var data = []
                    for(let a = 0 ; a< pertanyaan.length; a++){
                        if(pertanyaan[a].section == 0 ){
                            data.push(pertanyaan[a])
                        }
                    }
                    var i = masterPertanyaan.findIndex(function(item, i){
                        return item.id === pertanyaan[pertanyaan.length-1].id
                    });
                    if(masterPertanyaan.length > i+1){
                        var inn = sectionPertanyaan.findIndex(function(item, i){
                            return item.section === pertanyaan[pertanyaan.length-1].section && item.id_pertanyaan === pertanyaan[pertanyaan.length-1].id
                        });
                        alert(inn)
                        if(inn != -1){
                            if(sectionPertanyaan[inn+1].section == sectionPertanyaan[inn].section){
                                setPertanyaan(pertanyaan.concat(sectionPertanyaan[inn+1]))
                                alert(inn)
                            }else{
                                alert("tao")
                                setPertanyaan(pertanyaan.concat(masterPertanyaan[i+1]))    
                            }
                        }else{
                            alert("sasa")
                            console.log(masterPertanyaan[i+1])
                            setPertanyaan(pertanyaan.concat(masterPertanyaan[i+1]))
                        }
                        // // if()
                        
                        // setDisplay(1)
                        // var data = []
                        // for(let a = 0 ; a< pertanyaan.length; a++){
                        //     if(pertanyaan[a].section == 0 ){
                        //         data.push(pertanyaan[a])
                        //     }
                        // }
                        // var index = masterPertanyaan.findIndex(function(item, i){
                        //     return item === data[data.length-1]
                        // });
                        // console.log(index)
                        // console.log(masterPertanyaan.length)
                        
                        // if(masterPertanyaan.length > index+1){
                            // setPertanyaan(pertanyaan.concat(masterPertanyaan[index+1]))
                            // setPage(indexPage)
                            // setDisplay(1)
                        // }else{
                        //     setPertanyaan(pertanyaan.concat(""))
                        //     setPage(indexPage)
                        //     setDisplay(2)                   
                        // }
                    }else{
                        setPertanyaan(pertanyaan.concat(""))
                        setPage(indexPage)
                        setDisplay(2)                   
                    }
                }
            }
        }
        // console.log(pertanyaan)
        // console.log(jawaban)
    }
    const previous = ()=>{
        var indexPage = page-1
        setDisplay(1)
        if(indexPage>=0){
            setPage(indexPage)
            if(indexPage == 0){
                setDisplay(0)
            }
        }
        console.log(pertanyaan)
        console.log(jawaban)
    }
    const save = async(e)=>{
        e.preventDefault()
        const array =[]
        for(let a = 0 ; a < pertanyaan.length-1;a++){
            
            array.push({
                id_penyebaran: location.state.id_penyebaran,
                id_mahasiswa : token,
                id_kuesioner:myparam,
                id_pertanyaan: pertanyaan[a].id,
                jawaban : jawaban[a]
            
            })
            
        }
        await axios.post('http://localhost:5000/jawaban',array)
        history.push("/list")
    }
    const displaySubmit =()=>{
        if(display==0){
            return(
                <div class=" row">
                    <div class="col-6">
                    <button type="button" onClick={next}class="btn btn-white">Selanjutnya</button>
                        {/* <button onClick={clickBerikutnya} class="btn btn-white">Selanjutnya</button> */}
                    </div>
                    {/* <div class="col-6 text-right">
                        <button onClick={clear} class="btn btn-secondary">Hapus Jawaban</button>
                    </div> */}
                </div>
            )
        }else if(display == 1){
            return(
                <div class=" row">
                    <div class="col-6">
                        <button type="button" onClick={previous} class="btn btn-white">Kembali</button>
                        <button type="button" onClick={next}class="btn btn-white">Selanjutnya</button>
                    </div>
                    {/* <div class="col-6 text-right">
                        <button onClick={clear} class="btn btn-secondary">Hapus Jawaban</button>
                    </div> */}
                </div>
            ) 
        }else{
            return(
                <div class=" row">
                    <div class="col-6">
                        <button type="submit"    class="btn btn-primary">Kirim</button>
                        <button type="button" onClick={previous} class="btn btn-white">Kembali</button>
                        
                        {/* <button type="submit" value="Submit"  class="btn btn-primary">Kirim</button> */}
                    </div>
                    <div class="col-6 text-right">
                        {/* <button onClick={clear} class="btn btn-secondary">Hapus Jawaban</button> */}
                    </div>
                </div>
            )
        }
    }
    return(
        <>
            <div id="wrapper">
                <SideBarAdmin class1="nav-link "
                        class2="nav-link active"
                        class3="nav-link"
                        token={token}
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
                                <form  onSubmit={ save }>
                                    {quest()}
                                    {displaySubmit()}    
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