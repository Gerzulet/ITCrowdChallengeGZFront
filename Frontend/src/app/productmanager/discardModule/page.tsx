"use client"
import { ProductService } from "@/service/ProductService"
import { Product } from "@/types/product"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function discardModule() {

  const [header, setHeader] = useState<any>('')
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
      <Link className="ml-2 font-bold cursor-pointer underline" href="/productmanager">Go back</Link>
      <table className="table">
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
                <div className="flex flex-col justify-center items-center">
                  {product.name}
                  <button onClick={() => {
                    discard(product.id)
                  }} className="md:hidden rounded-full">
                    <img className="h-8 w-10 mt-4" src="/trash.png" alt="trash" />
                  </button>
                </div>
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
        </tbody>

      </table>
    </div>
  )
}

