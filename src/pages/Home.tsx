import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useActions';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const { getProducts } = useAction();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
