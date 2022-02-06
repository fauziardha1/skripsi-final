import  { useState,useEffect } from 'react';
import SectionDashboard from '../components/SectionDashbord';
import SideBarAdmin from '../components/template/SideBarAdmin';
import HeaderAdmin from '../components/template/HeaderAdmin';
import "../style/survey.css"
import Title from '../components/Title';
import Close from "@material-ui/icons/Close";
import Radio from '@material-ui/icons/RadioButtonChecked';
import ShortText from "@material-ui/icons/ShortText";
import Pharagraph from "@material-ui/icons/Subject";
import { CheckBox } from '@material-ui/icons';
import MultipleChoice from '../components/MultipleChoice';
import ShortAnswer from '../components/ShortAnswer';
import Checkboxes from '../components/Checkboxes';
import TextAnswer from '../components/TextAnswer';
import { Link, useHistory ,useLocation} from 'react-router-dom'
import axios from "axios";
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const ModalPenyebaran = ({token,show,handleClose,gender,prodi,angkatan,sampling,setSampling,closing,setCheckTitle,checkTitle,kelahiran,provinsi,dGender,dAngkatan,dStudi,dKelahiran,dProvinsi}) => {
    const location = useLocation();
    const myparam = location.state.id;
    const [info, setInfo]=useState('');
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [content, setContent] = useState("");
    const [lengthRes, setLengthRes] = useState([]);
    const [totalResponden,setTotalResponden]=useState(0);
    const [totalUndian,setTotalUndian]=useState(0);
    const [date,setDate]=useState("");
    let today = new Date()
    useEffect(() => {
        const fetchData = async ()=>{
          axios.get('http://localhost:5000/mahasiswa/length').then(
                response=> {
                    //   console.log(response.data.message[0])
                        setLengthRes(response.data.id)

                  }
              )
          }
          fetchData();
          setDate(today.toISOString().split('T')[0])
      }, []);
      
    const modalInfo = (e) =>{
        if(info == "1"){
            handleShow1()
        }else if(info == "2"){
            handleShow2()
        }else if(info == "3"){
            handleShow3()
            // alert(indexPertanyaan)
        }else{
            // alert('how')
        }
    }
    const samplingData = async (e) => {
        e.preventDefault();
        // gender,prodi,angkatan
        var initGender = gender.filter(e => e !== "")
        var initProdi = prodi.filter(e => e !== "")
        var initAngkatan = angkatan.filter(e => e !== "")
        var initKelahiran = kelahiran.filter(e => e !== "")
        var initProvinsi = provinsi.filter(e => e !== "")
        
        // alert(initGender+"   "+initAngkatan+"   "+initProdi)
        const init = {
        }
        
        if(initGender.length != 0){
            init.gender = initGender
        }
        if(initProdi.length != 0){
            init.studi = initProdi
        }
        if(initAngkatan.length != 0){
            init.angkatan = initAngkatan
        }
        if(initKelahiran.length != 0){
            init.kelahiran = initKelahiran
        }
        if(initProvinsi.length != 0){
            init.provinsi = initProvinsi
        }
        if(info == "1"){
            axios.patch(`http://localhost:5000/kuesioner/title/${myparam}`,{
                metode: "simple",
                responden:sampling,
                
            });
            
            axios.post(`http://localhost:5000/penyebaran/simple`,{
                
                id_kuesioner: myparam,
                mahasiswa: token,
                responden:sampling,
                lengthRes : lengthRes,
                data: [init]

            }).then(
                response=> {
                    console.log(response.data.message)
                    checkTitle=response.data.message[0]
                    setCheckTitle(checkTitle)
                 
                  }
            );
        }else if(info == "2"){
            axios.patch(`http://localhost:5000/kuesioner/title/${myparam}`,{
                metode: "systematic",
                responden:sampling,
                
            });
            axios.post(`http://localhost:5000/penyebaran/systematic`,{
                
                id_kuesioner: myparam,
                responden: sampling,
                lengthRes : lengthRes,
                gender:initGender,
                prodi : initProdi,
                angkatan : initAngkatan,
                data: [init]
            }).then(result=>{
                checkTitle=result.data.message[0]
                setCheckTitle(checkTitle)
                      
                console.log(result.data.message)
            });
        }else if(info == "3"){
            axios.patch(`http://localhost:5000/kuesioner/title/${myparam}`,{
                metode: "cluster",
                responden:totalResponden,
                
            });
            var arr = []

            if(initGender.length == 0){
                gender = dGender
                init.gender=dGender
            }
            if(initAngkatan.length == 0){
                angkatan = dAngkatan
                init.angkatan = dAngkatan
            }
            if(initProdi.length == 0){
                prodi = dStudi
                init.prodi = dStudi
            }
            if(initKelahiran.length == 0){
                kelahiran = dKelahiran
                init.kelahiran = dKelahiran
            }
            if(initProvinsi.length == 0){
                provinsi = dProvinsi
                init.provinsi = dProvinsi
            }
            for(let a = 0 ; a < gender.length; a++){
                console.log("1")
                for(let b = 0 ; b < prodi.length;b++){
                    console.log("2")
                    for(let c = 0 ; c < angkatan.length;c++){
                        for(let d = 0 ; d < kelahiran.length; d++){
                            for(let e = 0 ; e < provinsi.length; e++){
                                arr.push([{
                                    gender : gender[a],
                                    angkatan : angkatan[c],
                                    studi : prodi[b],
                                    kelahiran: kelahiran[d],
                                    provinsi:provinsi[e]
                                }])
                            }
                        }    
                    }
                }
            }  
            axios.patch(`http://localhost:5000/kuesioner/title/${myparam}`,{
                metode: "cluster",
                responden: sampling
            });
            axios.post(`http://localhost:5000/penyebaran/cluster`,{
                
                id_kuesioner: myparam,
                responden: sampling,
                lengthRes : lengthRes,
                gender:initGender,
                prodi : initProdi,
                angkatan : initAngkatan,
                data: arr

            }).then(
                response=> {
                    checkTitle=response.data.message[0]
                    setCheckTitle(checkTitle)
                  
                    console.log(response.data.message)
                     
                }
            );
            
        }
        handleClose()
        setSampling(0)
    }
    const inputsampling=(val)=>{
        if(val == "1"){
            setInfo(val)
            setContent(cotenModal)
        }else if(val == "2"){
            setInfo(val)
            setContent(cotenModal)
        }else if(val == "3"){
            setInfo(val)
            setContent(cotenModal)
        }else if(val == "0"){
            // alert("a")
            setInfo(val)
            setContent("")
        }
    }
    const cotenModal = (e)=>{
        return(
            <>
                {/* <div class="form-group">
                    <label for="basic-url">Jumlah Responden</label>                    
                    <div class="input-group">
                        <input type="number"  required="required" class="form-control"  onChange={(e)=>setTotalResponden(e.target.value)} placeholder="Responden" required/>
                     </div>
                </div>
                <div class="form-group">
                    <label for="basic-url">Batas Penyebaran Kuesioner</label>
                    <div class="input-group">
                        <input type="date"  required="required" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
                     </div>
                </div> */}
            </>
        )
    }
    
    const close = ()=>{
        // closing()
        // setSampling(0)
        // handleClose()
    }
    return(
        <>
        
        <Modal show={show} onHide={close}>
            <Modal.Header >
                <Modal.Title>Metode Penyebaran Kuesioner</Modal.Title>
            </Modal.Header>
        <form onSubmit={ samplingData }>
            
        <Modal.Body>
            <div class="form-group">
                <div>
                    <h3 class="text-center">Jumlah Responden</h3>
                    <div class="text-center">
                        <h1 style={{display:"inline-block"}}>{sampling}</h1><small style={{display:"inline-block"}}>/Orang</small>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="basic-url">Metode Penyebaran Kuesioner :</label>
                <div class="input-group">
                    <select onChange={(val)=>inputsampling(val.target.value)} class="custom-select" id="inputGroupSelect04">
                        <option value="0" selected>Choose...</option>
                        <option value="1">Simple random sampling</option>
                        <option value="2">Systematic Random Sampling</option>
                        <option value="3">Cluster Random Sampling</option>
                    </select>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={modalInfo}><i class="fas fa-info"></i></button>
                    </div>
                </div>
            </div>
            {/* <div class="form-group">
                <label for="basic-url">Metode Penyebaran Kuesioner :</label>
                <div class="input-group">
                    <input type="date" value={today.toISOString().split('T')[0]}  onChange={(val)=>setDate(val.target.value)}  defaultValue={today.toISOString().split('T')[0]} class="form-control"/>

                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={modalInfo}><i class="fas fa-info"></i></button>
                    </div>
                </div>
            </div> */}

            {content}
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" value="Submit" variant="primary" >
            Simpan Penyebaran
          </Button>
        </Modal.Footer>
        
        </form>
      </Modal>
      {/* modal simple random sampling */}
      <Modal show={show1} onHide={handleClose1}>
            <Modal.Header >
                <Modal.Title>Simple random sampling</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <p>
            Jenis ini melakukan pengambilan sampel secara acak melalui cara yang sederhana seperti pengundian atau menggunakan pendekatan bilangan acak.
            </p>
            <p>
            Contoh :
            </p>
            <p>
            Dibutuhkan 15 sampel dari populasi penelitian dengan jumlah 90 orang.  Peneliti terlebih dahulu membuat undian untuk mendapatkan sampel pertama dari 90 populasi tersebut. Setelah sampel pertama didapatkan, nama yang terpilih sebagai sampel tersebut dikembalikan lagi agar populasi tetap utuh, berjumlah 90 orang.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal Systematic Random Sampling */}
      <Modal show={show2} onHide={handleClose2}>
            <Modal.Header >
                <Modal.Title>Systematic Random Sampling</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            {/*  */}
            <p>
            Pengambilan sampel pada teknik ini menetapkan sampel awal secara acak kemudian sampel selanjutnya dipilih secara sistematis berdasarkan pola tertentu. Pola umum dari teknik ini adalah mengambil bilangan kelipatan dari jumlah anggota populasi dengan jumlah sampel yang akan diambil.
            </p>
            <p>contoh:</p>
            <p>diambil sampel dari populasi dengan jumlah 40 orang yang akan masuk ke sebuah ruangan. Setiap orang yang masuk ke urutan dari kelipatan 4 akan diambil sebagai sampel, artinya orang ke-4, 8, 12, 16 dan seterusnya akan dijadikan sampel penelitian hingga 40 populasi.
            </p>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal Cluster Random Sampling */}
      <Modal show={show3} onHide={handleClose3}>
            <Modal.Header >
                <Modal.Title>Cluster Random Sampling</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            {/*  */}
            <p>
            Cluster atau sampel area disebut dengan istilah lain, cluster random, digunakan ketika kelompok tidak terdiri dari perseorangan, melainkan kumpulan-kumpulan individu. Metode cluster sangat bermanfaat untuk riset skala sangat luas.
            </p>
            <p>
            contoh :
            </p>
            <p>
                ketika suatu lembaga ingin melakukan survei mengenai performa sinyal telekomunikasi di seluruh wilayah Sulawesi.  Para peneliti dapat membagi-bagi populasi keseluruhan wilayah Sulawesi ke dalam pengelompokan berdasarkan kota-kota.  Lalu cara selanjutnya dalam cluster sampling adalah dengan menyeleksi kota-kota dengan populasi terbanyak, lalu menyaringnya lagi dan memilih individu-individu yang menggunakan sinyal telekomunikasi saja. Cluster sampling adalah tahapan-tahapan ini. 
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
    )
}

  
  export default ModalPenyebaran;