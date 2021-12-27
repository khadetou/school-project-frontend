import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonSlide, IonSlides, IonToolbar } from '@ionic/react';
import { searchOutline, notificationsOutline } from 'ionicons/icons';
import './ProductDetail.css';


const ProductDetail = () => {
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
                        <img src="/assets/product-slider/prod-slide1.png" />
                    </IonSlide>
                    <IonSlide>
                        <img src="/assets/product-slider/prod-slide1.png" />
                    </IonSlide>
                    <IonSlide>
                        <img src="/assets/product-slider/prod-slide1.png" />
                    </IonSlide>
                </IonSlides>

                <div className="ion-padding-vertical">
                    <h1 className="item-name">Black turtleneck top</h1>

                    <h4 className="price">
                        $42
                        <span className="real-price">$62</span>
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

                            Very Good
                        </IonCol>
                        <IonCol size="6">
                            <div className="count">49 Reviews</div>
                        </IonCol>
                    </IonRow>
                </div>

                <div className="seperator">
                    <hr />
                </div>

                <div className="description">
                    <h5>Description</h5>

                    <p>
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                    </p>

                </div>

                <div className="seperator">
                    <hr />
                </div>

                <div className="variation">
                    <IonSegment /**onchange */ value="size">
                        <IonSegmentButton value="size">
                            <IonLabel>Select Size</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="color">
                            <IonLabel>Select Color</IonLabel>
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
