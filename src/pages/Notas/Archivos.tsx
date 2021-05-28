import { Geolocation } from '@capacitor/geolocation';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

const Archivos: React.FC = () => {
    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();

        console.log('Current position:', coordinates);
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start">
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle>Localizarme</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                    <IonCol className="ion-text-center ion-margin-top">
                            <IonButton onClick={printCurrentPosition} expand="block" fill="outline">Saber mi ubicacion</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>


    )
}

export default Archivos;