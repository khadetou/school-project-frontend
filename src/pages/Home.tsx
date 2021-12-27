import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useActions';
import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import { funnelOutline, notificationsOutline, searchOutline } from 'ionicons/icons';
import './Home.css';

const slideOpts = {
  slidesPerView: 'auto',
  zoom: false,
  grabCursor: true
}

const Home: React.FC = () => {
  const { getProducts } = useAction();

  useEffect(() => {
    getProducts();
  }, []);

  const { data, error, loading } = useTypedSelector(state => state.getProducts);
  console.log(data);




  const Categories = [
    {
      name: "category1",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "category2",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "category3",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "category4",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
  ]

  const products = [
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "product1",
      price: 10
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "product2",
      price: 20
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "product3",
      price: 30
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "product4",
      price: 40
    }
  ]
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
          <IonSlides options={slideOpts}>
            {Categories.map((category, index) => (
              <IonSlide key={index}>
                <IonCol>
                  <h4>{category.name}</h4>
                  <img src={category.img} />
                </IonCol>
              </IonSlide>
            ))}
          </IonSlides>
        </div>

        <div className="title ion-padding">
          <h2 className="font-bold">Featured</h2>
          <p>See all</p>
        </div>

        <div className="product-slider">
          <IonSlides options={slideOpts}>
            {products.map((product, index) => (
              <IonSlide key={index}>
                <IonCol className="ion-text-left">
                  <img src={product.img} />
                  <p> {`$${product.price} `}</p>
                  <h6> {product.name}</h6>
                </IonCol>
              </IonSlide>
            ))}
          </IonSlides>
        </div>

        <div className="title ion-padding">
          <h2 className="font-bold">Best Sell</h2>
          <p>See all</p>
        </div>

        <div className="product-slider ">
          <IonSlides options={slideOpts}>
            {products.map((product, index) => (
              <IonSlide key={index}>
                <IonCol className="ion-text-left">
                  <img src={product.img} />
                  <p> {`$${product.price} `}</p>
                  <h6> {product.name}</h6>
                </IonCol>
              </IonSlide>
            ))}
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>

  );
};

export default Home;
