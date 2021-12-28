import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SlideDrawer from './components/SlideDrawer';
import ProductDetail from './pages/ProductDetail';
import Product from './pages/Product';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SlideDrawer />
      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/products">
          <Product />
        </Route>
        <Route exact path="/products/:category">
          <Product />
        </Route>
        <Route exact path="/products/:search/search">
          <Product />
        </Route>
        <Route exact path="/products/:location/location">
          <Product />
        </Route>
        <Route exact path="/products/:status/status">
          <Product />
        </Route>
        <Route exact path="/products/:store/store">
          <Product />
        </Route>
        <Route exact path="/details">
          <ProductDetail />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;




// const { getProducts } = useAction();

// useEffect(() => {
//   getProducts();
// }, []);

// const { data, error, loading } = useTypedSelector(state => state.getProducts);
// console.log(data);
