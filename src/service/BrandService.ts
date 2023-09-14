
const BASE_URL = 'https://itcrowdgzbackend.onrender.com'

export const BrandsService = {

  getBrands: async (): Promise<any> => {
    return await fetch(`${BASE_URL}/brands`)
      .then(res => res.json())
  },



}
