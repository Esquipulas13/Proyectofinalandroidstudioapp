import { Device } from '@capacitor/device';
import { IonButton, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonModal, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { info } from 'console';
import React, { useState } from 'react';


const Info: React.FC = () => {
const logDeviceInfo = async () => {
  const info = await Device.getInfo();
  console.log(info);
};

return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButton slot="start">
                    <IonMenuButton />
                </IonButton>
                <IonTitle>Dispositivo</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>
                <IonImg src='https://mma.prnewswire.com/media/1179336/f974501893df8fedf85528f48ccd.jpg?p=publish&w=650' alt='Activity' />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <IonButton onClick={logDeviceInfo} expand="block" fill="outline">Informacion del Dispositivo</IonButton>
                
                </IonGrid>
        </IonContent>
    </IonPage>

)
};
export default Info;