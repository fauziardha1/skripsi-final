import React, { Component ,useEffect, useState} from 'react';
import Close from "@material-ui/icons/Close";
import { Link, useHistory } from 'react-router-dom'
import axios from "axios";
const Title = (props) => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    data();
}, []);

  const data = async () => {
    const response = await axios.get(`http://localhost:5000/kuesioner/title/${props.id}`);
    setTitle(response.data.message[0]);
  }
  // function handleNim(event){
  //    axios.patch(`http://localhost:5000/kuesioner/title/${props.id}`,{
  //       title: event.target.value
  //   });
  // }
  const handleNim =(e)=>{
    // e.preventDefault();
    const Title = e.target.value
    axios.patch(`http://localhost:5000/kuesioner/title/${props.id}`,{
        title: Title
    });
  }
  const handleDeskripsi =(e)=>{
    // e.preventDefault();
    const Title = e.target.value
    axios.patch(`http://localhost:5000/kuesioner/title/${props.id}`,{
        deskripsi: Title
    });
  }
  return(
    <>
    {/* <h1>{props.id}</h1> */}
      <div class="card">
        <div class=" card-header border-0">
           <div class="row">  
              <div class="col-sm-12 col-7">
                <div class="form-group">
                  <input type="text"   class="form-control form_name" defaultValue={title.title} id="exampleInputEmail1" onChange={ handleNim }  />
                </div>
              </div>
          </div>
          <div class="row">  
            <div class="col-sm-12 col-7">
              <div class="form-group">
                  <textarea defaultValue={title.deskripsi} class="form_name form-control" style={{whiteSpace:"pre-line"}}onChange={ handleDeskripsi } id="exampleFormControlTextarea1"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Title;