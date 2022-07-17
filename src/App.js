
import './App.css';
import Homelogo from "./images/homedecorlogo.png";
import Appliancelogo from "./images/apprepairlogo.png";
import PropertyMartLogo from "./images/propertydealslogo.png"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Interior from './components/interior';
import HomeAppliance from './components/homeAppliance';
import HouseSaleRent from './components/houseSaleRent';
function App() {
  const[homeOpen,setHomeOpen]=useState(false);
  const[homeAppOpen,setHomeAppOpen]=useState(false);
  const[propertyOpen,setPropertyOpen]=useState(false);

 let handleHomeDecorOpen=()=>{
  setHomeOpen(true);
  setHomeAppOpen(false);
  setPropertyOpen(false);
 } 
 let handleHomeAppOpen=()=>{
  setHomeOpen(false);
  setHomeAppOpen(true);
  setPropertyOpen(false);
} 
let handlePropertyOpen=()=>{
  setHomeOpen(false);
  setHomeAppOpen(false);
  setPropertyOpen(true);
} 

let handleCloseAll=()=>{
  setHomeOpen(false);
  setHomeAppOpen(false);
  setPropertyOpen(false);
  
}
  return (
    <div className="App">
    <div className='header'><h1>GreatServes</h1></div>
      
      <div className='clikables'>
      {
        homeOpen? null: <><div className='HomeInterior box'><img onClick={handleHomeDecorOpen} className="imagelogo" src={Homelogo} alt="homelogo"/></div>
      <div className='HomeAppliance box '><img onClick={handleHomeAppOpen} className="imagelogo" src={Appliancelogo} alt="homelogo"/> </div>
      <div className='PropertyMart box commingsoon'><img onClick={handlePropertyOpen} className="imagelogo" src={PropertyMartLogo} alt="homelogo"/> <div className='soon'>COMING SOON</div></div></>}
     
     
      </div>
      {
        homeOpen ? <> <CloseIcon className='X' onClick={handleCloseAll} fontSize="large"  style={{fill: "white"}}/> <Interior/> </>:null
      }
      {
        homeAppOpen ? <> <CloseIcon className='X' onClick={handleCloseAll} fontSize="large" /> <HomeAppliance/> </>:null
      }
      {
        propertyOpen ? <> <CloseIcon className='X' onClick={handleCloseAll} fontSize="large" /> <HouseSaleRent/> </>:null
      }

      <footer>All rights reserved . 2022 GreatServes PVT LTD</footer>
    </div>

  );
}

export default App;
