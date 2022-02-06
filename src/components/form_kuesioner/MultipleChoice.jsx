import  { useState,useEffect } from 'react';
import Close from "@material-ui/icons/Close";
import axios from "axios";
const MultipleChoice  = ({id,jawaban,setIndex,setJawaban,kuesioner,idOp,setIdOp,section}) => {
    const myparam = id;
    const [option, setOption] = useState([]);
    const [sectionKuesioner, setSectionKuesioner] = useState([])
    useEffect(() => {
        
        const fetchData = async ()=>{
            axios.get(`http://localhost:5000//options/section/kuesioner/${kuesioner}`)
              .then(
                  response=> {
                    setSectionKuesioner(response.data.message)
                }
              ).catch(err => console.log(err))
            axios.get(`http://localhost:5000/kuesioner/options1/${myparam}`)
              .then(
                  response=> {
                    setOption(response.data.message)
                }
              ).catch(err => console.log(err))
          }
          fetchData();
          let array=[]
      }, []);
    
    
    const pushJawaban = (idPertanyaan,idOption)=>(e)=>{
        const arr = [...jawaban];arr[setIndex]=e.target.value;setJawaban(arr)
        const arr1 = [...idOp] ;arr1[setIndex] = {id:idOption};setIdOp(arr1)
        var index = section.findIndex(function(item, i){
            return item.id_option === idOption
        });
        for(let a = arr.length ; a>setIndex+1; a--){
            arr.pop();
            arr1.pop();

        }
        setJawaban(arr)
        setIdOp(arr1)
            
    }
    const OptionById=(index)=>{
        var data =[]
        for(var a = 0;a < option.length;a++){
            if(option[a].id_pertanyaan == myparam){
                data.push(
                    <>
                    <div class="row" style={{marginBottom:"20px"}}>  
                        <div class="col-sm-12 col-7">
                            <div class="form-control form_name ">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name={option[a].id_pertanyaan} checked={jawaban[setIndex] === option[a].option} id="exampleRadios1" value={option[a].option} onClick={pushJawaban(option[a].id_pertanyaan,option[a].id)} required/>
                                    <label class="form-check-label" for="exampleRadios1">
                                        <p>{option[a].option}</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </>
                )
            }
        }
        return data
    }
    const renderOption =  () => {
            return(
                <>
                {OptionById()} 
                </>
            )
        
    }
    return(
        <>
            {/* <h1>{jawaban}</h1> */}
            {
                // option.map((que,i)=>(
                    // <>
                        renderOption()  
                        
                    // </>
                    
                // ))
            }
            
        </>
    )
}


export default MultipleChoice;