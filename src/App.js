import logo from './logo.svg';
import './App.css';
import Routes from "./Routes"
import RoutesLogin from "./RoutesLogin"
import useToken from './useToken';
import Login from "./pages/Login";
import React from "react"
function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (<RoutesLogin setToken={setToken} />)
  }


  return (
    <Routes setToken={setToken} token = {token} />
  );
}


export default App;
