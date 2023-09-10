
import { Bebas_Neue, Montserrat } from "next/font/google"


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
  return (
    <div className="">
      <h2 className={`ml-8 mt-4 text-3xl ${bebas_neue.className}`}>Continue your ride with us.</h2>
      <div className="card-body">
        <div className={`form-control ${montserrat.className}`}>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  )
}
