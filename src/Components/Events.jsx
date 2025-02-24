import eventsJson from "../Data/events.json";
import React, { useEffect, useState } from "react";
import Event from "./Event";
import Row from "react-bootstrap/Row";
import Alert from 'react-bootstrap/Alert';

export default function Events() {
    const [showAlert, setShowAlert] = useState(false);
    const [welcomeAlert, setWelcomeAlert] = useState(true);
    useEffect(() => {
setTimeout(()=>{

    setWelcomeAlert(false);

}, 3000)


    },[])


    const showAlertBook =()=>{
        setShowAlert(true);
        setTimeout(()=>{
            setShowAlert(false);
        }, 2000)
     }
  return (
    <div>
         {welcomeAlert && <Alert  variant="info">
         Welcome to our Esprit Events
        </Alert>
       }
     {showAlert && <Alert  variant="info">
          You have booked an event !
        </Alert>
       }
     <Row >
        {eventsJson.map((eventItem, index) => (
          <Event key={index} event={eventItem}  fnt={showAlertBook}/>
        ))}
      </Row>
    
    </div>
  );
}