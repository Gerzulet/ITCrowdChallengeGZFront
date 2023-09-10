"use client"
import { Bebas_Neue } from "next/font/google"
import { useState } from "react"


const bebas_neue = Bebas_Neue({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
}
)


export const NavBar = () => {


  const [logged, setLogged] = useState(false)

  function goHome() { // Get this files elsewhere in the future
    document.getElementById("goToMain")?.click()
  }


  return (
    <nav>
      <div className="navbar ">
        <div className="flex-1">
          <a onClick={goHome} className={`btn btn-ghost ml-4 md:text-5xl font-black normal-case ${bebas_neue.className} text-3xl `}>CrowdClothing</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
              <div className="w-10 lg:w-[48px]   rounded-full">
                <img alt="avatar" src="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436180.jpg?w=740&t=st=1694197362~exp=1694197962~hmac=342aa15072cd4ae37141447bfe70c1b9e5ea700aa89085d56576d275098e76f9" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
