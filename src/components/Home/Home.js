import React from 'react';
import './Home.css';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                className="home__image"
                src="https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_health_hygiene_110921_460.jpg" alt=""/>

                <div className="home__row">
                    <Product
                        id="4903851"
                        title="Aashirvaad Atta/Godihittu - Multigrains, 1 kg Pouch"
                        price={999.99}
                        image="https://www.bigbasket.com/media/uploads/p/l/284422_8-aashirvaad-atta-multigrains.jpg"
                        rating={5}
                    />
                    <Product
                        id="4903852"
                        title="India Gate Basmati Rice/Basmati Akki - Feast Rozzana, 5 kg Pouch"
                        price={24.99}
                        image="https://www.bigbasket.com/media/uploads/p/l/283426_2-india-gate-basmati-rice-feast-rozzana.jpg" 
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                            id="4903850"
                            title="Saffola Gold Refined Cooking oil | Blended Rice Bran & Sunflower oil | Helps Keeps Heart Healthy, 5 L Jar "
                            price={199.99}
                            rating={3}
                            image="https://www.bigbasket.com/media/uploads/p/l/147493_13-saffola-gold-refined-cooking-oil-blended-rice-bran-sunflower-oil-helps-keeps-heart-healthy.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Cumin/Jeera 200G + Mustard/Rai 200G + Black Pepper 200G + Methi 200G, Combo 4 Items"
                            price={98.99}
                            rating={5}
                            image="https://www.bigbasket.com/media/uploads/p/l/1204990_1-bb-royal-organic-cuminjeera-200g-mustardrai-200g-black-pepper-200g-methi-200g.jpg"
                        />
                        <Product
                            id="3254354345"
                            title="Refillable Gas Lighter With Flame (27.5cm), 1 pc"
                            price={598.99}
                            rating={4}
                            image="https://www.bigbasket.com/media/uploads/p/l/40021969_2-fackelmann-refillable-gas-lighter-with-flame-275cm.jpg"
                        />
                </div>

                <div className="home__row">
                    <Product
                            id="90829332"
                            title="Pure Belgian Dark Chocolate, 50 g"
                            price={1094.98}
                            rating={4}
                            image="https://www.bigbasket.com/media/uploads/p/l/40100819_10-lindberg-chilli-pure-belgian-dark-chocolate.jpg"
                        />
                </div>
            </div>
        </div>
    );
};

export default Home;