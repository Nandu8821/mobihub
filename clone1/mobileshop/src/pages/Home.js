import { Link } from "react-router-dom";


const Home = () => {

    return (
        <>
            <div className="scoll_images">
                <div className="images">

                </div>
            </div>


            <section className="best_seller">
                <span>Best Sellers</span>
                <Link>
                    <div id="item_1">
                        <img src="./images/i phone 13.png" alt="iphone" />
                        <span>I phone 13 <br /> Best Offers </span>
                    </div>
                </Link>

                <div id="item_2">
                    <img src="./images/Galaxy.png" alt="poco" />
                    <span>Samsung s23 ultra <br /> Best Offers </span>
                </div>


                <div id="item_3">
                    <img src="./images/pocoX3.png" alt="poco" />
                    <span> Poco X3  <br /> Best Offers </span>
                </div>

            </section>


            <section className="Offer">

                <img src="./images/offers.png" alt="poco" />

            </section>




            <section className="Shop_Brand_main">
                <div className="shop_brand_name">
                    <span>Shop By Brand </span>
                </div>
                <div className="shop_brand_name_2" style={{ width: "100%", height: "50px", border: "2px solid black" }}>
                    <span>Realme SmartPhone</span>
                    <button >VIEW ALL</button>
                </div>


           
                <div className="realme_main_div">
                    <img src="./images/realme1.webp" alt="realme" />
                    <span>Realme Narzo 50 Pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                    <div className="realme_1_img">
                        <img src="./images/rating.png" alt="rating" /><br />
                        <p>₹ 10,999<span>18,999</span></p>
                    </div>
                </div>


                <div className="realme_main_div2">
                    <img src="./images/realme2.webp" alt="realme" />
                    <span>Realme Narzo 50 Pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                    <div className="realme_2_img">
                        <img src="./images/rating.png" alt="rating" /><br />
                        <p>₹ 14,999<span>18,999</span></p>
                    </div>
                </div>



                <div className="realme_main_div3">
                    <img src="./images/realme3.webp" alt="realme" />
                    <span>Realme Narzo 60x  5G <br /> <p>(Mars Orange 64)</p> </span>
                    <div className="realme_3_img">
                        <img src="./images/rating.png" alt="rating" /><br />
                        <p>₹ 17,999<span>22,999</span></p>
                    </div>
                </div>


           


                <div className="realme_main_div4">
                    <img src="./images/realme4.webp" alt="realme" />
                    <span>Realme Narzo 50 Pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                    <div className="realme_4_img">
                        <img src="./images/rating.png" alt="rating" /><br />
                        <p>₹ 20,999<span>25,999</span></p>
                    </div>
                </div>

                   
            </section>


            <section className="Poco_section_main">
                <div className="Poco_brand_name" style={{ width: "100%", height: "50px", border: "2px solid black" }}>
                    <span >Poco SmartPhone</span>
                    <button >VIEW ALL</button>
                </div>

                <div className="poco_main_div">
                    <img src="./images/poco1.png" alt="realme" />
                    <span>Poco X5 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                    <div className="poco_1_img">
                        <img src="./images/rating.png" alt="rating" /><br />
                        <p>₹ 10,999<span>18,999</span></p>
                    </div>
                </div>


                <div className="poco2_div">
                    <img src="./images/poco2.png" alt="realme" />
                    <span>Poco X5 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                    <div className="poco_2_img">
                        <img src="./images/rating.png" alt="rating" /><br />
                        <p>₹ 10,999<span>18,999</span></p>
                    </div>
                </div>



                    <div className="poco3_div">
                        <img src="./images/poco3.png" alt="realme" />
                        <span>Poco X4 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
                        <div className="poco_3_img">
                            <img src="./images/rating.png" alt="rating" /><br />
                            <p>₹ 10,999<span>18,999</span></p>
                        </div>
                    </div>




                    <div className="poco4_div">
                        <img src="./images/poco4.png" alt="realme" />
                        <span>Poco F5 5G <br /> <p>(Mars Orange 64)</p> </span>
                        <div className="poco_4_img">
                            <img src="./images/rating.png" alt="rating" /><br />
                            <p>₹ 10,999<span>18,999</span></p>
                        </div>
                    </div>

            </section>




            

        </>
    )
}

export default Home;