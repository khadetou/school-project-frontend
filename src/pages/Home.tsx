import { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useActions';
import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import { funnelOutline, notificationsOutline, searchOutline } from 'ionicons/icons';
import $ from 'jquery';
import './Home.css';

const slideOpts = {
  slidesPerView: 'auto',
  zoom: false,
  grabCursor: true
}

const Home: React.FC = () => {
  const { getProducts } = useAction();
  const { data, error, loading } = useTypedSelector(state => state.getProducts);
  const [change, setChange] = useState(false);

  // const timer = setTimeout(() => {
  //   setChange(true);
  // }, 5000);
  useEffect(() => {
    getProducts();
    // $(".rm").unwrap();
  }, []);




  //Remove all repeated categories
  const categories = data!.map(product => product.category);
  const uniqueCategories = [...new Set(categories)];

  //Reduce the length of the name of data to display
  const products = data!.map(product => {
    return {
      ...product,
      name: product.name.substring(0, 20) + "..."
    }
  });

  //Generate three random products from the data
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 3);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton >
              <img src="/assets/menu_bar.svg" alt="logo" />
            </IonMenuButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton className="notification">
              <IonIcon icon={notificationsOutline} color="dark" />
              <span>&nbsp;</span>
            </IonButton>
            <IonButton className="filter">
              <IonIcon icon={funnelOutline} color="dark" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="search ion padding">
          <IonItem lines="none">
            <IonInput placeholder="Search Your Product" />
            <IonIcon icon={searchOutline} slot="start"></IonIcon>
          </IonItem>
        </div>

        <div className="title ion-padding">
          <h2>Categories</h2>
          <p>See all</p>
        </div>

        <div className="category-slider ">
          <div>
            <IonSlides options={slideOpts}>
              <div className="rm">
                {data && uniqueCategories.map((p, index) => (
                  <IonSlide key={index}>
                    <IonCol >
                      <h4 >{p}</h4>
                      <img src="/assets/categories/category-1.png" />
                    </IonCol>
                  </IonSlide>
                ))}
              </div>
            </IonSlides>
          </div>
        </div>

        <div className="title ion-padding">
          <h2 className="font-bold">Featured</h2>
          <p>See all</p>
        </div>

        <div className="product-slider">
          <IonSlides options={slideOpts}>
            <div className="rm">
              {data && randomProducts.map((product) => (
                <IonSlide key={product.id}>
                  <IonCol className="ion-text-left">
                    <img src={product.image} />
                    <p> {`${product.price} FCFA `}</p>
                    <h6> {product.name}</h6>
                  </IonCol>
                </IonSlide>
              ))}
            </div>
          </IonSlides>
        </div>

        <div className="title ion-padding">
          <h2 className="font-bold">Best Sell</h2>
          <p>See all</p>
        </div>

        <div className="product-slider ">
          <IonSlides options={slideOpts}>
            <div className="rm">
              {data && randomProducts.map((product) => (
                <IonSlide key={product.id}>
                  <IonCol className="ion-text-left">
                    <img src={product.image} />
                    <p> {`$${product.price} `}</p>
                    <h6> {product.name}</h6>
                  </IonCol>
                </IonSlide>
              ))}
            </div>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>

  );
};

export default Home;
