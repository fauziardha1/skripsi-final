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
  return(
    <>
    {/* <h1>{props.id}</h1> */}
    <div class="card">
        <div class=" card-body">
           <div class="row">  
              <div class="col-sm-12 col-7 ">
                <div class="form-group">
                  <p style={{fontSize:"30px"}}class="form-control form_name">{title.title}</p>
                </div>
              </div>
              <div class="col-sm-12 col-7 mt-3">
              <div class="form-group">
                  <textarea required defaultValue={title.deskripsi} class="form_name form-control" disabled  style={{whiteSpace:"pre-line",background:"white",textareaHeight: "38"}} id="exampleFormControlTextarea1"></textarea>
              </div>
            </div>
          </div>
          {/* <div class="row">  
            <div class="col-sm-12 col-7">
              <div class="form-group">
                  <p class="form_name form-control" style={{whiteSpace:"pre-line"}}>{title.deskripsi}</p>
                  <textarea defaultValue={title.deskripsi} class="form_name form-control" style={{whiteSpace:"pre-line"}}onChange={ handleDeskripsi } id="exampleFormControlTextarea1"></textarea>
              </div>
            </div>
          </div> */}
        </div>
    </div>
    </>
  )
}


export default Title;