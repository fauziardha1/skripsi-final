import { useState, useEffect } from 'react'
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import SectionDashboard from '../components/SectionDashbord';
import HeaderDashboard from '../components/template/HeaderDashboard';
import CardInfo from '../components/CardInfo';
import Table from '../components/Table';
import axios from "axios";
// import { useHistory, useParams } from 'react-router-dom';
import {
    useHistory
  } from "react-router-dom";
  
const Dashboard = ({setToken,token}) => {
        
    useEffect(() => {
        
    }, []);
    return (
        <>
        <div id="wrapper">
                
                <SideBarAdmin
                    class1="nav-link active"
                    class2="nav-link "
                    class3="nav-link"
                    token={token}
                />
                {/* <SectionAdmin/> */}
                <div class="main-content" id="panel">
                    <HeaderAdmin setToken={setToken} token={token}/>
                    <SectionDashboard/>
                    <div class="header bg-primary pb-6">
                        <div class="container-fluid">
                            <div class="header-body">
                                <div class="row align-items-center py-4">
                                    <div class="col-lg-6 col-7">
                                        
                                    </div>
                                    <div class="col-lg-6 col-5 text-right">
                                    </div>
                                </div>
                                <HeaderDashboard setToken={setToken} token={token}/>
                            </div>
                        </div>
                    </div> 
                    <div class="container-fluid mt--6">
            
                        <div class=" row">
                            <div class="col">
                                <Table setToken={setToken} token={token}/>                            
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </>
    )
}
  export default Dashboard;