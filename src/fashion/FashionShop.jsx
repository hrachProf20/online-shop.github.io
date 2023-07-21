import data from "./fashionData";

const FashionShop = () => {



    return(

            <div className='fashion-data'>


            {
                data.map((value,index) => {
                    return(
                        <div className='girl-jacket' key={index}>
                            <div className='fashion-item'>
                            <div className='box-fashion'>
                            <img src={value.img} alt=""/>
                            </div>
                                <span className='pages-product-span'>{value.castName}</span>
                               <div className="star-product">
                                   <span className='star-fashion'>{value.icon}</span>
                                   <span className='star-fashion'>{value.icon}</span>
                                   <span className='star-fashion'>{value.icon}</span>
                                   <span className='star-fashion'>{value.icon}</span>
                                   <span className='star-fashion'>{value.icon}</span>
                               </div>
                                <div className="price">
                                    <p>12$</p>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
            </div>

    )
}

export default FashionShop