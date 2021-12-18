import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useActions';
import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const { getProducts } = useAction();

  useEffect(() => {
    getProducts();
  }, []);

  const { data, error, loading } = useTypedSelector(state => state.getProducts);
  console.log(data);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {data && data.map((item) => (
          <IonItem key={item.id}>{item.name}</IonItem>
        ))}
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
