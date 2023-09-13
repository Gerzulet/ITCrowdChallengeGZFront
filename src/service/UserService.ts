
const BASE_URL = 'https://itcrowdgzbackend.onrender.com'

export const UserService = {

  login: async (data: object): Promise<any> => {
    return await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json())
  },



}
