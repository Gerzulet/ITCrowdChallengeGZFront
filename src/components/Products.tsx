"use client"
import { Bebas_Neue } from "next/font/google"
const bebas_neue = Bebas_Neue({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
}
)

const Products = () => {

  function simulateClick() {
    document.getElementById("selector1")?.click()
  }

  return (


    <div id="item1" className="text-[24rem] overflow-y-scroll h-[50rem] md:w-[58rem] ml-48 md:ml-0 mt-10 md:mt-2">
      <div className="w-full flex justify-center">
        <p className={` ${bebas_neue.className} font-semibold text-[40px]`}>
          Take a look at our products

        </p>

      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1 md:row-span-2">
          <img
            onClick={simulateClick}
            className="h-auto rounded-lg"
            src="https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300  col-span-3 md:col-span-1 md:row-span-2">
          <img
            className="h-48 rounded-lg "
            src="https://img.freepik.com/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_23-2149448792.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300  col-span-3 md:col-span-1">
          <img
            className="h-28 rounded-lg"
            src="https://img.freepik.com/foto-gratis/hombre-sueter-negro-sombrero-cubo-negro-sesion-ropa-juvenil_53876-102294.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="h-54  rounded-lg"
            src="https://img.freepik.com/foto-gratis/hermosa-mujer-gorra-beisbol-sesion-estudio-moda-diadema_53876-102175.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="h-32 rounded-lg"
            src="https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300 col-span-3 md:col-span-2">
          <img
            className="h-62 rounded-lg"
            src="https://img.freepik.com/psd-premium/mockup-camiseta-hombre-psd-ropa-logo-verano_53876-141828.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="h-48 rounded-lg"
            src="https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300 col-span-3 md:col-span-2">
          <img
            className="h-92 rounded-lg"
            src="https://img.freepik.com/foto-gratis/hombre-afroamericano-camiseta-negra-al-aire-libre_53876-97162.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
        <div className="transform p-4 hover:scale-125 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
          <img
            className="h-60 rounded-lg"
            src="https://img.freepik.com/psd-premium/maqueta-camiseta-negra-hombre-psd-modelo-tatuado_53876-150796.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"
            alt=""
          />
        </div>
      </div>
    </div>


  )
}


export default Products
