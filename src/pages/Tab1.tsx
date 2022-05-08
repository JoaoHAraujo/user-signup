import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useState } from "react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [name, setName] = useState<string>();
  const [registration, setRegistration] = useState<string>();
  const [present] = useIonAlert();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="small">IFPI - Instituto Federal do Piauí</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Cadastro de Alunos</h1>
        <IonItem>
          <IonLabel position="floating">Nome</IonLabel>
          <IonInput
            type="text"
            value={name}
            onIonChange={(e) => setName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Matrícula</IonLabel>
          <IonInput
            type="number"
            value={registration}
            onIonChange={(e) => setRegistration(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonButton
          expand="block"
          shape="round"
          type="submit"
          onClick={() =>
            present({
              cssClass: "my-css",
              header: "Alert",
              message: `Nome: ${name}\nMatrícula: ${registration}`,
              buttons: [
                "Cancel",
                { text: "Ok", handler: (d) => console.log("ok pressed") },
              ],
              onDidDismiss: (e) => console.log("did dismiss"),
            })
          }
        >
          Cadastrar
        </IonButton>
      </IonContent>
      <IonFooter>
      <IonToolbar>
        <IonTitle size="small">Atividade desenvolvida para a disciplina Programação para Dispositivos Móveis</IonTitle>
      </IonToolbar>
    </IonFooter>
    </IonPage>
  );
};

export default Tab1;
