"use client"
import { Product } from "@/types/product"


export const getModule = (products: Product[]) => {




  return (
    <div className="overflow-x-auto overflow-y-scroll">
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
