"use client"
import { Bebas_Neue } from "next/font/google"
import { goToDetails } from "@/utils/navigation"
import { useEffect, useState } from "react"
import { ProductService } from "@/service/ProductService"
import { Product } from "@/types/product"
const bebas_neue = Bebas_Neue({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
}
)

const Products = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1);


  function paginateElements(elements: Product[], page: number, elementsPerPage: number) {
    const start = (page - 1) * elementsPerPage;
    const end = start + elementsPerPage;
    return elements.slice(start, end);
  }

  const listOfProducts = paginateElements(products, page, 9)

  useEffect(() => {
    ProductService.getProducts().then(data => setProducts(data))
  })

  const handleClick = (e: any) => {
    const button = e.target;
    const activeClass = "btn-active";

    button.parentElement.querySelectorAll(".btn").forEach((btn: any) => {
      btn.classList.remove(activeClass);
    });

    button.classList.add(activeClass);

    setPage(button.textContent);
  };
  return (


    <div id="item1" className=" text-[24rem] overflow-y-auto 2xl:h-screen 2xl:m-0 h-[50rem] md:w-[58rem] ml-18 md:ml-0 mt-10 md:mt-2">
      <div className="w-full  flex flex-col z-30 items-center justify-center">
        <p className={` ${bebas_neue.className} font-semibold text-[40px]`}>
          Take a look at our products
        </p>
        <div className="join">
          <button onClick={handleClick} className="join-item btn btn-active ">1</button>
          <button onClick={handleClick} className="join-item btn ">2</button>
          <button onClick={handleClick} className="join-item btn ">3</button>
          <button onClick={handleClick} className="join-item btn ">4</button>

        </div>

      </div>
      <div className="grid md:grid-cols-3 mt-4 gap-2">
        {
          listOfProducts?.map((product, index) => (
            <div key={index} className="transform p-4 hover:scale-110 transition-transform ease-in-out duration-300 col-span-3 md:col-span-1">
              <img
                onClick={goToDetails}
                className="h-auto rounded-lg hover:cursor-pointer"
                src={product.image_url}
                alt={product.name}
              />
            </div>

          ))}

      </div>
    </div>


  )
}


export default Products
