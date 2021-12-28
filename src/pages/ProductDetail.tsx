import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonSlide, IonSlides, IonToolbar } from '@ionic/react';
import { searchOutline, notificationsOutline } from 'ionicons/icons';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import './ProductDetail.css';


const ProductDetail = () => {
    const { getProductById } = useAction();

    //@ts-ignore
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getProductById(id);
        }
    }, [id]);

    const { data, error, loading } = useTypedSelector(state => state.getProductById);


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton color="primary" className="backbtn" routerLink="/home" routerDirection="back">
                            <img src="/assets/back-dark.svg" alt="" />
                        </IonButton>
                    </IonButtons>
                    <IonButtons slot='end'>
                        <IonButton>
                            <IonIcon icon={searchOutline} color="dark" />
                        </IonButton>

                        <IonButton className="notification">
                            <IonIcon icon={notificationsOutline} color="dark"></IonIcon>
                            <span>&nbsp;</span>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSlides pager={true} class="product-slider">
                    <IonSlide>
                        <img src={data && data!.image} />
                    </IonSlide>
                </IonSlides>

                <div className="ion-padding-vertical">
                    <h1 className="item-name">{data && data.name}</h1>

                    <h4 className="price">
                        {data && data.price} FCFA
                        <span className="real-price">{data && data.price + 10000} FCFA</span>
                    </h4>
                </div>

                <div className="seperator">
                    <hr />
                </div>

                <div className="review">
                    <IonRow>
                        <IonCol size="6">
                            <div className="rating">
                                4.5
                            </div>

                            Status
                        </IonCol>
                        <IonCol size="6">
                            <div className="count">{data && data.status}</div>
                        </IonCol>
                    </IonRow>
                </div>

                <div className="seperator">
                    <hr />
                </div>

                <div className="description">
                    <h5>Description</h5>

                    <p>
                        {data && data.description}
                    </p>

                </div>

                <div className="seperator">
                    <hr />
                </div>

                <div className="variation">
                    <IonSegment /**onchange */ value="size">
                        <IonSegmentButton value="size">
                            <IonLabel>{data && data.store}</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="color">
                            <IonLabel>{data && data.location}</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </div>
            </IonContent>
            <IonFooter>
                <IonRow>
                    <IonCol size="6">
                        <IonButton expand="full" color="light">Add to cart</IonButton>
                    </IonCol>
                    <IonCol size="6">
                        <IonButton expand="full">Buy now</IonButton>
                    </IonCol>
                </IonRow>
            </IonFooter>
        </IonPage>
    )
}

export default ProductDetail;
