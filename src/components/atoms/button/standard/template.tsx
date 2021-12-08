import { IonButton } from "@ionic/react";

export type StandardButtonTemplateProps = {
  text: string;
  onClick?: () => void;
};

export const StandardButtonTemplate: React.FC<StandardButtonTemplateProps> = ({
  text,
  onClick,
}) => {
  return <IonButton onClick={onClick}>{text}</IonButton>;
};
