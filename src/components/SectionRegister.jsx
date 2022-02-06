import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

const SectionRegister = ({setToken})=>{
  const [nim, setNim] = useState('');
  const [inCorrectNim, setInCorrectNim] = useState('');
    
  const [password, setPassword] = useState('');
  const [email,setEmail]=useState('')  
  
  const submitRegister = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/register',{
        nim: nim,
        password: password,
        email:email
    }).then((response) => {
        if(response.data.message=="mahasiswa sudah mendaftar"){
          setInCorrectNim("Nim Sudah Mendaftar")
        }else if(response.data.message=="nim tidak tersedia"){
          setInCorrectNim("Nim Tidak Terdaftar Di database")
        }
      }) ;
    
  }
  
    return(
    <>
      <div class="main-content">
        <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
        </div>
        <div class="container mt--8 pb-5">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-secondary border-0 mb-0">
                        <div class="card-body px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Register</small>
                            </div>
                            <form onSubmit={ submitRegister }>
                              <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                  </div>
                                  <input class="form-control" placeholder="Nim" type="number" onChange={ (e) => setNim(e.target.value) }/>
                                </div>
                                <small style={{color:"red"}}>{inCorrectNim}</small>
                              </div>
                              <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                  </div>
                                  <input class="form-control" placeholder="Email" type="email" onChange={ (e) => setEmail(e.target.value) }/>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                  </div>
                                  <input class="form-control" placeholder="Password" type="password" onChange={ (e) => setPassword(e.target.value) }/>
                                </div>
                              </div>
                              <div class="text-center">
                                <button  type="submit" value="Submit" class="button is-primary btn btn-primary my-4">Create account</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <footer class="py-5 bg-gradient-primary" id="footer-main">
          <div class="container">
          
          </div>
      </footer>
      
    </>
  )
  // const [nim, setNim] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [inCorrectNim, setInCorrectNim] = useState('');
  //   const [inCorrectPassword, setInCorrectPassword] = useState('');
    
  //   const submitLogin = async (e) => {
  //       e.preventDefault();
  //       await axios.post('http://localhost:5000/login',{
  //           nim: nim,
  //           password: password
  //       }).then((response) => {
  //           if(response.data.message == "password salah"){
  //               // setShow(true);
  //               setInCorrectPassword("password salah")
  //               setInCorrectNim("")
  //           }else if (response.data.message=="nim tidak tersedia"){
  //               // setShow(true);
  //               setInCorrectPassword("")
  //               setInCorrectNim("nim tidak tersedia")
  //           }else{
  //               setToken({
  //                   "token": response.data.message
  //               });
  //           }
            
  //         }) ;
        
  //   }
 
  //   return (
  //       <>
  //           <div class="main-content">
  //               <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                    
  //               </div>
  //               <div class="container mt--8 pb-5">
  //                   <div class="row justify-content-center">
  //                       <div class="col-lg-5 col-md-7">
  //                           <div class="card bg-secondary border-0 mb-0">
  //                               <div class="card-body px-lg-5 py-lg-5">
  //                                   <div class="text-center text-muted mb-4">
  //                                       <small>Login</small>
  //                                   </div>
  //                                   <form onSubmit={ submitLogin }>
  //                                       <div class="form-group mb-3">
  //                                       <div class="input-group input-group-merge input-group-alternative">
  //                                           <div class="input-group-prepend">
  //                                           <span class="input-group-text"><i class="ni ni-email-83"></i></span>
  //                                           </div>
  //                                           <input class="form-control" placeholder="Nim" type="number"  onChange={ (e) => setNim(e.target.value) }/>
  //                                       </div>
  //                                       <small style={{color:"red"}}>{inCorrectNim}</small>
  //                                       </div>
  //                                       <div class="form-group">
  //                                       <div class="input-group input-group-merge input-group-alternative">
  //                                           <div class="input-group-prepend">
  //                                           <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
  //                                           </div>
  //                                           <input class="form-control" placeholder="Password" type="password" onChange={ (e) => setPassword(e.target.value) }/>
                                            
  //                                       </div>
  //                                       <small style={{color:"red"}}>{inCorrectPassword}</small>
  //                                       </div>
  //                                       <div class="custom-control custom-control-alternative custom-checkbox">
  //                                       <input class="custom-control-input" id=" customCheckLogin" type="checkbox"/>
  //                                       </div>

  //                                       <div class="text-center">
  //                                       <button  type="submit" value="Submit" class="button is-primary btn btn-primary my-4">Sign in</button>
  //                                       </div>
  //                                   </form>
  //                               </div>
  //                           </div>
  //                       </div>
  //                   </div>
  //               </div>
  //           </div>
  //           <footer class="py-5 bg-gradient-primary" id="footer-main">
  //               <div class="container">
                
  //               </div>
  //           </footer>
            

            
  //       </>
  //   )
}


export default SectionRegister;