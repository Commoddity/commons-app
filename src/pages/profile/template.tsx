import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export interface FormValues {
  emailAddress: string;
  password: string;
}

export interface FormErrorValues {
  emailAddress: string | undefined;
  password: string | undefined;
}

export type ProfileTemplateProps = {
  signOut: () => Promise<void>;
  loading: boolean;
};

export const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ signOut }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem lines="none">
          <IonButton onClick={signOut}>Sign Out</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
