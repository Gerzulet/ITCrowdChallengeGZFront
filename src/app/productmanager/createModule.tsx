"use client"

export const createModule = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {/* <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3  mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
      <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3  mx-auto mb-10 object-cover object-center rounded">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#a0c3d2] ">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-blac"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-black">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <div className="flex flex-col text-center w-full">
        <input type="text" placeholder="Name of your product" className="input input-bordered my-2 w-auto lg:w-[30%] lg:ml-[28rem]" />
        <input type="text" placeholder="Brand" className="input input-bordered w-auto lg:w-[30%] lg:ml-[28rem]" />

        <label className="my-2" htmlFor="text">Description of your product</label>
        <textarea className="sm:w-full textarea textarea-bordered mt-2 lg:w-2/3 mx-auto leading-relaxed text-base" placeholder="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."></textarea>
        <button className="btn btn-primary mt-4 ">Create!</button>

      </div>

    </div>
  )
}
