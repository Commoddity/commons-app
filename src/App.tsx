import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  arrowForwardCircleOutline,
  documentTextOutline,
  personOutline,
} from "ionicons/icons";

import CurrentBills from "./pages/current-bills";
import SignIn from "./pages/sign-in";
import Profile from "./pages/profile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact({ mode: "md" });

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/current-bills">
            <CurrentBills />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/current-bills" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className="mv-4">
          <IonTabButton tab="current-bills" href="/current-bills">
            <IonIcon icon={documentTextOutline} />
            <IonLabel>Current Bills</IonLabel>
          </IonTabButton>
          <IonTabButton tab="sign-in" href="/sign-in">
            <IonIcon icon={arrowForwardCircleOutline} />
            <IonLabel>Sign In</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
