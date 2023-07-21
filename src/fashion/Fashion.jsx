import './Fashion.css'
import FashionShop from "./FashionShop";

const Fashion = () => {

    return(
        <>
          <div className="fashion-header">
              <div className='model-girl'>
                  <h1>sweat in style</h1>
                  <p>shop our best selling shorts now</p>
                  <button>
                      <a>shop now</a>
                  </button>
              </div>
              <FashionShop/>
          </div>
        </>
    )
}

export default Fashion