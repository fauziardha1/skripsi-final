import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
const HeaderAdmin = ({setToken,token}) => {
    // const [nim, setNim] = useState('');
    // const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const history = useHistory();
    useEffect(() => {
        mahasiswa();
    }, []);
    const logout = async (e) => {
        e.preventDefault();
        // await axios.get("http://localhost:5000/logout")
        // history.push("/login");
        // setPasswordss("a")
        setToken("")
    }
    // var session
    var mahasiswa =  () => {
        // const id =   axios.get(`http://localhost:5000/login/session`);
         axios.get(`http://localhost:5000/mahasiswa/${token}`).then( (response) =>{
            setName(response.data.message[0].name) 
         });
        // setName(response.data.message[0].name);
        // alert(response.data.message[0].id)
        console.log()
        // setToken("")
    }
    return (
        <>
         <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
             <div class="container-fluid">
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
               
                     <ul class="navbar-nav align-items-center  ml-md-auto ">
                         <li class="nav-item d-xl-none">
                             <div class="pr-3 sidenav-toggler sidenav-toggler-dark" >
                                 <div class="sidenav-toggler-inner">
                                 <i class="sidenav-toggler-line"></i>
                                 <i class="sidenav-toggler-line"></i>
                                 <i class="sidenav-toggler-line"></i>
                                 </div>
                             </div>
                         </li>
                        
            
                     </ul>
                     <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
                         <li class="nav-item dropdown">
                            <a class="nav-link pr-0" onClick={ logout } href="#" >
                                <i class="fas fa-sign-out-alt"></i>
                            </a>    
                         </li>
                     </ul>
                     <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
                         <li class="nav-item dropdown">
                         <a class="nav-link pr-0" href="#" >
                             <div class="media align-items-center">
                             <div class="media-body  ml-2  d-none d-lg-block">
                                 <span class="mb-0 text-sm  font-weight-bold">{name}</span>
                             </div>
                             </div>
                         </a>
                         </li>
                     </ul>
                 </div>
             </div>
         </nav>
         </>
    )
}
 
// class HeaderAdmin extends Component {

//   render() {

//     return (
//         <>
//         <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
//             <div class="container-fluid">
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
               
//                     <ul class="navbar-nav align-items-center  ml-md-auto ">
//                         <li class="nav-item d-xl-none">
//                             <div class="pr-3 sidenav-toggler sidenav-toggler-dark" >
//                                 <div class="sidenav-toggler-inner">
//                                 <i class="sidenav-toggler-line"></i>
//                                 <i class="sidenav-toggler-line"></i>
//                                 <i class="sidenav-toggler-line"></i>
//                                 </div>
//                             </div>
//                         </li>
                        
            
//                     </ul>
//                     <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
//                         <li class="nav-item dropdown">
//                         <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             <div class="media align-items-center">
//                             <span class="avatar avatar-sm rounded-circle">
//                                 <img alt="Image placeholder" src="./assets/img/theme/team-4.jpg"/>
//                             </span>
//                             <div class="media-body  ml-2  d-none d-lg-block">
//                                 <span class="mb-0 text-sm  font-weight-bold">John Snow</span>
//                             </div>
//                             </div>
//                         </a>
//                         <div class="dropdown-menu  dropdown-menu-right ">
//                             <div class="dropdown-header noti-title">
//                             <h6 class="text-overflow m-0">Welcome!</h6>
//                             </div>
                            
//                             <div class="dropdown-divider"></div>
//                             <a href="#!" class="dropdown-item">
//                             <i class="ni ni-user-run"></i>
//                             <span>Logout</span>
//                             </a>
//                         </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         </>
//     )
//   }
// }



export default HeaderAdmin;