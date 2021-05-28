import { Browser } from '@capacitor/browser';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';


const Desarrolladores: React.FC = () => {

    const Esquipulas = async () => {
        await Browser.open({ url: ' https://esquipulas13.github.io/JesusEsquipulasLopezCV/' });
    };

    const Lupita = async () => {
        await Browser.open({ url: 'http://capacitorjs.com/' });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start">
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle>Desarrolladores</IonTitle>
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
                    <IonButton onClick={Esquipulas} expand="block" fill="outline">Jesus Esquipulas Lopez Ariza</IonButton>
                    <br/>
                    <IonButton onClick={Lupita} expand="block" fill="outline">Maria Guadalupe Fuentes Baeza</IonButton>
                </IonGrid>
            </IonContent>
        </IonPage>

    )
};
export default Desarrolladores;