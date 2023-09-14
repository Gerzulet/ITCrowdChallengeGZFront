"use client"
import { Bebas_Neue } from "next/font/google"
import { useEffect, useState } from "react"
import { useHeaderStore } from "@/store/useHeader"
import Link from 'next/link'

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: 'normal',
  subsets: ['latin']
}
)



export const NavBar = () => {

  const { header } = useHeaderStore()
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    console.log(header)
    if (header !== '' || header !== undefined) {
      setLogged(true)
    }
  }, [header])

  function goHome() { // Get this files elsewhere in the future
    document.getElementById("goToMain")?.click()
  }
  const questionmark = 'https://img.freepik.com/vector-gratis/signo-interrogacion-circulo-estilo-dibujos-animados_78370-1434.jpg?size=626&ext=jpg&ga=GA1.2.2111661000.1694584010&semt=ais'
  const loggedavatar = 'https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436180.jpg?w=740&t=st=1694197362~exp=1694197962~hmac=342aa15072cd4ae37141447bfe70c1b9e5ea700aa89085d56576d275098e76f9'


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
                <img alt="avatar" src={logged ? loggedavatar : questionmark} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/productmanager">Admin panel</Link></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
