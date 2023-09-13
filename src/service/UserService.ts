
const BASE_URL = 'https://itcrowdgzbackend.onrender.com'

export const UserService = {

  login: async (data: object): Promise<Object> => {
    return await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json())
  },



}
