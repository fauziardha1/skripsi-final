import  { useState,useEffect } from 'react';
import Close from "@material-ui/icons/Close";
import axios from "axios";
const MultipleChoice  = ({id,jawaban,setIndex,setJawaban,pertanyaan,setPertanyaan}) => {
    const myparam = id;
    const [option, setOption] = useState([]);
    const [initSection,setInitSection] = useState([]);
    const [initData,setInitData] = useState([{}]);
    useEffect(() => {
        const fetchData = async ()=>{
          axios.get(`http://localhost:5000/kuesioner/options/${myparam}`)
              .then(
                  response=> {
                    //   console.log(response.data.message[0])
                    setOption(response.data.message)

                  }
              ).catch(err => console.log(err))
          }
          fetchData();
          let array=[]
      }, [option]);
    
    const pushJawaban = (id,id_pertanyaan) =>(e)=>{
        // console.log(id+"   "+id_pertanyaan)
        const arr = [...jawaban];arr[setIndex]=e.target.value;setJawaban(arr)
        const initResult =[] ;
        axios.get(`http://localhost:5000/options/section/jawaban/${id}`)
        .then(
        result=> {
            initResult = result
            // if(result.data.message.length !== 0){
            //     // console.log(result.data.message[0].se)
            //     axios.get(`http://localhost:5000/kuesioner/pertanyaan/section/${result.data.message[0].section}`)
            //     .then(
            //         response=> {
            //             var index = 0
            //             var d = {
            //                 id_pertanyaan : id_pertanyaan,
            //                 id_option :id,
            //                 pertanyaan : pertanyaan
            //             }
            //             var boolean = true
            //             for(var i = 0 ; i < initData.length;i++){
            //                 console.log("tahu")
                        
            //                 if(initData[i].id_pertanyaan == d.id_pertanyaan){
            //                     console.log("a")
            //                     // if(initData[i].id_option != d.id_option){
            //                         // console.log("b")
            //                         const inisiasi = initData[i].pertanyaan.concat(response.data.message) 
            //                         setPertanyaan(inisiasi)
                                
            //                     // }else{
            //                     //     console.log("c")
            //                     //     setPertanyaan(initData[i].pertanyaan)
                                
            //                     // }
            //                     break;
            //                 }else{
            //                     console.log("b")
            //                     var dataPer =pertanyaan.concat(response.data.message)
            //                     setPertanyaan(dataPer)
            //                     setInitData([...initData,d])
                                
            //                 }
            //             }
            //             // else{
            //                 // initData.splice(0, 1)
            //                 // console.log(initData[index].pertanyaan)
            //             // }
            //             // setInitSection(pertanyaan)
                        
            //         }
            //     ).catch(err => console.log(err))
            // }else{
            //     setPertanyaan(pertanyaan)
            //     // console.log("wtf")
            // }
        }).catch(err => console.log(err))
        console.log(initResult)

    }
    const renderOption =  (index) => {
        if(option[index]){
            return(
                <div class="row" style={{marginBottom:"20px"}}>  
                    <div class="col-sm-12 col-7">
                        <div class="form-control form_name ">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name={option[index].id_pertanyaan} id="exampleRadios1" value={option[index].option} onClick={pushJawaban(option[index].id,option[index].id_pertanyaan)} />
                                <label class="form-check-label" for="exampleRadios1">
                                    <p>{option[index].option}</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                </div> 
                // <h1>{myparam}</h1>
                
            )
        }
    }
    return(
        <>
            {/* <h1>{jawaban}</h1> */}
            {
                option.map((que,i)=>(
                    <>
                        {renderOption(i)}  
                        
                    </>
                    
                ))
            }
            
        </>
    )
}


export default MultipleChoice;