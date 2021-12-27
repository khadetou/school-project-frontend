import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from "@ionic/react";
import { arrowDown, arrowForward } from "ionicons/icons";
import { useState } from "react";


const SlideDrawer: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

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

                <IonItem button onClick={() => setShowMenu(!showMenu)}>
                    {!showMenu ?
                        < IonIcon slot="start" icon={arrowForward} />
                        :
                        <IonIcon slot="start" icon={arrowDown} />
                    }
                    <IonLabel>Localité</IonLabel>
                </IonItem>
                {showMenu &&
                    <IonList>
                        <IonMenuToggle>
                            <IonItem button routerLink="/products" routerDirection="none">
                                <IonLabel> Dakar </IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                }

            </IonContent>
        </IonMenu>
    )
}

export default SlideDrawer;
