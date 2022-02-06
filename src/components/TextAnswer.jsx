import React, { Component } from 'react';
import Close from "@material-ui/icons/Close";
const TextAnswer = (props) => {
  
  return(
    <> 
      <div class="row">  
        <div class="col-sm-12 col-7">
          <div class="form-group">
            <textarea placeholder="Form description" class="form_name form-control" id="exampleFormControlTextarea1"></textarea>
          </div>
        </div>
      </div> 
    </>
  )
}


export default TextAnswer;

// import React, { Component } from 'react';
// import Close from "@material-ui/icons/Close";
// const TextAnswer = ({indexPertanyaan,onClose1,index1,handletext}) => {
  
//   return(
//     <> 
//     <div class="card">
//         <div class=" card-header border-0">
                            
//             <div class="row">  
//                 <div class="col-sm-11 col-7">
//                     <div class="form-group">
//                     <input type="text"  class="form-control form_name form_title" defaultValue={indexPertanyaan[index1].pertanyaan} onChange={handletext(indexPertanyaan[index1].id)} />
//                     </div>
//                 </div>
//                 <div class="col-sm-1 col-7">
//                     <a onClick={() => onClose1(index1,indexPertanyaan[index1].id)} value={index1} class=" btn  ">
//                         <Close/>
//                     </a>
//                 </div>
//             </div>
//             <div class="row">  
//               <div class="col-sm-12 col-7">
//                 <div class="form-group">
//                   <textarea placeholder="Form description" class="form_name form-control" id="exampleFormControlTextarea1"></textarea>
//                 </div>
//               </div>
//             </div>
//         </div>
//     </div>
       
//     </>
//   )
// }


// export default TextAnswer;