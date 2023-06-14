import FlashCards from "./FlashCards";

const FlashDeals = ({productItems,addToCart}) => {
    return(
        <>
          <section className="flash background">
              <div className="container">
                  <div className="heading f_flex">
                      <i className="fa fa-bolt"></i>
                      <h1>Flash Deals</h1>
                  </div>
                  <div className='header-jacket-shop'>
                  <FlashCards productItems={productItems} addToCart={addToCart}/>
                  </div>
              </div>
          </section>
        </>
    )
}
export default FlashDeals