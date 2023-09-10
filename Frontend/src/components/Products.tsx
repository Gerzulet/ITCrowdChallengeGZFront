"use client"
import { Bebas_Neue } from "next/font/google"
import { goToDetails } from "@/utils/navigation"
const bebas_neue = Bebas_Neue({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
}
)

const Products = () => {



  return (


    <div id="item1" className=" text-[24rem] overflow-y-auto 2xl:h-screen 2xl:m-0 h-[50rem] md:w-[58rem] ml-18 md:ml-0 mt-10 md:mt-2">
      <div className="w-full  flex flex-col z-30 items-center justify-center">
        <p className={` ${bebas_neue.className} font-semibold text-[40px]`}>
          Take a look at our products
        </p>
        <div className="join">
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn ">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>

      </div>
      <div className="grid md:grid-cols-3 mt-4 gap-2">
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            onClick={goToDetails}
            className="h-auto rounded-lg hover:cursor-pointer"
            src="https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300  col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg "
            src="https://img.freepik.com/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_23-2149448792.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300  col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/foto-gratis/hombre-sueter-negro-sombrero-cubo-negro-sesion-ropa-juvenil_53876-102294.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto  rounded-lg"
            src="https://img.freepik.com/foto-gratis/hermosa-mujer-gorra-beisbol-sesion-estudio-moda-diadema_53876-102175.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/psd-premium/mockup-camiseta-hombre-psd-ropa-logo-verano_53876-141828.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/foto-gratis/hombre-afroamericano-camiseta-negra-al-aire-libre_53876-97162.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/psd-premium/maqueta-camiseta-negra-hombre-psd-modelo-tatuado_53876-150796.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/foto-gratis/hombre-afroamericano-camiseta-negra-al-aire-libre_53876-97162.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="md:h-auto rounded-lg"
            src="https://img.freepik.com/psd-premium/maqueta-camiseta-negra-hombre-psd-modelo-tatuado_53876-150796.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
      </div>
    </div>


  )
}


export default Products
