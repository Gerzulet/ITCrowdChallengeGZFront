"use client"

export default function createModule() {
  return (
    <div className="flex flex-col justify-center items-center ">

      <div className="flex flex-col text-center w-full gap-2">
        <input type="text" placeholder="Image URL" className="input input-bordered  w-auto lg:w-[30%] lg:ml-[28rem]" />
        <input type="text" placeholder="Name of your product" className="input input-bordered  w-auto lg:w-[30%] lg:ml-[28rem]" />
        <input type="text" placeholder="Brand" className="input input-bordered w-auto lg:w-[30%] lg:ml-[28rem]" />
        <input type="text" placeholder="Price" className="input input-bordered w-auto lg:w-[30%] lg:ml-[28rem]" />

        <label className="my-2" htmlFor="text">Description of your product</label>
        <textarea className="sm:w-full textarea textarea-bordered mt-2 lg:w-2/3 mx-auto leading-relaxed text-base" placeholder="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."></textarea>
        <button className="btn btn-primary mt-4 ">Create!</button>

      </div>

    </div>
  )
}
