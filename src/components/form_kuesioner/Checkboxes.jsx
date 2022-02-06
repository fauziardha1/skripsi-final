import  { useState,useEffect } from 'react';
import Close from "@material-ui/icons/Close";
import axios from "axios";
const Checkboxes  = ({id,jawaban,setIndex,setJawaban,idOp,setIdOp}) => {
    const myparam = id;
    const [option, setOption] = useState([]);
    const [boxCheck,setBoxCheck] = useState([new Array(3).fill(false)]);    
    const [jawabanCheck,setJawabanCheck] = useState([]);    
   
    useEffect(() => {
        const fetchData = async ()=>{
            console.log(id)
          axios.get(`http://localhost:5000/kuesioner/options/${myparam}`)
              .then(
                  response=> {
                    //   console.log(response.data.message[0])
                    setOption(response.data.message)
                    setBoxCheck(new Array(response.data.message.length).fill(false))
                    // setJawa  banCheck([new Array(response.data.message.length).fill("")])
                  }
              ).catch(err => console.log(err))
          }
          fetchData();
                    
        // console.log(check)
      }, []);
      
    const checkData=(i)=>{
        var array = jawaban[setIndex]
        var check = boxCheck
        var array1 = []
        if(array != undefined){
            array1 = array.split(','); 
            for (let a = 0; a < array1.length; a++) {
                for (let b = 0; b < option.length; b++) {
                    if(option[b].option == array1[a]){
                        check[b] = true;
                    }
                }
            }
        }
        // console.log(option)
        return check[i]

    }
    const handleCheck = (index) => {

        const updatedChecked = boxCheck.map((item, position) =>
            index === position ? !item : item
        );
        setBoxCheck(updatedChecked);
        // const arr = [...jawaban];arr[setIndex]=e.target.value;setJawaban(arr)
        const arrJawaban = [...jawaban];
        const arrCheckBox = new Array(option.length).fill("")
        for(let a = 0 ; a < updatedChecked.length;a++){
            if(updatedChecked[a]==true){
                arrCheckBox[a]=option[a].option
            }else{
                delete arrCheckBox[a]
            }
        }
        var init =arrCheckBox.filter(e => e !== undefined)
        // arrJawaban[setIndex]
        var text = "";
        for(let a = 0; a < init.length; a++){
            text+= init[a]
            if(a+1 < init.length){
                text += ","
            }
        }
        arrJawaban[setIndex] = text
        setJawaban(arrJawaban)
        const arr1 = [...idOp] ;arr1[setIndex] = {id:""};setIdOp(arr1)   

    };
    const renderOption =  (index) => {
            return(
                <div class="row" style={{marginBottom:"20px"}}>  
                    <div class="col-sm-12 col-7">
                        <div class="form-control form_name ">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"   
                                value={option[index].option}  checked={checkData(index)}
                                onChange={() => handleCheck(index)} 
                                required
                                />
                                <label class="form-check-label" for="exampleRadios1">
                                    <p>{option[index].option}</p>
                                    {/* <input type="text" defaultValue={option[index].option} class="form_name" /> */}
                                </label>
                            </div>
                        </div>
                    </div>
                </div> 
                // <h1>{myparam}</h1>
                
            )
        // }
    }
    return(
        <>

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

export default Checkboxes;