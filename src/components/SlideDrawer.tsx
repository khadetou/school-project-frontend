import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from "@ionic/react";
import { arrowDown, arrowForward } from "ionicons/icons";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";


const SlideDrawer: React.FC = () => {
    const [showCat, setShowCat] = useState(false);
    const [showShop, setShowShop] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showStatus, setShowStatus] = useState(false);


    const history = useHistory();

    const { data, error, loading } = useTypedSelector(state => state.getProducts);
    //Remove all repeated categories
    const categories = data!.map(product => product.category);
    const uniqueCategories = [...new Set(categories)];

    //Remove all repeated shops
    const shops = data!.map(product => product.store);

    const uniqueShops = [...new Set(shops)];

    //Remove all repeated locations
    const locations = data!.map(product => product.location);
    const uniqueLocations = [...new Set(locations)];

    //Remove all repeated status
    const statuses = data!.map(product => product.status);
    const uniqueStatus = [...new Set(statuses)];


    //Get products by location
    const getProductsByLocation = (location: string) => {
        history.push(`/products/${location}/location`);
    }
    //Get products by store
    const getProductsByStore = (store: string) => {
        history.push(`/products/${store}/store`);
    }
    //Get products by status
    const getProductsByStatus = (status: string) => {
        history.push(`/products/${status}/status`);
    }

    return (
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Filters
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonItem button onClick={() => setShowCat(!showCat)}>
                    {!showCat ?
                        < IonIcon slot="start" icon={arrowForward} />
                        :
                        <IonIcon slot="start" icon={arrowDown} />
                    }
                    <IonLabel>Categories</IonLabel>
                </IonItem>
                {showCat && uniqueCategories.map((category, idx) => (
                    <IonList key={idx}>
                        <IonMenuToggle>
                            <IonItem button routerLink={`/products/${category}`} routerDirection="none">
                                <IonLabel>{category}</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>))

                }


                <IonItem button onClick={() => setShowShop(!showShop)}>
                    {!showShop ?
                        < IonIcon slot="start" icon={arrowForward} />
                        :
                        <IonIcon slot="start" icon={arrowDown} />
                    }
                    <IonLabel>Boutiques</IonLabel>
                </IonItem>
                {showShop && uniqueShops.map((shop, idx) => (
                    <IonList key={idx}>
                        <IonMenuToggle>
                            <IonItem button onClick={() => getProductsByStore(shop)} routerDirection="none">
                                <IonLabel>{shop}</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>))

                }

                <IonItem button onClick={() => setShowLocation(!showLocation)}>
                    {!showLocation ?
                        < IonIcon slot="start" icon={arrowForward} />
                        :
                        <IonIcon slot="start" icon={arrowDown} />
                    }
                    <IonLabel>Localit??s</IonLabel>
                </IonItem>
                {showLocation && uniqueLocations.map((location, idx) => (
                    <IonList key={idx}>
                        <IonMenuToggle>
                            <IonItem button onClick={() => getProductsByLocation(location)} routerDirection="none">
                                <IonLabel>{location}</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>))

                }


                <IonItem button onClick={() => setShowStatus(!showStatus)}>
                    {!showStatus ?
                        < IonIcon slot="start" icon={arrowForward} />
                        :
                        <IonIcon slot="start" icon={arrowDown} />
                    }
                    <IonLabel>Status</IonLabel>
                </IonItem>
                {showStatus && uniqueStatus.map((status, idx) => (
                    <IonList key={idx}>
                        <IonMenuToggle>
                            <IonItem button onClick={() => getProductsByStatus(status)} routerDirection="none">
                                <IonLabel>{status}</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>))

                }


            </IonContent>
        </IonMenu>
    )
}

export default SlideDrawer;
