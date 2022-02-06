export default class Mahasiswa {
  set foo(val){
    console.log("setting foo")
    this.fooValue = val;
  }
  
  get foo(){
     console.log("getting foo");
     return this.fooValue;
  }
}