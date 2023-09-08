import { Bebas_Neue, Montserrat } from "next/font/google"

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
    <div className="hero ml-2  mt-12 md:h-[24rem] md:w-[50%] border-2 border-black ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className={`${bebas_neue.className} text-5xl  md:text-[6rem]  font-bold `}>Let us <span className="text-[#EAC7C7] font-semibold"> guide</span> you</h1>
          <p className={`mt-5 text-lg ${montserrat.className} md:text-[18px]`}>We are a group of people obsessed with <span className=" font-bold text-[#A0C3D2]"> helping</span> people choose the <span className="font-bold "> best quality,</span> with the best prices,  maintaining our commitment with the environment</p> </div>
      </div>
    </div>)
}


export default Hero;
