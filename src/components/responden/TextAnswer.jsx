import React, { Component } from 'react';
import axios from "axios";
import  { useState,useEffect } from 'react';

import Close from "@material-ui/icons/Close";
const TextAnswer = ({id_pertanyaan,textJawaban}) => {
  const [jawaban, setJawaban] = useState([]);
    
  useEffect(() => {
    const fetchData = async ()=>{
      axios.get(`http://localhost:5000/jawaban/pertanyaan/${id_pertanyaan}`)
          .then(
              response=> {
                setJawaban(response.data.message)
              }
          ).catch(err => console.log(err))
      }
      fetchData();
  }, []);
  const quest  =(index) => {
    
    return(
      <>
        <tr>
            <th >
                <p class="m-0">{jawaban[index].jawaban}</p>
            </th>
        </tr>
      </>
    )
}
    return(
      <> 
            <div class="card">
                <div class=" card-header border-0">
                    <div class="row">  
                        <div class="col-sm-12 col-7">
                            <div class="form-group">
                                {/* <div class="form-control  form_title"> */}
                                    <p class="  form_title_grafik ml-2"> {textJawaban}</p>
                                    <small class="ml-2 form_litle ">{jawaban.length} Responden</small>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    
                    <div class="table-responsive" style={{maxHeight: "300px",maxWidth:"100%",overflow: "scroll"}}>  
                      <table class="table align-items-center table-flush ">
                          <tbody class="list">
                              
                               {
                                jawaban.map((que,i)=>(
                                    <>
                                        {quest(i)}  
                                    </>
                                    
                                ))
                            }
                          </tbody>
                      </table>
                  </div> 
            </div>
        </div>
        
      </>
    )
  }
  
// class TextAnswer extends Component {

//   render() {

//     return (
//         <>
//             <div class="row">  
//                 <div class="col-sm-12 col-7">
//                     <div class="form-group">
//                         <input placeholder="Form description" class="form_name form-control" id="exampleFormControlTextarea1"/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
//   }
// }


export default TextAnswer;