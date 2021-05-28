import React, { useRef, useContext, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonMenuButton, IonSegment, IonSegmentButton, IonLabel, IonItem, IonInput, IonDatetime, IonToast } from '@ionic/react';
import ActivitiesContext, { ActivityType } from '../../data/activities-context';
import { useHistory } from 'react-router-dom';
import { Dialog } from '@capacitor/dialog';

const AddActivity: React.FC = () => {

    const history = useHistory();
    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
    const hourInput = useRef<HTMLIonDatetimeElement>(null);

    const activitiesCtxt = useContext(ActivitiesContext);

    const [toastMsg, setToastMsg] = useState<string>(' ');

    const AddActivity = () => {
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;
        const startDate = new Date(hourInput.current?.value as string);
        const startHour = startDate.getHours() + ':' + startDate.getMinutes();

        if (title && description && activityType && startHour) {
            activitiesCtxt.addActivity(title, description, startHour, activityType);
            history.replace('/all-activities');
            setToastMsg('The activity has been saved');
        }
    };

    const showConfirm = async () => {
        const { value } = await Dialog.confirm({
          title: 'Hola',
          message: '¿Seguro que quieres guardar los cambios?',
        });
        AddActivity();
        console.log('Confirmed:', value);
        
      };

    return (
        <React.Fragment>
            <IonToast isOpen={!!setToastMsg} message='The activity has been saved' duration={4000} color="medium" onDidDismiss={() => setToastMsg(' ')} />

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButton slot="start">
                            <IonMenuButton />
                        </IonButton>
                        <IonTitle>Nueva Actividad</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <IonSegment ref={activityTypeInput}>
                                    <IonSegmentButton value="work">
                                        <IonLabel>Trabajo</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="rest">
                                        <IonLabel>Descanso</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="hobby">
                                        <IonLabel>Distraccion</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Titulo</IonLabel>
                                    <IonInput ref={titleInput} type="text"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow><IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Descripcion</IonLabel>
                                    <IonInput ref={descriptionInput} type="text"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Hora</IonLabel>
                                    <IonDatetime ref={hourInput} display-format="h:mm A" picker-format="h:mm A" value={new Date().toISOString()} />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-center ion-margin-top">
                                <IonButton onClick={showConfirm}  expand="block" fill="outline">Agregar Actividad</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>

        </React.Fragment>

    );
};

export default AddActivity;