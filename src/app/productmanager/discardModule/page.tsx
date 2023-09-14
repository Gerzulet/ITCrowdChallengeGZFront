"use client"
import { ProductService } from "@/service/ProductService"
import { Product } from "@/types/product"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
export default function discardModule() {


  const [header, setHeader] = useState<any>('')
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    ProductService.getProducts().then(data => setProducts(data))
    setHeader(sessionStorage.getItem('access_token'))
  }, [])


  function discard(id: string) {
    ProductService.deleteProduct(id, header).then((data) => {
      ProductService.getProducts().then(data => setProducts(data))
    }
    )
  }



  return (
    <div className="overflow-x-auto overflow-y-scroll">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>

          {products.map((product: Product, index: number) => (
            <tr key={index}>
              <td>
                <button onClick={() => {
                  discard(product.id)
                }} className="rounded-full">

                  <img className="h-8 w-10" src="/trash.png" alt="trash" />
                </button>
              </td>
              <td>
                {product.name}
              </td>
              <td>{product.description}</td>
              <th>
                {product.price}
              </th>
              <th>
                {product.brand.name}
              </th>
            </tr>

          )
          )}
          {/* row 1 */}
        </tbody>

      </table>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

