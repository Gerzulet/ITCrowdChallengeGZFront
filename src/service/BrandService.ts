
const BASE_URL = 'http://www.localhost:3004'

export const BrandsService = {

  getBrands: async (): Promise<any> => {
    return await fetch(`${BASE_URL}/brands`)
      .then(res => res.json())
  },



}
