import React, { useContext } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton, IonIcon, IonLabel } from '@ionic/react';
import ActivitiesContext, { Activity } from '../data/activities-context';
import { Share } from '@capacitor/share';



interface CompleteModalActivityProps {
    activity: Activity;
    dismissModal: () => void;
}

const CompleteModalActivity: React.FC<CompleteModalActivityProps> = (props) => {
    const activitiesCtext = useContext(ActivitiesContext);
    const Compartir = async () => {
        await Share.share({
            title: 'See cool stuff',
            text: 'Really awesome thing you need to see right meow',
            url: 'http://ionicframework.com/',
            dialogTitle: 'Share with buddies',
        });
    }

    
      


    const confirmCompletion = (activityId: string) => {
        activitiesCtext.completeActivity(activityId);
        props.dismissModal();
    };

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-no-padding'>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <img src='/assets/imagenes/tarea.png' width='100px'/>
                        <br/>
                        <IonLabel >Actividades</IonLabel>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center ion-no-padding'>
                        <IonText color='medium'>
                            <p>
                                ¿Que accion es la que deseas realizar en esta tarea?
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='clear' onClick={props.dismissModal}>
                            Cancelar
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='primary' fill='clear' onClick={() => confirmCompletion(props.activity.id)}>
                            Completada
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='secundary' fill='clear' onClick={Compartir}>
                            Compartir
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteModalActivity;
