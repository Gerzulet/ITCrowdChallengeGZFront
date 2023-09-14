"use client"
import { Product } from "@/types/product"
import { useState, useEffect } from "react"
import { useListOfProductStore } from "@/store/useListProducts"
import { ProductService } from "@/service/ProductService"
import Link from "next/link"

export default function getModule() {

  const [header, setHeader] = useState<any>('')
  const [products, setProducts] = useState<Product[]>([])
  const { listOfProducts } = useListOfProductStore()


  useEffect(() => {
    ProductService.getProducts().then(data => setProducts(data))
    const token = sessionStorage.getItem('access_token')
    setHeader(token)
  }, [])





  return (
    <div className="overflow-x-auto overflow-y-scroll">
      <Link href="/productmanager">Go back</Link>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
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
    </div>
  )
}
