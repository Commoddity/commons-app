import { FormEvent } from "react";
import {
  IonButton,
  IonCheckbox,
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
  password: string;
}

export interface FormErrorValues {
  emailAddress: string | undefined;
  password: string | undefined;
}

export type SignInTemplateProps = {
  values: FormValues;
  errors: FormErrorValues;
  loading: boolean;
  handleInputChange: (event: CustomEvent<InputChangeEventDetail>) => void;
  handleSubmit: (event?: FormEvent<HTMLFormElement> | undefined) => void;
};

export const SignInTemplate: React.FC<SignInTemplateProps> = ({
  values: { emailAddress, password },
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign In</IonTitle>
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
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              name="password"
              type="password"
              value={password}
              onIonChange={(event) => handleInputChange(event)}
            />
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Remember me</IonLabel>
            <IonCheckbox defaultChecked={true} slot="start" />
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Login
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};
