"use client"
import { useState } from "react"
import { createModule } from "./createModule"
import { editModule } from "./editModule"
import { discardModule } from "./discardModule"
import { getModule } from "./getModule"


const productmanager = () => {


  const [displayModule, setModule] = useState(createModule)


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-20">
          <a onClick={() => setModule(createModule)} className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
            <img className="w-10 h-10 mr-2" src="/create.svg" alt="createIcon" />
            CREATE
          </a>
          <a onClick={() => setModule(discardModule)} className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <img className="w-10 h-10 mr-2" src="/discard.svg" alt="discardIcon" />
            DISCARD
          </a>
          <a onClick={() => setModule(editModule)} className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">

            <img className="w-8 h-8 mr-2" src="/edit.svg" alt="editIcon" />
            EDIT
          </a>
          <a onClick={() => setModule(getModule)} className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">

            <img className="w-10 h-10 mr-2" src="/get.svg" alt="getIcon" />
            GET
          </a>
        </div>

        <div>
          {displayModule}
        </div>
      </div>
    </section>
  )
}


export default productmanager
