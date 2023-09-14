"use client"
import { useState, useEffect } from "react"
import { BrandsService } from "@/service/BrandService"
import { Brand } from "@/types/product"
import { ProductService } from "@/service/ProductService"
import Link from "next/link"

export default function createModule() {
  const [availableBrands, setAvailableBrands] = useState<Brand[]>()
  const [header, setHeader] = useState<any>('')
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productImage, setProductImage] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productBrand, setProductBrand] = useState('')
  const [message, setMessage] = useState('')



  useEffect(() => {
    BrandsService.getBrands().then(data => {
      setAvailableBrands(data)
    })
    setHeader(sessionStorage.getItem('access_token'))

  }, [])


  async function handleCreate(e: any) {
    e.preventDefault()
    if (productName === '' || productBrand === '' || productImage === '' || productPrice === '' || productDescription === '') {
      setMessage('Fields cannot be empty')
    } else {
      const response = await ProductService.createProduct({ name: productName, brandId: productBrand, price: parseInt(productPrice), image_url: productImage, description: productDescription }, header)
      setMessage(response.message)
    }
  }


  return (
    <div className="">

      <Link className="m-8 font-bold cursor-pointer underline" href="/productmanager">Go back</Link>

      <div className="flex flex-col justify-center items-center text-center w-full gap-2">
        <input onChange={(e) => setProductImage(e.target.value)} required type="text" placeholder="Image URL" className="input input-bordered  w-auto lg:w-[30%] " />
        <input onChange={(e) => setProductName(e.target.value)} required type="text" placeholder="Name of your product" className="input input-bordered  w-auto lg:w-[30%] " />
        <input onChange={(e) => setProductPrice(e.target.value)} type="text" placeholder="Price" className="input input-bordered w-auto lg:w-[30%] " />

        <label className="my-2" htmlFor="text">Description of your product</label>
        <textarea onChange={(e) => setProductDescription(e.target.value)} rows={4} className="sm:w-full textarea textarea-bordered mt-2 lg:w-2/3 mx-auto leading-relaxed text-base" placeholder="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."></textarea>
        <div>
          <select className="select select-bordered ">
            <option disabled aria-required selected>Select a brand</option>
            {availableBrands?.map(el => (
              <option onClick={(e) => setProductBrand(el.id)}>{el.name}</option>
            ))}
          </select>
        </div>
        <button onClick={(e) => handleCreate(e)} className="btn btn-primary mt-4 ">Create!</button>
        {message}

      </div>

    </div>
  )
}
