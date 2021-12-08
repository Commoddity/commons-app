import { SelectChangeEventDetail } from "@ionic/core";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

export type StandardSelectTemplateProps = {
  options: string[] | number[];
  value: string | number;
  label: string;
  placeholder?: string;
  okText?: string;
  cancelText?: string;
  onChange?: (event: CustomEvent<SelectChangeEventDetail<any>>) => void;
  className?: string;
};

export const StandardSelectTemplate: React.FC<StandardSelectTemplateProps> = ({
  options,
  value,
  label,
  placeholder,
  okText,
  cancelText,
  onChange,
  className,
}) => {
  return (
    <IonItem className={className}>
      <IonLabel>{label}</IonLabel>
      <IonSelect
        value={value}
        placeholder={placeholder || "Select One"}
        okText={okText || "Okay"}
        cancelText={cancelText || "Dismiss"}
        onIonChange={onChange}
      >
        {options.map((option, index) => (
          <IonSelectOption key={index} value={option}>
            {option}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
};
