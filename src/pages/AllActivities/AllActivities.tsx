import React, { useContext, useState } from 'react';
import classes from './AllActivities.module.css';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonMenuButton, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem, IonModal, IonIcon } from '@ionic/react';
import ActivitiesContext, { Activity } from '../../data/activities-context';
import CompleteModal from '../../components/CompleteModal';
import { checkmarkCircleOutline } from 'ionicons/icons';

const AllActivities: React.FC = () => {


    const [activityToComplete, setactivityToComplete] = useState<Activity>();
    const activitiesCtext = useContext(ActivitiesContext);

    const openCompleteModal = (activity: Activity) => {
        setactivityToComplete(activity);
    }

    const closeModal = () => {
        setactivityToComplete(undefined);
    }
    return (
        <React.Fragment>
            <IonModal isOpen={!!activityToComplete} swipeToClose={true}>
                <CompleteModal activity={activityToComplete as Activity} dismissModal={closeModal} />
            </IonModal>


            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButton slot="start">
                            <IonMenuButton />
                        </IonButton>
                        <IonTitle>Actividades</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {activitiesCtext.activities.map(activity => (
                            <IonRow key={activity.id}>
                                <IonCol className='ion-text-center'>
                                    <IonCard>
                                        <img src={activity.imageUrl} alt='Activity' />
                                        <IonCardHeader>
                                            <IonCardTitle>{activity.hour}</IonCardTitle>
                                            <IonCardSubtitle>{activity.title}</IonCardSubtitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p>{activity.description}</p>
                                            <IonItem lines='none'>
                                                {!activity.isComplete ?
                                                    <IonButton className={classes.FullWidth} fill='clear' onClick={() => openCompleteModal(activity)}>Completar Actividad</IonButton>
                                                    : <IonIcon color="success" className={classes.FullWidth} icon={checkmarkCircleOutline} />
                                                }
                                            </IonItem>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        ))}
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default AllActivities;