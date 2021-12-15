import { FormEvent } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  InputChangeEventDetail,
} from "@ionic/react";

export interface FormValues {
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export interface FormErrorValues {
  emailAddress: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

export type SignUpTemplateProps = {
  values: FormValues;
  errors: FormErrorValues;
  loading: boolean;
  handleInputChange: (event: CustomEvent<InputChangeEventDetail>) => void;
  handleSubmit: (event?: FormEvent<HTMLFormElement> | undefined) => void;
};

export const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
  values: { emailAddress, firstName, lastName, password, confirmPassword },
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form className="ion-padding" onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              name="emailAddress"
              value={emailAddress}
              onIonChange={(event) => handleInputChange(event)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">First Name</IonLabel>
            <IonInput
              name="firstName"
              value={firstName}
              onIonChange={(event) => handleInputChange(event)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Last Name</IonLabel>
            <IonInput
              name="lastName"
              value={lastName}
              onIonChange={(event) => handleInputChange(event)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              name="password"
              type="password"
              value={password}
              onIonChange={(event) => handleInputChange(event)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onIonChange={(event) => handleInputChange(event)}
            />
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Sign Up
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};
