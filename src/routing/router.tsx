import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  arrowForwardCircleOutline,
  documentTextOutline,
  personOutline,
} from "ionicons/icons";

import { useUser } from "~auth";

import CurrentBills from "../pages/current-bills";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";
import Profile from "../pages/profile";

export default (): JSX.Element => {
  const user = useUser();

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/current-bills">
            <CurrentBills />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/profile">
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
          {user ? (
            <IonTabButton tab="tab3" href="/profile">
              <IonIcon icon={personOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          ) : (
            <IonTabButton tab="sign-in" href="/sign-in">
              <IonIcon icon={arrowForwardCircleOutline} />
              <IonLabel>Sign In</IonLabel>
            </IonTabButton>
          )}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};
