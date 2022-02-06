
// import  { useState,useEffect } from 'react';
// import Close from "@material-ui/icons/Close";
// import axios from "axios";
// import {Dropdown,DropdownButton} from 'react-bootstrap';
// import Select from 'react-select';
  
// const SectionKuesioner  = ({id,section,ds,idIndex,idKuesioner,indexPertanyaan,onClose1,index1,handletext1}) => {
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
//         console.log(ds)
//         if(index>idIndex+1 ){
//             if(id != section[index].id  ){
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
//                     <div class="col-sm-8 col-7">
//                         <div class="form-check">
//                             <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={option[index].option} onChange={handletext(option[index].id)}  checked/>
//                             <label class="form-check-label" for="exampleRadios1">
//                                 <input type="text" defaultValue={option[index].option} onChange={handletext(option[index].id)} class="form_name" />
//                             </label>
//                         </div>
//                     </div>
//                     <div class="col-sm-4 col-7">
//                         <div class="row">
//                             <div class="col-sm-2">
//                                 <a onClick={() => onClose(index)} value={index} >
//                                     <Close />
//                                 </a>
//                             </div>
//                             <div class="col-sm-10">
//                                 <div class="input-group">
//                                 <select  onChange={(val)=>inputSection(val.target.value,option[index].id,)} defaultValue={"Lanjut ke section"} class="form-control form-control-sm">
//                                         <option value="" selected>Lanjut ke section</option>
//                                         {
//                                             section.map((que,i)=>(
//                                                 <>
//                                                     {optionSection(i)}  
                                                    
//                                                 </>
                                                
//                                             ))
//                                         }
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
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
//             <div class="row">  
//                 <div class="col-sm-11 col-7">
//                     <div class="form-group">
//                     {/* <input type="text"  class="form-control form_name form_title" defaultValue={indexPertanyaan[index].pertanyaan} onChange={handletext(indexPertanyaan[index].id)} /> */}
//                     <h1 class=" form_name form_title">Section {indexPertanyaan[index1].section}</h1>
//                     <hr class="m-0"/>
            
//                     </div>
//                 </div>
//                 <div class="col-sm-1 col-7">
//                     <a onClick={() => onClose1(index1,indexPertanyaan[index1].id)} value={index1} class=" btn  ">
//                         <Close/>
//                     </a>
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


// export default SectionKuesioner;