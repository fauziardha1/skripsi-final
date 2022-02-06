import React, { Component } from 'react';
const TextAnswer = ({id,jawaban,setIndex,setJawaban,idOp,setIdOp}) => {
  const handleText =(e)=>{
    const arr = [...jawaban];arr[setIndex]=e.target.value;setJawaban(arr)
    const arr1 = [...idOp] ;arr1[setIndex] = {id:""};setIdOp(arr1)    
  }
  return(
    <> 
      <div class="row">  
        <div class="col-sm-12 col-7">
          <div class="form-group">
            <textarea placeholder="Form description" defaultValue={jawaban[setIndex]} class="form_name form-control" id="exampleFormControlTextarea1" onChange={ handleText } required></textarea>
          </div>
        </div>
      </div> 
    </>
  )
}


export default TextAnswer;