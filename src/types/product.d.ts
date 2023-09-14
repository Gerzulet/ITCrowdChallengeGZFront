export interface Product {
  id: string,
  name: string,
  description: string,
  image_url: string,
  price: number,
  brandId: string,
  brand: Brand


}

export interface Brand {
  id: string,
  name: string,
  logo_url: string,
}

export interface baseProduct {
  name: string,
  description: string,
  image_url: string,
  price: number,
  brandId: string
}
