import Hero from "./Hero"
import { LoginForm } from "./LoginForm"
import Products from "./Products"

const Main = () => {
  return (
    <section className="flex overflow-x-scroll">

      <div className="carousel ">

        <div id="item1" className="carousel-item w-1/2">
          <div className="ml-12 md:ml-0 flex flex-col justify-center items-center">
            <Hero />
            <LoginForm />
            <a href="#item3" id="selector1" className="invisible">go to details</a>
          </div>
        </div>
        <div id="item2" className="carousel-item w-1/2">
          <Products />
        </div>
        <div id="item3" className="carousel-item w-1/2">
          <Products />
        </div>

      </div>





    </section>
  )
}

export default Main
