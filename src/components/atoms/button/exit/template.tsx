import { IonButton } from "@ionic/react";

export type ExitButtonTemplateProps = {
  text: string;
  onClick?: () => void;
};

export const ExitButtonTemplate: React.FC<ExitButtonTemplateProps> = ({
  text,
  onClick,
}) => {
  return (
    <IonButton className="bg-red-200" onClick={onClick}>
      {text}
    </IonButton>
  );
};
