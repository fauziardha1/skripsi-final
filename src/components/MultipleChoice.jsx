import  { useState,useEffect } from 'react';
import Close from "@material-ui/icons/Close";
import axios from "axios";
import {Dropdown,DropdownButton} from 'react-bootstrap';
import Select from 'react-select';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Link, useHistory ,useLocation} from 'react-router-dom'

const MultipleChoice  = ({id,section,idIndex,idKuesioner,idSection,setIdSection,setInitKuesioner,initKuesioner,disPertanyaan,setDisPertanyaan,is,initIS,p,setP}) => {
    let history = useHistory(); 
    const myparam = id;
    const [option, setOption] = useState([]);
    const [sectionTitle,setSectionTitle] = useState(false)
    const [arrSection,setArrSection]=useState([])
    useEffect(() => {
        const fetchData = async ()=>{
            axios.get(`http://localhost:5000/kuesioner/options/${id}`)
              .then(
                  response=> {
                    //   console.log(response.data.message[0])
                    setOption(response.data.message)

                  }
              ).catch(err => console.log(err))
            axios.get(`http://localhost:5000/pertanyaan/section/${id}`)
                .then(
                    response=> {
                        //   console.log(response.data.message[0])

                        setArrSection(response.data.message)
                    }
                ).catch(err => console.log(err))
        }
          fetchData();
      }, []);
    const onOptions = (e)=>{
        axios.post("http://localhost:5000/kuesioner/options", {
            id_pertanyaan: myparam,
            option: "option",
            }).then((response) => {
                setOption(
                    option.concat(response.data.message)
                );
            })
    }
    function onClose(index){
        var data = is;
        data = data.filter(function(f) { return f !== is[index+1] })
        
        initIS(data)
        axios.delete(`http://localhost:5000/section/${option[index].id}/0`)
        axios.delete(`http://localhost:5000/kuesioner/options/${option[index].id}`)
        setOption( 
            option.filter((e, i) => {
                return i !== index
            })
        );
        
    }
    const handletext= init => (e)=>{
        const Title = e.target.value
        axios.patch(`http://localhost:5000/kuesioner/options/${init}`,{
            option : Title
        });
      }
    const Section =(index)=>{
        var sum = idSection+1
        initIS(is.concat(sum))
        setIdSection(sum)
        axios.post("http://localhost:5000/kuesioner/options/section", {
            id_kuesioner:idKuesioner,
            id_pertanyaan: myparam,
            id_option:index,
            section: idSection
        })
        history.push("/section",{
            id: idKuesioner,
            section:idSection,
            idsection:idSection,
            pageDis:is.length
        })

    }
    const renderOption =  (index) => {
        if(option[index]){
            var boolean = arrSection.findIndex(x => x.id_option ===option[index].id);
            if(boolean == -1){ 
                return(
                    <>
                    <div class="row" style={{marginBottom:"20px"}}>  
                        <div class="col-sm-8 col-7">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={option[index].option} onChange={handletext(option[index].id)}  disabled/>
                                <label class="form-check-label" for="exampleRadios1">
                                    <input type="text" defaultValue={option[index].option} onChange={handletext(option[index].id)} class="form_name" />
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 col-7">
                            <div class="row">
                                <div align="left" class="col-sm-8">
                                    
                                </div>

                                <div class="col-sm-1">
                                    <div class="input-group">
                                        <a  onClick={() => Section(option[index].id)} value={index} >
                                                
                                                <span class="btn-inner--icon">
                                                    <DragHandleIcon/>                        
                                                </span>
                                                
                                        </a>
                                    </div>
                                </div>
                                                                
                                <div align="left" class="col-sm-1">
                                    <a  onClick={() => onClose(index)} value={index} >
                                        <Close />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    </>
                    // <h1>{myparam}</h1>
                    
                )
            }else{
                return(
                    <>
                    <div class="row" style={{marginBottom:"20px"}}>  
                        <div class="col-sm-8 col-7">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={option[index].option} onChange={handletext(option[index].id)}  disabled/>
                                <label class="form-check-label" for="exampleRadios1">
                                    <input type="text" defaultValue={option[index].option} onChange={handletext(option[index].id)} class="form_name" />
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 col-7">
                            <div class="row">
                                <div class="col-sm-5">
                                    
                                </div>

                                <div class="col-sm-4">
                                    <div class="input-group">
                                        <p align="left">Section {boolean+1}</p>
                                    </div>
                                </div>
                                                                
                                <div class="col-sm-1">
                                    <a  onClick={() => onClose(index)} value={index} >
                                        <Close />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    </>
                    // <h1>{myparam}</h1>
                    
                )
            }
        }
    
    }
    return(
        <>
            {
                option.map((que,i)=>(
                    <>
                        {renderOption(i)}  
                        
                    </>
                    
                ))
            }
            <div class="row" style={{marginBottom:"20px"}}>  
                <div class="col-sm-10 col-7">
                    <div class="form-check disabled">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                        <label class="form-check-label" for="exampleRadios3">
                            <a   onClick={onOptions}>
                                Add Option
                            </a>
                        </label>
                    </div>
                </div>
                <div class="col-sm-2 col-7">
                    {/* <Close style={{width:"50px"}}/> */}
                </div>
                
            </div>

        </>
    )
}
export default MultipleChoice;
// import  { useState,useEffect } from 'react';
// import Close from "@material-ui/icons/Close";
// import axios from "axios";
// import {Dropdown,DropdownButton} from 'react-bootstrap';
// import Select from 'react-select';
  
// const MultipleChoice  = ({id,section,idIndex,idKuesioner,indexPertanyaan,onClose1,index1,handletext1}) => {
//     const myparam = id;
//     const [option, setOption] = useState([]);
//     useEffect(() => {
//         const fetchData = async ()=>{
//           axios.get(`http://localhost:5000/kuesioner/options/${myparam}`)
//               .then(
//                   response=> {
//                     //   console.log(response.data.message[0])
//                     setOption(response.data.message)

//                   }
//               ).catch(err => console.log(err))
//           }
//           fetchData();
//       }, []);
//     const onOptions = (e)=>{
//         axios.post("http://localhost:5000/kuesioner/options", {
//             id_pertanyaan: myparam,
//             option: "option",
//             }).then((response) => {
//                 setOption(
//                     option.concat(response.data.message)
//                 );
//             })
//     }
//     function onClose(index){
//         axios.delete(`http://localhost:5000/kuesioner/options/${option[index].id}`)
//         setOption( 
//             option.filter((e, i) => {
//                 return i !== index
//             })
//         );
        
//     }
//     const handletext= init => (e)=>{
//         const Title = e.target.value
//         axios.patch(`http://localhost:5000/kuesioner/options/${init}`,{
//             option : Title
//         });
//       }
//     const optionSection=(index)=>{
//         if(index>idIndex ){
//             if(id != section[index].id && section[index].type == "section" ){
//                 return(
//                     <>
//                         <option value={section[index].section} >Lanjut ke section {section[index].section}</option>
//                     </>
//                 )
//             }
//         }
//     }
//     const inputSection = (index,idOption)=>{
//         var boolean
//         axios.get(`http://localhost:5000/kuesioner/options/section/${myparam}/${idOption}`)
//         .then(
//             result=>{
//                 if(!result.data.message){
//                     axios.post("http://localhost:5000/kuesioner/options/section", {
//                         id_kuesioner:idKuesioner,
//                         id_pertanyaan: myparam,
//                         id_option:idOption,
//                         section: index
//                     })
//                 }else{
//                     axios.patch(`http://localhost:5000/kuesioner/options/section/${myparam}/${idOption}`, {
//                        section: index
//                     })
//                 }                
//             }
//         )
        
//     }
//     const renderOption =  (index) => {
        
//         if(option[index]){
//             return(
//                 <>
//                 <div class="row" style={{marginBottom:"20px"}}>  
//                     <div class="col-sm-11 col-7">
//                         <div class="form-check">
//                             <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={option[index].option} onChange={handletext(option[index].id)}  checked/>
//                             <label class="form-check-label" for="exampleRadios1">
//                                 <input type="text" defaultValue={option[index].option} onChange={handletext(option[index].id)} class="form_name" />
//                             </label>
//                         </div>
//                     </div>
//                     <div class="col-sm-1 col-7">
//                         <a onClick={() => onClose(index)} value={index} >
//                             <Close />
//                         </a>
//                     </div>
//                 </div> 
                
//                 </>
//                 // <h1>{myparam}</h1>
                
//             )
//         }
//     }
//     return(
//         <>
//             <div class="card">
//                 <div class=" card-header border-0">
                                    
//                     <div class="row">  
//                         <div class="col-sm-11 col-7">
//                             <div class="form-group">
//                             <input type="text"  class="form-control form_name form_title" defaultValue={indexPertanyaan[index1].pertanyaan} onChange={handletext1(indexPertanyaan[index1].id)} />
//                             </div>
//                         </div>
//                         <div class="col-sm-1 col-7">
//                             <a onClick={() => onClose1(index1,indexPertanyaan[index1].id)} value={index1} class=" btn  ">
//                                 <Close/>
//                             </a>
//                         </div>
//                     </div>
//                     {
//                         option.map((que,i)=>(
//                             <>
//                                 {renderOption(i)}  
                                
//                             </>
                            
//                         ))
//                     }
//                     <div class="row" style={{marginBottom:"20px"}}>  
//                         <div class="col-sm-10 col-7">
//                             <div class="form-check disabled">
//                                 <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
//                                 <label class="form-check-label" for="exampleRadios3">
//                                     <a   onClick={onOptions}>
//                                         Add Option
//                                     </a>
//                                 </label>
//                             </div>
//                         </div>
//                         <div class="col-sm-2 col-7">
//                             {/* <Close style={{width:"50px"}}/> */}
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
            
                

//         </>
//     )
// }
// // class MultipleChoice extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {option: [""]};
// //         this.onOptions = this.onOptions.bind(this);
      
// //     }
// //     onOptions(event) {
// //         const option = this.state.option;
// //         this.setState({
// //             option: option.concat(this.option)
// //         });
// //         // alert("C");
        
// //     }
// //     ondelete(index){
// //         this.setState({
// //         option: this.state.option.filter((e, i) => {
// //           return i !== index
// //         })
// //       }); 
// // }
// //     option(index){
// //         if(this.state.option[index] != "" ){
            
// //             return(
// //                 <div class="row" style={{marginBottom:"20px"}}>  
// //                     <div class="col-sm-10 col-7">
// //                         <div class="form-check">
// //                             <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
// //                             <label class="form-check-label" for="exampleRadios1">
// //                                 <input type="text" placeholder="Option 1" class="form_name" />
// //                             </label>
// //                         </div>
// //                     </div>
// //                     <div class="col-sm-2 col-7">
// //                         <a onClick={this.ondelete.bind(this, index)} value={index} >
// //                             <Close style={{width:"50px"}}/>
// //                         </a>
// //                     </div>
// //                 </div> 
                
// //             )
// //         }
// //     }
// //   render() {

// //     return (
//         // <>
//         //     {
//         //         this.state.option.map((que,i)=>(
//         //             <>
//         //                 {this.option(i)}  
                        
//         //             </>
                    
//         //         ))
//         //     }
        
//         //         <div class="row" style={{marginBottom:"20px"}}>  
//         //             <div class="col-sm-10 col-7">
//         //                 <div class="form-check disabled">
//         //                     <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
//         //                     <label class="form-check-label" for="exampleRadios3">
//         //                         <a   onClick={this.onOptions}>
//         //                             Add Option
//         //                         </a>
//         //                     </label>
//         //                 </div>
//         //             </div>
//         //             <div class="col-sm-2 col-7">
//         //                 {/* <Close style={{width:"50px"}}/> */}
//         //             </div>
//         //         </div>
//         //     {/* </div>
//         // </div> */}
//         // </>
// //     )
// //   }
// // }


// export default MultipleChoice;