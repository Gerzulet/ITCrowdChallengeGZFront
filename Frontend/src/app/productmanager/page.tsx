"use client"
import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const productmanager = () => {

  const router = useRouter()



  useEffect(() => {
    const token = sessionStorage.getItem('access_token')
    if (!token) router.push('/')
  }, [])



  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-col items-center justify-center">
        <div className=" mx-auto mb-20 gap-2">

          <div className="flex flex-col justify-center items-center">
            <Link href="/productmanager/createModule" className=" py-3 w-1/2 sm:w-auto justify-center sm:justify-start  title-font font-medium  items-center leading-none border-indigo-500  tracking-wider rounded-t">
              <img className="mr-2 w-28 h-28 md:w-20 md:h-20 2xl:w-36 2xl:h-36" src="/create.svg" alt="createIcon" />
              CREATE
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Link href="/productmanager/discardModule" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <img className="mr-2 w-28 h-28 md:w-20 md:h-20 2xl:w-36 2xl:h-36" src="/discard.svg" alt="discardIcon" />
              DISCARD
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Link href="/productmanager/editModule" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <img className="mr-2 w-28 h-28 md:w-20 md:h-20 2xl:w-36 2xl:h-36" src="/edit.svg" alt="editIcon" />
              EDIT
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center"
          >
            <Link href="/productmanager/getModule" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <img className="mr-2 w-28 h-28 md:w-20 md:h-20 2xl:w-36 2xl:h-36" src="/get.svg" alt="getIcon" />
              GET
            </Link>

          </div>
        </div>
        <div>
        </div>
      </div>
    </section>
  )
}


export default productmanager
