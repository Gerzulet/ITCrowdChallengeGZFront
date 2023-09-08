import Hero from "./Hero"
import { LoginForm } from "./LoginForm"
import Products from "./Products"

const Main = () => {
  return (
    <section className="flex overflow-x-scroll">

      <div className="ml-12 md:ml-0 flex flex-col justify-center items-center">
        <Hero />
        <LoginForm />
      </div>

      <Products />




    </section>
  )
}

export default Main
