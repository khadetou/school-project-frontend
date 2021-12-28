import { useEffect, useRef } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonSlide, IonSlides, IonToolbar } from '@ionic/react';
import { funnelOutline, notificationsOutline, searchOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useAction } from '../hooks/useActions';
import './Home.css';


const slideOpts = {
  slidesPerView: 'auto',
  zoom: false,
  grabCursor: true
}

const Home: React.FC = () => {
  const { getProducts } = useAction();
  const { data, error, loading } = useTypedSelector(state => state.getProducts);

  const searchRef = useRef<HTMLIonInputElement>(null);

  const history = useHistory();



  useEffect(() => {

    getProducts();

  }, []);

  const search = (e: any) => {
    e.preventDefault();
    history.push(`/products/${searchRef.current!.value}/search`);
  }


  //Remove all repeated categories and return category and categoryImage
  const categories = data!.reduce((acc, curr) => {
    if (!acc.find((category: any) => category.category === curr.category)) {
      acc.push({
        category: curr.category,
        categoryImage: curr.categoryImage
      })
    }
    return acc;
  }, []);




  // const categories = data!.map(product => product.category);
  // const uniqueCategories = [...new Set(categories)];


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
            <IonInput placeholder="Search Your Product" autocomplete="on" ref={searchRef} />
            <IonIcon icon={searchOutline} slot="start" onClick={search}></IonIcon>
          </IonItem>
        </div>

        <div className="title ion-padding">
          <h2>Categories</h2>
          <p>See all</p>
        </div>


        {!loading && !error &&
          <div className="category-slider ">
            <IonSlides options={slideOpts}>
              {data!.length !== 0 && categories.map((category: any, index: any) => (
                <IonSlide key={index}>
                  <IonCol>
                    <h4>{category.category}</h4>
                    <img src={category.categoryImage} />
                  </IonCol>
                </IonSlide>
              ))}
            </IonSlides>
          </div>}

        <div className="title ion-padding">
          <h2 className="font-bold">Featured</h2>
          <p>See all</p>
        </div>

        {!loading && !error &&
          <div className="product-slider">
            <IonSlides options={slideOpts}>
              {data!.length !== 0 && randomProducts.map((product, index) => (
                <IonSlide key={index}>
                  <IonCol className="ion-text-left" onClick={() => history.push(`/details/${product.id}`)}>
                    <img src={product.image} />
                    <p> {`${product.price} FCFA`}</p>
                    <h6> {product.name}</h6>
                  </IonCol>
                </IonSlide>
              ))}
            </IonSlides>
          </div>}

        <div className="title ion-padding">
          <h2 className="font-bold">Best Sell</h2>
          <p>See all</p>
        </div>

        {!loading && !error &&
          <div className="product-slider ">
            <IonSlides options={slideOpts}>
              {data!.length !== 0 && randomProducts.map((product, index) => (
                <IonSlide key={index}>
                  <IonCol className="ion-text-left" onClick={() => history.push(`/details/${product.id}`)}>
                    <img src={product.image} />
                    <p> {`${product.price} FCFA`}</p>
                    <h6> {product.name}</h6>
                  </IonCol>
                </IonSlide>
              ))}
            </IonSlides>
          </div>}
      </IonContent>
    </IonPage>

  );
};

export default Home;


