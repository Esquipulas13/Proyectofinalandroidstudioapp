import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities/AllActivities';
import AddActivity from './pages/AddActivity/AddActivity';
import { addCircleOutline, bodyOutline, cameraOutline, eyeOutline, helpOutline, mailOutline, newspaperOutline, newspaperSharp, pulseOutline, serverOutline } from 'ionicons/icons';
import ActivitiesContext from './data/activities-context';
import ActivitiesContextProvider from './data/ActivitiesContextProvider';
import Desarrolladores from './pages/Acercade/Desarrolladores';
import Info from './pages/Dispositivo/Info';
import Archivos from './pages/Notas/Archivos';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" content-id="proyectappM1">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Proyecto Movil 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="/all-activities" routerDirection="none" lines="none">
                <IonIcon color="medium " slot="start" icon={newspaperOutline} />
                <IonLabel>Actividades</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/add-activity" routerDirection="none" lines="none">
                <IonIcon color="medium " slot="start" icon={addCircleOutline} />
                <IonLabel>Nueva Actividad</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/Acercade" routerDirection="none" lines="none">
                <IonIcon color="medium " slot="start" icon={eyeOutline} />
                <IonLabel>Desarolladores</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/Dispositivo" routerDirection="none" lines="none">
                <IonIcon color="medium " slot="start" icon={serverOutline} />
                <IonLabel>Desarolladores</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/Notas" routerDirection="none" lines="none">
                <IonIcon color="medium " slot="start" icon={helpOutline} />
                <IonLabel>Ubicacion Actual</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <ActivitiesContextProvider>
      <IonRouterOutlet id="proyectappM1">
      <Route path="/add-activity" component={AddActivity} exact />
        <Route path="/all-activities" component={AllActivities} exact />
        <Route path="/Acercade" component={Desarrolladores} exact />
        <Route path="/Dispositivo" component={Info} exact />
        <Route path="/Notas" component={Archivos} exact />
        <Redirect to="/all-activities" />
      </IonRouterOutlet>
      </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
