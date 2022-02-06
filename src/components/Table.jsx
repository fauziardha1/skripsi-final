import React, { Component } from 'react';
import { Link,useHistory,Redirect } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect ,useLocation} from 'react'

const Table = ({setToken,token}) => {
  const [formId, setFormId] = useState([]);
  const history = useHistory();

  const [kuesioner,setKuesioner] = useState([])
  
  const [total,setTotal] = useState([])
  useEffect(() => {
    const fetchData = async ()=>{
      axios.get(`http://localhost:5000/kuesioner/title/mahsiswa/${token}`)
          .then(
              response=> {
                setKuesioner(response.data.message)
                
              }
      ).catch(err => console.log(err))
      axios.get(`http://localhost:5000/totalJawaban/${token}`)
          .then(
              response=> {
                setTotal(response.data.message)
              }
      ).catch(err => console.log(err))
    }
      fetchData();
  }, []);
  const newKuesioner = (e)=>{
    // const data =
    let variable 
    axios.post("http://localhost:5000/kuesioner/title", {
    id_mahasiswa: token,
    title: "Title",
    deskripsi:"Deskripsi",
    }).then((response) => {
      history.push("/form", { id: response.data.message });
    }) 

  }
  
  const seeKuesioner = (index)=>(e)=>{
    // alert(index)kuesioner[index].id
    history.push("/form", {id:kuesioner[index].id})
    // <Redirect to={"/exam"}/>
  }
  
  const totalResponden = (index)=>{
    // var filteredObj = total.find(function(item, i){
    //   if(item.id_kuesioner === kuesioner[index].id){
    //     index = i;
    //     return i;
    //   }
    // });
    var res = []
    for(let a = 0 ; a < total.length; a++){
      if(total[a].id_kuesioner === kuesioner[index].id){
        res.push(total[a])
      }
    }
    const unique = [...new Set(res.map(item => item.id_penyebaran))];
    return unique.length
  }
  const display  =(index) => {

    if(kuesioner ){  
      // alert(index)  
        return(
          <>
              {/* {kuesioner[0].id} */}
            <tr>
                  
              <th scope="row">
                <div class="media align-items-center">
                  <div class="media-body">
                    <span class="name mb-0 text-sm">{kuesioner[index].title}</span>
                  </div>
                </div>
              </th>
              
              
              <td>
                <span class="badge badge-dot mr-4">
                  {/* <span class="status">{kuesioner[index].penyebaran === 0 ? <><span class="text-warning">Pending</span></>:<><span class="text-success">On Progress</span></>}</span> */}
                </span>
              </td>
              <td class="budget">
              {totalResponden(index)} /{kuesioner[index].responden}
              </td>
              <td class="text-right">
                <div class="dropdown">
                    <Link to={{
                    pathname:'/form', 
                    state: {
                        id: kuesioner[index].id
                    }
                }}>
                  <a class="btn btn-sm btn-icon-only text-light"  href="#" role="button" >
                  
                    <i class="fas fa-eye"></i>
                    
                    </a>
                  </Link>
                </div>
              </td>
            </tr>
          </>
        )
    }
}
  return (
    <>
      <div class="card">
          <div class=" card-header border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
              <h3 class="mb-0">Kuesioner</h3>
              </div>
              <div class="col-lg-6 col-5 text-right">
                {/* <Link to="/form"> */}
                  <a  onClick={newKuesioner} class="btn btn-sm btn-neutral">Tambah Survey</a>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="sort" data-sort="name">Kuseioner</th>
                  <th scope="col" class="sort" data-sort="status">Status</th>
                  <th scope="col">Responden</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list">
              
                {
                    kuesioner.map((que,i)=>(
                      <>
                        {display(i)}
                      </>
                    ))
                }
                
              </tbody>
            </table>
          </div>
          <div class="card-footer py-4">
            
          </div>
      </div>
    </>
  )
}

export default Table;