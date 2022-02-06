import React, { Component } from 'react';
import Close from "@material-ui/icons/Close";
const ShortAnswer = ({id,jawaban,setIndex,setJawaban,idOp,setIdOp}) => {
    const handleText =(e)=>{
      const arr = [...jawaban];arr[setIndex]=e.target.value;setJawaban(arr)
      const arr1 = [...idOp] ;arr1[setIndex] = {id:""};setIdOp(arr1)   
    }
    return(
      <> 
        <div class="row">  
          <div class="col-sm-12 col-7">
            <div class="form-group">
                <input placeholder="Form description" defaultValue={jawaban[setIndex]} class="form_name form-control" id="exampleFormControlTextarea1"onChange={ handleText } maxlength="200" required/>
            </div>
          </div>
        </div> 
      </>
    )
  }
  
// class ShortAnswer extends Component {

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


export default ShortAnswer;