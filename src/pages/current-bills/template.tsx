import { Dispatch, SetStateAction } from "react";
import { QueryResult } from "@apollo/client";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

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
  const { data, loading } = billsResults || {};
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense" className="fixed">
          <IonToolbar className="pt-16">
            <IonTitle size="large">Commons App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem className="mt-12">
          <IonLabel>Parliament</IonLabel>
          <IonSelect
            value={parliament}
            placeholder="Select One"
            okText="Okay"
            cancelText="Dismiss"
            onIonChange={(event) => setParliament(event.detail.value)}
          >
            <IonSelectOption value={44}>44</IonSelectOption>
            <IonSelectOption value={43}>43</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Session</IonLabel>
          <IonSelect
            value={session}
            placeholder="Select One"
            okText="Okay"
            cancelText="Dismiss"
            onIonChange={(event) => setSession(event.detail.value)}
          >
            <IonSelectOption value={1}>1</IonSelectOption>
            <IonSelectOption value={2}>2</IonSelectOption>
          </IonSelect>
        </IonItem>

        {loading && <IonLabel>Loading...</IonLabel>}

        <IonList>
          <IonListHeader>Current Bills</IonListHeader>
          {data?.bills?.map(
            ({ NumberCode, LongTitle, billAddedFields: { pageUrl } }, index) => {
              return (
                <a href={pageUrl} target="_blank">
                  <IonItem key={index}>
                    <IonLabel>
                      <h2>{NumberCode}</h2>
                      <p>{LongTitle}</p>
                    </IonLabel>
                  </IonItem>
                </a>
              );
            },
          ) || <></>}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
