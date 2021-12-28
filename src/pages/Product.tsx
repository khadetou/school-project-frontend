import { IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { arrowRedoOutline, cart, cartOutline, chevronBackOutline, heart, heartOutline } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useAction } from "../hooks/useActions";
import './Product.css';



const Product: React.FC = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const product = {
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "product1",
        price: 10
    };
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
    const { getProducts } = useAction();
    //@ts-ignore
    const { category } = useParams();
    //@ts-ignore
    const { search } = useParams();
    //@ts-ignore
    const { status } = useParams();
    //@ts-ignore
    const { location } = useParams();
    //@ts-ignore
    const { store } = useParams();

    useEffect(() => {
        if (category) {
            getProducts("", category);
        }
        if (search) {
            getProducts(search);
        }
        if (location) {
            getProducts(location);
        }
        if (status) {
            getProducts(status);
        }
        if (store) {
            getProducts(store);
        }
        if (!category && !search && !location && !status && !store) {
            getProducts();
        }
    }, [])



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>View Product</IonTitle>
                    <IonButtons slot="end">
                        <IonBadge color="dark">8</IonBadge>
                        <IonButton color="dark">
                            <IonIcon icon={cart} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" >
                            <IonCard className="category-card">
                                <IonCardHeader className="product-card-header">
                                    <div className="product-card-actions">
                                        <IonIcon className="product-card-action" color={isFavorite ? "danger" : "medium"} icon={isFavorite ? heart : heartOutline} onClick={() => setIsFavorite(!isFavorite)} />
                                        <IonIcon style={{ position: "absolute", display: "none" }} className={`product-card-action  animate__animated`} color="danger" icon={heart} />
                                        <IonIcon className="product-card-action" size="medium" icon={arrowRedoOutline} />
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                    <p className="ion-text-wrap">{product.name}</p>
                                </IonCardHeader>
                                <IonCardContent className="category-card-content">
                                    <div className="product-price">
                                        <IonButton color="light" size="large">
                                            $ {product.price}
                                        </IonButton>
                                        <IonButton size="large" color="dark">
                                            <IonIcon icon={cartOutline} />&nbsp;&nbsp;Add to Cart
                                        </IonButton>
                                        <IonIcon icon={cart} color="dark" style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated" />
                                    </div>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="category-card">
                                <IonCardHeader className="product-card-header">
                                    <div className="product-card-actions">
                                        <IonIcon className="product-card-action" color={isFavorite ? "danger" : "medium"} icon={isFavorite ? heart : heartOutline} onClick={() => setIsFavorite(!isFavorite)} />
                                        <IonIcon style={{ position: "absolute", display: "none" }} className={`product-card-action  animate__animated`} color="danger" icon={heart} />
                                        <IonIcon className="product-card-action" size="medium" icon={arrowRedoOutline} />
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                    <p className="ion-text-wrap">{product.name}</p>
                                </IonCardHeader>
                                <IonCardContent className="category-card-content">
                                    <div className="product-price">
                                        <IonButton color="light" size="large">
                                            $ {product.price}
                                        </IonButton>
                                        <IonButton size="large" color="dark">
                                            <IonIcon icon={cartOutline} />&nbsp;&nbsp;Add to Cart
                                        </IonButton>
                                        <IonIcon icon={cart} color="dark" style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated" />
                                    </div>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="category-card">
                                <IonCardHeader className="product-card-header">
                                    <div className="product-card-actions">
                                        <IonIcon className="product-card-action" color={isFavorite ? "danger" : "medium"} icon={isFavorite ? heart : heartOutline} onClick={() => setIsFavorite(!isFavorite)} />
                                        <IonIcon style={{ position: "absolute", display: "none" }} className={`product-card-action  animate__animated`} color="danger" icon={heart} />
                                        <IonIcon className="product-card-action" size="medium" icon={arrowRedoOutline} />
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                    <p className="ion-text-wrap">{product.name}</p>
                                </IonCardHeader>
                                <IonCardContent className="category-card-content">
                                    <div className="product-price">
                                        <IonButton color="light" size="large">
                                            $ {product.price}
                                        </IonButton>
                                        <IonButton size="large" color="dark">
                                            <IonIcon icon={cartOutline} />&nbsp;&nbsp;Add to Cart
                                        </IonButton>
                                        <IonIcon icon={cart} color="dark" style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated" />
                                    </div>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="category-card">
                                <IonCardHeader className="product-card-header">
                                    <div className="product-card-actions">
                                        <IonIcon className="product-card-action" color={isFavorite ? "danger" : "medium"} icon={isFavorite ? heart : heartOutline} onClick={() => setIsFavorite(!isFavorite)} />
                                        <IonIcon style={{ position: "absolute", display: "none" }} className={`product-card-action  animate__animated`} color="danger" icon={heart} />
                                        <IonIcon className="product-card-action" size="medium" icon={arrowRedoOutline} />
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                    <p className="ion-text-wrap">{product.name}</p>
                                </IonCardHeader>
                                <IonCardContent className="category-card-content">
                                    <div className="product-price">
                                        <IonButton color="light" size="large">
                                            $ {product.price}
                                        </IonButton>
                                        <IonButton size="large" color="dark">
                                            <IonIcon icon={cartOutline} />&nbsp;&nbsp;Add to Cart
                                        </IonButton>
                                        <IonIcon icon={cart} color="dark" style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated" />
                                    </div>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="category-card">
                                <IonCardHeader className="product-card-header">
                                    <div className="product-card-actions">
                                        <IonIcon className="product-card-action" color={isFavorite ? "danger" : "medium"} icon={isFavorite ? heart : heartOutline} onClick={() => setIsFavorite(!isFavorite)} />
                                        <IonIcon style={{ position: "absolute", display: "none" }} className={`product-card-action  animate__animated`} color="danger" icon={heart} />
                                        <IonIcon className="product-card-action" size="medium" icon={arrowRedoOutline} />
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                    <p className="ion-text-wrap">{product.name}</p>
                                </IonCardHeader>
                                <IonCardContent className="category-card-content">
                                    <div className="product-price">
                                        <IonButton color="light" size="large">
                                            $ {product.price}
                                        </IonButton>
                                        <IonButton size="large" color="dark">
                                            <IonIcon icon={cartOutline} />&nbsp;&nbsp;Add to Cart
                                        </IonButton>
                                        <IonIcon icon={cart} color="dark" style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated" />
                                    </div>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="category-card">
                                <IonCardHeader className="product-card-header">
                                    <div className="product-card-actions">
                                        <IonIcon className="product-card-action" color={isFavorite ? "danger" : "medium"} icon={isFavorite ? heart : heartOutline} onClick={() => setIsFavorite(!isFavorite)} />
                                        <IonIcon style={{ position: "absolute", display: "none" }} className={`product-card-action  animate__animated`} color="danger" icon={heart} />
                                        <IonIcon className="product-card-action" size="medium" icon={arrowRedoOutline} />
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                    <p className="ion-text-wrap">{product.name}</p>
                                </IonCardHeader>
                                <IonCardContent className="category-card-content">
                                    <div className="product-price">
                                        <IonButton color="light" size="large">
                                            $ {product.price}
                                        </IonButton>
                                        <IonButton size="large" color="dark">
                                            <IonIcon icon={cartOutline} />&nbsp;&nbsp;Add to Cart
                                        </IonButton>
                                        <IonIcon icon={cart} color="dark" style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated" />
                                    </div>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="category-card">
                                <IonCardHeader className="product-card-header">
                                    <div className="product-card-actions">
                                        <IonIcon className="product-card-action" color={isFavorite ? "danger" : "medium"} icon={isFavorite ? heart : heartOutline} onClick={() => setIsFavorite(!isFavorite)} />
                                        <IonIcon style={{ position: "absolute", display: "none" }} className={`product-card-action  animate__animated`} color="danger" icon={heart} />
                                        <IonIcon className="product-card-action" size="medium" icon={arrowRedoOutline} />
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                    <p className="ion-text-wrap">{product.name}</p>
                                </IonCardHeader>
                                <IonCardContent className="category-card-content">
                                    <div className="product-price">
                                        <IonButton color="light" size="large">
                                            $ {product.price}
                                        </IonButton>
                                        <IonButton size="large" color="dark">
                                            <IonIcon icon={cartOutline} />&nbsp;&nbsp;Add to Cart
                                        </IonButton>
                                        <IonIcon icon={cart} color="dark" style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated" />
                                    </div>
                                </IonCardContent>
                            </IonCard>

                            <IonCard className="category-card">
                                <IonCardHeader className="product-card-header">
                                    <div className="product-card-actions">
                                        <IonIcon className="product-card-action" color={isFavorite ? "danger" : "medium"} icon={isFavorite ? heart : heartOutline} onClick={() => setIsFavorite(!isFavorite)} />
                                        <IonIcon style={{ position: "absolute", display: "none" }} className={`product-card-action  animate__animated`} color="danger" icon={heart} />
                                        <IonIcon className="product-card-action" size="medium" icon={arrowRedoOutline} />
                                    </div>
                                    <img src={product.img} alt={product.name} />
                                    <p className="ion-text-wrap">{product.name}</p>
                                </IonCardHeader>
                                <IonCardContent className="category-card-content">
                                    <div className="product-price">
                                        <IonButton color="light" size="large">
                                            $ {product.price}
                                        </IonButton>
                                        <IonButton size="large" color="dark">
                                            <IonIcon icon={cartOutline} />&nbsp;&nbsp;Add to Cart
                                        </IonButton>
                                        <IonIcon icon={cart} color="dark" style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated" />
                                    </div>
                                </IonCardContent>
                            </IonCard>

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Product;
