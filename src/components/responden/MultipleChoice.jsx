import React, { Component } from 'react';
import axios from "axios";
import  { useState,useEffect } from 'react';
import { Doughnut, Pie } from "react-chartjs-2";

var randomColor = require('randomcolor');   

const MultipleChoice = ({id_pertanyaan,textJawaban}) => {
    const [jawaban, setJawaban] = useState([]);
    const [responden,setResponden]=useState([]);
    const [totalResponden,setTotalResponden]=useState(0);
    const [label,setLabel] = useState([])
    const [data,setData] = useState([])
    const [color,setColor] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      axios.get(`http://localhost:5000/jawaban/pertanyaan/${id_pertanyaan}`)
          .then(
              response=> {
                var clean = response.data.message.filter((arr, index, self) =>
                index === self.findIndex((t) => (t.jawaban === arr.jawaban )))
                setTotalResponden(response.data.message.length)
                let sum = 0;
                let initLabel=[];
                let initData=[];
                let initColor=[];
                for(let b = 0; b <  clean.length; b++){
                    sum=0;
                    for(let a = 0; a <  response.data.message.length; a++){
                        if(response.data.message[a].jawaban ==  clean[b].jawaban){
                            sum++;
                        }
                    }
                    initLabel[b]=clean[b].jawaban
                    initData[b]=sum
                    initColor[b]=randomColor({
                        luminosity: 'light',
                    })
                }
                setLabel(initLabel)
                setData(initData)
                setColor(initColor)
                setJawaban(clean)
                  
            }
              
          ).catch(err => console.log(err))
      }
      fetchData();
  }, []);
  const grafik = {
        maintainAspectRatio: false,
        responsive: false,
        labels: label,
        datasets: [
        {
            data: data,
            backgroundColor: color,
        }
        ]
    };
  const quest  =(index) => {
    console.log(jawaban)
    return(
      <>
        <tr>
            <th >
                <p class="m-0">{jawaban[index].jawaban} ({jawaban[index].total})</p>
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
                        <p class="  form_title_grafik ml-2"> {textJawaban}</p>
                                    
                        <small class="form-control form_name">{totalResponden} Responden</small>
                        </div>
                    </div>
                </div>
                <div class="row">  
                    <div class="col-sm-12 col-7">
                        <div class="form-group">
                            <div style={{height: "300px", width: "300px",margin:"auto"}}>
                                <Pie data={grafik}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </>
    )
  }
  export default MultipleChoice;