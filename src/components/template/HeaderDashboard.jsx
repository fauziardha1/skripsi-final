import React, { Component } from 'react';
import { Button,Modal } from 'react-bootstrap'
import axios from "axios";
import { useState, useEffect ,useLocation} from 'react'



const HeaderDashboard =({setToken,token})=>{
  
  const [total,setTotal] = useState(0)
  const [aktiv,setAktiv] = useState(0)

  let today = new Date()
    
  useEffect(() => {
    const fetchData = async ()=>{
      axios.get(`http://localhost:5000/kuesioner/title/mahsiswa/${token}`)
          .then(
              response=> {
                setTotal(response.data.message.length)
                let sum = 0
                for(let a = 0 ; a < response.data.message.length; a++){
                  if(today.toISOString().split('T')[0] < response.data.message[a].expired ){
                    sum++
                  }
                }
                setAktiv(sum)
                  
              }
          ).catch(err => console.log(err))
      }
      fetchData();
  }, []);
  return (
    <>
        
      <div class="row">
        {/* <div class="col-xl-6 col-md-6">
          <div class="card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0">Total Kuesioner Aktif</h5>
                  <span class="h2 font-weight-bold mb-0">{aktiv} Kuesioner</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                  <a ><i class="fas fa-business-time"></i></a>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-sm">
                 
                  
              </p>
            </div>
          </div>
        </div> */}
        
        <div class="col-xl-12 col-md-6">
          <div class="card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0">Total Kuesioener</h5>
                  <span class="h2 font-weight-bold mb-0">{total} Kuesioner</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                  <i class="far fa-list-alt"></i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-sm">
     
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
)
}

export default HeaderDashboard;