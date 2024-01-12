import { Link } from "react-router-dom";
 

const Home=()=>{

    return(
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
      <div className="shop_brand_name_2" style={{width:"100%" , height:"50px",border:"2px solid black"}}>
            <span>Realme SmartPhone</span>
            <button >VIEW ALL</button>
      </div>
   </section>

        </>
    )
}

export default Home;