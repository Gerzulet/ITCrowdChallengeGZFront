


const BASE_URL = 'http://localhost:3004'

export const UserService = {

  login: async (data: object): Promise<Object> => {
    return await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },



}
