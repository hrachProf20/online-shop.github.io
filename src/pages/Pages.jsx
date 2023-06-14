import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/discount";
import Shop from "../components/shop/Shop";
import Annu from "../components/annocuments/Annu";
import Wrapper from "../components/wrapper/wrapper";

const Pages = ({productItems,cartItem,addToCart,ShopItems}) => {
    return(
        <>
            <Home cartItem={cartItem}/>
            <FlashDeals productItems={productItems} addToCart={addToCart}/>
            <TopCate/>
            <NewArrivals/>
            <Discount/>
            <Shop ShopItems={ShopItems}  addToCart={addToCart}/>
            {/*<Annu/>*/}
            <Wrapper/>
        </>
    )
}
export default Pages