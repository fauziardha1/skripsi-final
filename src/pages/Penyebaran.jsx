import  { useState,useEffect } from 'react';
import SectionDashboard from '../components/SectionDashbord';
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import "../style/survey.css"
import { Link, useHistory ,useLocation} from 'react-router-dom'
import axios from "axios";
import { Doughnut, Pie } from "react-chartjs-2";
// import randomNumber from 'random-number';
import Title from '../components/responden/Title';
import MultipleChoice from '../components/responden/MultipleChoice';
import ShortAnswer from '../components/responden/ShortAnswer';
import Checkboxes from '../components/responden/Checkboxes';
import TextAnswer from '../components/responden/TextAnswer';
import CardKarakteristik from '../components/CardKarakteristik';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
var randomColor = require('randomcolor');   
const Penyebaran = ({setToken,token}) => {
    const [responden,setResponden] = useState(0);
    const [angkatan,setAngkatan] =useState(new Array(3).fill(""));
    const [gender,setGender] = useState(new Array(2).fill(""));    
    const [prodi,setProdi] =useState(new Array(15).fill(""));
    
    const [content,setContent] = useState(<CardKarakteristik angkatan={angkatan} setAngkatan={setAngkatan} gender={gender} setGender={setGender} prodi={prodi} setProdi={setProdi} responden={responden} setResponden={setResponden} />);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      const changeHandler = e => {
        setResponden({ value: e ? e.map(x => x.value) : [] });
        const data= { value: e ? e.map(x => x.value) : [] }
        console.log(data)
      };
    return(
        <>
        {responden.value[0]}
         <Select
        className="mt-4 col-md-6 col-offset-4"
        components={makeAnimated()}
        isMulti
        onChange={changeHandler}
        options={options}
        />
    </>
    )
}

export default Penyebaran;
  