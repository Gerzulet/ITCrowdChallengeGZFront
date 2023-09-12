import { Product, baseProduct } from "@/types/product"

const BASE_URL = 'http://localhost:3004'

export const ProductService = {

  getProducts: async (): Promise<Product[]> => {
    return await fetch(`${BASE_URL}/products`)
      .then(res => res.json())
  },

  getProductsByName: async (name: string): Promise<Product[]> => {
    return await fetch(`${BASE_URL}/products/search?name=${name}`)
      .then(res => res.json())
  },


  createProduct: async (data: baseProduct): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },

  editProduct: async (pid: string, data: Object): Promise<Object> => {
    return await fetch(`${BASE_URL}/products/${pid}`, {
      method: "PATCH",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },



  deleteProduct: async (pid: string): Promise<Object> => {
    return await fetch(`${BASE_URL}/products/${pid}`, {
      method: "DELETE",
    }).then(res => res.json())
  },



}
