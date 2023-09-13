import { create } from "zustand"
import { Product } from "@/types/product"


// Define the interface of the Cart state
interface State {
  product: Product
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
  setProduct: (product: Product) => void
}

// Initialize a default state
const INITIAL_STATE: State = {
  product: { "id": "16a0d0b7-e9a8-4fb8-8388-5d7bf5685d69", "name": "distinctio dolorum fugit", "description": "Quis facere natus qui. Voluptas dolorum minus vitae saepe libero.", "image_url": "https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph", "price": 42404, "brandId": "ccad7b7c-2c1b-4080-9022-7dbd2b5d3a5c", "brand": { "id": "ccad7b7c-2c1b-4080-9022-7dbd2b5d3a5c", "name": "Starlight", "logo_url": "https://img.freepik.com/vector-gratis/plantilla-logotipo-empresa-moda-diseno-marca-vector-blanco-negro_53876-156444.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=ais" } },
}

// Create the store with Zustand, combining the status interface and actions
export const useProductDetailStore = create<State & Actions>((set, get) => ({
  product: INITIAL_STATE.product,
  setProduct: (product: Product) => {
    set(state => ({
      product,
    }))
  },
}))
