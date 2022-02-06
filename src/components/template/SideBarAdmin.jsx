import React,  { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
const SideBarAdmin = ({token,class1,class2,class3})=>{
  const [total,setTotal] = useState([])
  const [jawaban,setJawaban] = useState([])
  useEffect(() => {
    const getData = async () => {
      axios.get(`http://localhost:5000/jawaban/mahasiswa/${token}`)
      .then(
          response=> {
            
            var unique = [...new Set(response.data.message.map(item => item.id_penyebaran))];
                
              setJawaban(unique)
              // for(let a =0;a< response.data.message.length;a++){
              //   // if(response.data.message[a].expired >= Date().toISOString().split('T')[0]){
              //     console.log("wow")
              //     setTotal(20)
              //   // }
              // }
          }
      ).catch(err => console.log(err)) 
      axios.get(`http://localhost:5000/penyebaran/${token}`).
        then(response => {
          setTotal(response.data.message)
           
        }
        
      );
      
    }
    console.log(token)
    getData()
  },[])
  const getTotal=()=>{
    var sum = 0;
    console.log(total)
    console.log(jawaban)
    for(let a = 0 ; a < jawaban.length;a++){
    //   for(let b = 0 ; b < total.length;b++){
    //     if(total[b].section == jawaban[a]){
    //       sum++
    //     }
    //   }
    }
    return sum
  }
  return(
    <>
      <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div class="scrollbar-inner">
          {/* <!-- Brand --> */}
          <div class="sidenav  align-items-center">
            <div class="navbar-brand"></div>
            {/* <a class="navbar-brand" href="javascript:void(0)">
              <img src="assets/img/brand/blue.png" class="navbar-brand-img" alt="..."/>
            </a> */}
          </div>
          <div class="navbar-inner">
            {/* <!-- Collapse --> */}
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
              {/* <!-- Nav items --> */}
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link className={class1} to={"./"}>
                  {/* <a class="nav-link active" href="examples/dashboard.html"> */}
                    <i class="ni ni-bullet-list-67 text-primary"></i>
                    <span class="nav-link-text">Kuesioner Anda</span>
                  {/* </a> */}
                </Link>
                </li>
                <li class="nav-item">
                <Link className={class2} to={"./list"}>

                  {/* <a class="nav-link" href="examples/icons.html"> */}
                    <i class="ni ni-ruler-pencil text-orange"></i>
                    <span class="nav-link-text">Daftar Kuesioner  </span>
                    <span class="badge badge-danger" style={{position: "absolute",right: "6px"}}>
                      {
                        getTotal()!==0? 
                        <>
                          {getTotal()}
                        </>:
                        <>
                          {""}
                        </>
                      }
                    </span>
                  {/* </a> */}
                  </Link>
                </li>
                <li class="nav-item">
                <Link className={class3} to={"./profil"}>

                  {/* <a class="nav-link" href="examples/icons.html"> */}
                  <i class="fa fa-user me-sm-1 text-success"></i>
                  <span class="nav-link-text">Biodata Anda </span>
                  {/* </a> */}
                  </Link>
                </li>
                
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default SideBarAdmin;