import { Product, baseProduct } from "@/types/product"

const BASE_URL = 'http://www.localhost:3004'

export const ProductService = {

  getProducts: async (): Promise<Product[]> => {
    return await fetch(`${BASE_URL}/products`)
      .then(res => res.json())
  },

  getProductsByName: async (name: string, header: string): Promise<Product[]> => {
    return await fetch(`${BASE_URL}/products/search?name=${name}`, {
      headers: {
        'authorization': header
      }
    })
      .then(res => res.json())
  },


  createProduct: async (data: baseProduct): Promise<any> => {
    return await fetch(`${BASE_URL}/goals`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },

  editProduct: async (pid: string, data: Object): Promise<any> => {
    return await fetch(`${BASE_URL}/products/${pid}`, {
      method: "PATCH",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },



  deleteProduct: async (pid: string, header: string): Promise<any> => {
    return await fetch(`${BASE_URL}/products/${pid}`, {
      method: "DELETE",
      headers: {
        'authorization': header
      }
    }).then(res => res.json())
  },



}
