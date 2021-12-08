import { Dispatch, SetStateAction } from "react";
import { QueryResult } from "@apollo/client";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Select } from "~molecules";

import { GetAllBillsForSessionQuery } from "~types";

export type CurrentBillsTemplateProps = {
  billsResults?: QueryResult<GetAllBillsForSessionQuery>;
  parliament: number;
  setParliament: Dispatch<SetStateAction<number>>;
  session: number;
  setSession: Dispatch<SetStateAction<number>>;
};

export const CurrentBillsTemplate: React.FC<CurrentBillsTemplateProps> = ({
  billsResults,
  parliament,
  setParliament,
  session,
  setSession,
}) => {
  const { data, loading, error } = billsResults || {};
  if (error) console.log(error);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="fixed">
          <IonToolbar>
            <IonTitle slot="start" size="large">
              Commons App
            </IonTitle>
            <IonButtons slot="primary">
              <IonButton color="primary">Button</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonItem className="mt-12"></IonItem>

        <Select
          options={[44, 43]}
          value={parliament}
          label="Parliament"
          onChange={({ detail }) => setParliament(detail.value)}
          variant="standard"
          className="mt-4"
        />

        <Select
          options={[1, 2]}
          value={session}
          label="Session"
          onChange={({ detail }) => setSession(detail.value)}
          variant="standard"
        />

        <IonList>
          <IonListHeader>Current Bills</IonListHeader>
          {loading && <IonLabel>Loading...</IonLabel>}
          {data?.bills?.map(({ NumberCode, LongTitle, billAddedFields: { pageUrl } }) => {
            return (
              <a href={pageUrl} target="_blank">
                <IonItem key={NumberCode}>
                  <IonLabel>
                    <h2>{NumberCode}</h2>
                    <p>{LongTitle}</p>
                  </IonLabel>
                </IonItem>
              </a>
            );
          }) || <></>}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
