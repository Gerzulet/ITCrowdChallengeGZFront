import Hero from "./Hero"
import { LoginForm } from "./LoginForm"
import ProductDetails from "./ProductDetails"
import Products from "./Products"

const Main = () => {
  return (
    <section className="flex ">

      <div className="carousel   ">
        <a href="#products" id="goToProducts" className="invisible"></a>
        <a href="#main" id="goToMain" className="invisible"></a>
        <a href="#details" id="goToDetails" className="invisible"></a>

        <div id="main" className="carousel-item w-full md:w-1/2">
          <div className=" overflow-y-hidden mt-20  md:mt-0md:ml-0 flex flex-col items-center">
            <Hero />
            <LoginForm />
          </div>
        </div>
        <div id="products" className="carousel-item w-full md:w-1/2">
          <Products />
        </div>
        <div id="details" className="carousel-item w-full md:w-1/2">
          <ProductDetails />
        </div>

      </div>





    </section>
  )
}

export default Main
