import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';
import Magno from './magno';

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle style={{fontSize : 40, display : "flex", justifyContent : "center", fontFamily : "fantasy"}}>Metal Detector</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <Magno />
        </IonContent>
      </IonApp>
    );
  }
}

export default App;