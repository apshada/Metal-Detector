import React, { Component, useState, useEffect } from 'react';
import '@ionic/core/css/core.css';

import '@ionic/core/css/ionic.bundle.css';
import {
  IonCard,
  IonText,
  IonTitle,
  IonToolbar,
  IonImg
} from '@ionic/react';
import { Magnetometer } from '@ionic-native/magnetometer'
import ReactSpeedometer from "react-d3-speedometer"
import './magno.css'
import soundUrl from  './beep.mp3'
import ReactAudioPlayer from 'react-audio-player';
import sound from './music.png'
import empty from './empty.png'
const Magno = () =>{
    const [mread, setMread] = useState([]);


    
    const testmagno = () => {
            
        Magnetometer.getReading()
        .then(onSuccess => setMread((onSuccess), console.log(onSuccess)), 
      onFailure => console.log('stepcounter-count error', onFailure));

    
      
    }

    useEffect(() => {
      const interval = setInterval(() =>{
        testmagno()
       
      },1000)
      return () => clearInterval(interval)
    }, [])

 

    
    if(parseInt(mread["magnitude"]) > 60){
    return (
      <>
      <div>
     <IonCard  className="speedo"> 
       
      
        <ReactSpeedometer 
        className="meter"
        minValue={0}
        maxValue={600}
        value={parseInt(mread["magnitude"])}
        segments={4}
        height={200}
  segmentColors={[
    "#99e3ff",
    "#8798bc",
    "#00ffc3",
    "#a3be8c",
  ]}
  paddingVertical={30}
   />
     
   </IonCard>
   </div>
  
   <div className="data">
     
     <div>
       <IonCard>
     <IonToolbar  >
      <IonTitle >
        <div style={{display: "flex", flexDirection : "column"}}>
      <IonText >{parseInt(mread["x"])}</IonText>   
      <IonText >X</IonText>    
      </div>
      </IonTitle>
      </IonToolbar>
      </IonCard>
      </div>

      <div>
      <IonCard>
     <IonToolbar>
      <IonTitle>
      <div style={{display: "flex", flexDirection : "column"}}>
      <IonText>{parseInt(mread["y"])}</IonText>    
      <IonText>Y</IonText>     
      </div>
      </IonTitle>
      </IonToolbar>
      </IonCard>
      </div>

      <div>
        <IonCard>
     <IonToolbar>
      <IonTitle>
      <div style={{display: "flex", flexDirection : "column"}}>
      <IonText>{parseInt(mread["z"])}</IonText>    
      <IonText>Z</IonText> 
      </div> 
      </IonTitle>
      </IonToolbar>
      </IonCard>
      </div>

    </div>
   
   

     <ReactAudioPlayer

      src={soundUrl}
      autoPlay={true}
      loop={true}
      muted={false}
      />
     
     <IonImg src={sound} style={{width : "auto", height : 250}} />
     </>
    );
  }
  else{
      return(
        <>
      <div>
     <IonCard  className="speedo"> 
       
      
        <ReactSpeedometer 
        className="meter"
        minValue={0}
        maxValue={600}
        value={parseInt(mread["magnitude"])}
        segments={4}
        height={200}
  segmentColors={[
    "#99e3ff",
    "#8798bc",
    "#00ffc3",
    "#a3be8c",
  ]}
  paddingVertical={30}
   />
     
   </IonCard>
   </div>
  
   <div className="data">
     
     <div>
       <IonCard>
     <IonToolbar  >
      <IonTitle >
        <div style={{display: "flex", flexDirection : "column"}}>
      <IonText >{parseInt(mread["x"])}</IonText>   
      <IonText >X</IonText>    
      </div>
      </IonTitle>
      </IonToolbar>
      </IonCard>
      </div>

      <div>
      <IonCard>
     <IonToolbar>
      <IonTitle>
      <div style={{display: "flex", flexDirection : "column"}}>
      <IonText>{parseInt(mread["y"])}</IonText>    
      <IonText>Y</IonText>     
      </div>
      </IonTitle>
      </IonToolbar>
      </IonCard>
      </div>

      <div>
        <IonCard>
     <IonToolbar>
      <IonTitle>
      <div style={{display: "flex", flexDirection : "column"}}>
      <IonText>{parseInt(mread["z"])}</IonText>    
      <IonText>Z</IonText> 
      </div> 
      </IonTitle>
      </IonToolbar>
      </IonCard>
      </div>

    </div>
   
   

     <ReactAudioPlayer

      src={soundUrl}
      autoPlay={true}
      loop={true}
      muted={true}

      />
     <IonImg src={empty} style={{width : "auto", height : 250}} />
     </>
      );
  }
}


export default Magno;