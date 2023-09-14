"use client"
import { Bebas_Neue, Montserrat } from "next/font/google"
import { UserService } from "@/service/UserService"
import { useState } from "react"
import { useRouter } from "next/navigation"

const montserrat = Montserrat({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
})

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
}
)

export const LoginForm = () => {
  const [username, setUsername] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [loading, setLoading] = useState<String>('LOGIN')
  const router = useRouter()

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await UserService.login({ username, password }).then(data => {
      if (data.statusCode === 200 || data.message === 'Signin Successfull') {
        setLoading('HOLD ON THERE...')
        sessionStorage.setItem('access_token', data.access_token)
        router.push('productmanager')
      }
    })
  };

  return (
    <div className="">
      <h2 className={`2xl:text-[56px] ml-8 mt-4 text-3xl ${bebas_neue.className}`}>Continue your ride with us.</h2>
      <div className="card-body">
        <div className={`form-control ${montserrat.className}`}>
          <label className="label">
            <span className="label-text 2xl:text-2xl">Username</span>
          </label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-2xl">Password</span>
          </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover 2xl:text-2xl">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={(e) => handleLogin(e)} className="btn btn-primary 2xl:text-xl">{loading}</button>
        </div>
      </div>
    </div>
  )
}
