import React, { useState } from "react";
import Homepic1 from "../images/homedecor/homepics1.jpeg";
import Homepic2 from "../images/homedecor/homepics2.jpeg";
import Homepic3 from "../images/homedecor/homepics3.jpeg";
import Homepic4 from "../images/homedecor/homepics4.jpeg";
import Homepic5 from "../images/homedecor/homepics5.jpeg";
import Homepic6 from "../images/homedecor/homepics6.jpeg";
import Homepic7 from "../images/homedecor/homepics7.jpeg";
import Homepic8 from "../images/homedecor/homepics8.jpeg";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CollectionsIcon from '@mui/icons-material/Collections';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "../App.css";

export default function Interior() {
  const [contactOpen, setContactOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [back, setBack] = useState(true);
  let handleBackClick = () => {
    setBack(true);
    setContactOpen(false);
    setGalleryOpen(false);
  };

  let handleContactClick = () => {
    setContactOpen(true);
    setGalleryOpen(false);
  };

  let handleGalleryClick = () => {
    setGalleryOpen(true);
    setContactOpen(false);
  };

  function Contact() {
    return (
      <>
        <div className="contact">
        Goutam Majumder: 7003659566</div>
        <div onClick={handleBackClick} className="back">
          <ArrowBackIosNewIcon fontSize="large"/>
        </div>
      </>
    );
  }

  function Gallery() {
    return (
      <>
        <div className="gallery">
          <div className="imagesPics">
            <div className="rowImg">
              {" "}
              <img className="pics" src={Homepic1} alt=" pic " />
              <img className="pics" src={Homepic2} alt=" pic " />
            </div>
            <div className="rowImg">
              {" "}
              <img className="pics" src={Homepic3} alt=" pic " />
              <img className="pics" src={Homepic4} alt=" pic " />
            </div>
            <div className="rowImg">
              {" "}
              <img className="pics" src={Homepic5} alt=" pic " />
              <img className="pics" src={Homepic6} alt=" pic " />
            </div>
            <div className="rowImg">
              <img className="pics" src={Homepic7} alt=" pic " />
              <img className="pics" src={Homepic8} alt=" pic " />
            </div>
             
       
          </div>
        </div>
        <div onClick={handleBackClick} className="back">
        <ArrowBackIosNewIcon fontSize="large"/>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="interior">
        <div className="btn" onClick={handleContactClick}><ContactPhoneIcon  style={{fill: "white" }} fontSize="large"/></div>{" "}
        <div className="btn" onClick={handleGalleryClick}><CollectionsIcon  style={{fill: "white"}} fontSize="large"/></div>
      </div>
      {galleryOpen ? <Gallery /> : null}
      {contactOpen ? <Contact /> : null}
    </>
  );
}
