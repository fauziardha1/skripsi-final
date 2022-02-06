import  { useState,useEffect } from 'react';
import Close from "@material-ui/icons/Close";
import axios from "axios";
const Checkboxes  = ({id}) => {
    const myparam = id;
    const [option, setOption] = useState([]);
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
      }, []);
    const onOptions = (e)=>{
        axios.post("http://localhost:5000/kuesioner/options", {
            id_pertanyaan: myparam,
            option: "option",
            }).then((response) => {
                setOption(
                    option.concat(response.data.message)
                );
            })
        // alert("a")
        // console.log(option);
    }
    function onClose(index){
        alert(option[index].id)
        axios.delete(`http://localhost:5000/kuesioner/options/${option[index].id}`)
        setOption( 
            option.filter((e, i) => {
                return i !== index
            })
        );
        
    }
    const handletext= init => (e)=>{
        const Title = e.target.value
        axios.patch(`http://localhost:5000/kuesioner/options/${init}`,{
            option : Title
        });
      }
   
    const renderOption =  (index) => {
        if(option[index]){
            return(
                <div class="row" style={{marginBottom:"20px"}}>  
                    <div class="col-sm-10 col-7">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value={option[index].option} onChange={handletext(option[index].id)}  disabled/>
                            <label class="form-check-label" for="exampleRadios1">
                                <input type="text" defaultValue={option[index].option} onChange={handletext(option[index].id)} class="form_name" />
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-2 col-7">
                        <a onClick={() => onClose(index)} value={index} >
                            <Close style={{width:"50px"}}/>
                        </a>
                    </div>
                </div> 
                // <h1>{myparam}</h1>
                
            )
        }
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
            <div class="row" style={{marginBottom:"20px"}}>  
                <div class="col-sm-10 col-7">
                    <div class="form-check disabled">
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                        <label class="form-check-label" for="exampleRadios3">
                            <a   onClick={onOptions}>
                                Add Option
                            </a>
                        </label>
                    </div>
                </div>
                <div class="col-sm-2 col-7">
                    {/* <Close style={{width:"50px"}}/> */}
                </div>
            </div>
        </>
    )
}

export default Checkboxes;
// import  { useState,useEffect } from 'react';
// import Close from "@material-ui/icons/Close";
// import axios from "axios";

// const Checkboxes  = ({id,indexPertanyaan,onClose1,index1,handletext1}) => {
//     const myparam = id;
//     const [option, setOption] = useState([]);
//     useEffect(() => {
//         const fetchData = async ()=>{
//           axios.get(`http://localhost:5000/kuesioner/options/${myparam}`)
//               .then(
//                   response=> {
//                     //   console.log(response.data.message[0])
//                     setOption(response.data.message)

//                   }
//               ).catch(err => console.log(err))
//           }
//           fetchData();
//       }, []);
//     const onOptions = (e)=>{
//         axios.post("http://localhost:5000/kuesioner/options", {
//             id_pertanyaan: myparam,
//             option: "option",
//             }).then((response) => {
//                 setOption(
//                     option.concat(response.data.message)
//                 );
//             })
//         // alert("a")
//         // console.log(option);
//     }
//     function onClose(index){
//         alert(option[index].id)
//         axios.delete(`http://localhost:5000/kuesioner/options/${option[index].id}`)
//         setOption( 
//             option.filter((e, i) => {
//                 return i !== index
//             })
//         );
        
//     }
//     const handletext= init => (e)=>{
//         const Title = e.target.value
//         axios.patch(`http://localhost:5000/kuesioner/options/${init}`,{
//             option : Title
//         });
//       }
   
//     const renderOption =  (index) => {
//         if(option[index]){
//             return(
//                 <div class="row" style={{marginBottom:"20px"}}>  
//                     <div class="col-sm-10 col-7">
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value={option[index].option} onChange={handletext(option[index].id)}  disabled/>
//                             <label class="form-check-label" for="exampleRadios1">
//                                 <input type="text" defaultValue={option[index].option} onChange={handletext1(option[index].id)} class="form_name" />
//                             </label>
//                         </div>
//                     </div>
//                     <div class="col-sm-2 col-7">
//                         <a onClick={() => onClose(index)} value={index} >
//                             <Close style={{width:"50px"}}/>
//                         </a>
//                     </div>
//                 </div> 
//                 // <h1>{myparam}</h1>
                
//             )
//         }
//     }
//     return(
//         <>

//             <div class="card">
//                 <div class=" card-header border-0">
                                    
//                     <div class="row">  
//                         <div class="col-sm-11 col-7">
//                             <div class="form-group">
//                             <input type="text"  class="form-control form_name form_title" defaultValue={indexPertanyaan[index1].pertanyaan} onChange={handletext(indexPertanyaan[index1].id)} />
//                             </div>
//                         </div>
//                         <div class="col-sm-1 col-7">
//                             <a onClick={() => onClose1(index1,indexPertanyaan[index1].id)} value={index1} class=" btn  ">
//                                 <Close/>
//                             </a>
//                         </div>
//                     </div>
                    
//                     {
//                         option.map((que,i)=>(
//                             <>
//                                 {renderOption(i)}  
                                
//                             </>
                            
//                         ))
//                     }
//                     <div class="row" style={{marginBottom:"20px"}}>  
//                         <div class="col-sm-10 col-7">
//                             <div class="form-check disabled">
//                                 <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
//                                 <label class="form-check-label" for="exampleRadios3">
//                                     <a   onClick={onOptions}>
//                                         Add Option
//                                     </a>
//                                 </label>
//                             </div>
//                         </div>
//                         <div class="col-sm-2 col-7">
//                             {/* <Close style={{width:"50px"}}/> */}
//                         </div>
//                     </div>

//                 </div>
//             </div>



            
//         </>
//     )
// }

// export default Checkboxes;