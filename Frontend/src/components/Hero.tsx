"use client"
import { Bebas_Neue, Montserrat } from "next/font/google"
import { goToProducts } from "@/utils/navigation"

const montserrat = Montserrat({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
})

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
}
)

const Hero = () => {

  return (
    <div className="hero    md:mt-2 md:h-[24rem] 2xl:h-[38rem]">
      <div className="md:ml-4 hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className={`${bebas_neue.className} text-5xl  md:text-[6rem] 2xl:text-[12rem]  font-bold `}>Let us <span className="text-[#EAC7C7] font-semibold"> guide</span> you</h1>
          <p className={` 2xl:leading-relaxed md:leading-normal mt-5 text-lg ${montserrat.className} md:text-[18px] lg:text-[28px]`}>We are a group of people obsessed with <span className=" font-bold text-blue-400"> helping</span> people choose the <span className="font-bold "> best quality,</span> with the <span className="font-bold">best prices,</span>  maintaining our commitment with the <span className="font-bold">environment</span>.</p> </div>

        <a onClick={goToProducts} className="cursor-pointer md:hidden font-bold">Press here take a look at our <button className="btn btn-neutral ml-2">products!</button></a>

      </div>
    </div>)
}


export default Hero;
