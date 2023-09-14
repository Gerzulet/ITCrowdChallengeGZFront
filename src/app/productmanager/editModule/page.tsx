"use client"
import { ProductService } from "@/service/ProductService"
import { BrandsService } from "@/service/BrandService"
import { Brand, Product } from "@/types/product"
import { useEffect, useState } from "react"
export default function editModule() {


  const [header, setHeader] = useState<any>('')
  const [products, setProducts] = useState<Product[]>([])
  const [availableBrands, setAvailableBrands] = useState<Brand[]>()
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productImage, setProductImage] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productBrand, setProductBrand] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    ProductService.getProducts().then(data => {
      setProducts(data)
    })
    BrandsService.getBrands().then(data => {
      setAvailableBrands(data)
    })
    setHeader(sessionStorage.getItem('access_token'))

  }, [])


  async function handleEdit(e: any, id: string) {
    e.preventDefault()
    if (productName === '' || productBrand === '' || productImage === '' || productPrice === '' || productDescription === '') {
      setMessage('Fields cannot be empty')
    } else {
      const response = await ProductService.editProduct(id, { name: productName, brandId: productBrand, price: parseInt(productPrice), image_url: productImage, description: productDescription }, header)
      setMessage(response.message)
      ProductService.getProducts().then(data => {
        setProducts(data)
      })

    }
  }


  return (
    <div className="overflow-x-auto overflow-y-scroll">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product, index: number) => (
            <tr key={index}>
              <td>
                <button onClick={() => (document.getElementById(`my_modal_${index}`) as HTMLFormElement).showModal()} className="rounded-full">

                  <img className="h-6 w-6" src="/edit.svg" alt="edit" />
                </button>
              </td>
              <td>
                <div className="flex flex-col justify-center items-center gap-5 md:flex-wrap">
                  {product.name}
                  <button onClick={() => (document.getElementById(`my_modal_${index}`) as HTMLFormElement).showModal()} className="md:hidden rounded-full">
                    <img className="h-4 w-4" src="/edit.svg" alt="edit" />
                  </button>
                </div>

              </td>
              <td>{product.description}</td>
              <th>
                {product.price}
              </th>
              <th>
                {product.brand.name}
              </th>
              <dialog id={`my_modal_${index}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col  justify-center items-center ">
                  <h3 className="font-bold text-lg mb-4">Modify your product!</h3>
                  <form className="gap-6 flex flex-col justify-center items-center" >
                    <input onChange={(e) => setProductName(e.target.value)} type="text" placeholder={product.name} required className="input input-bordered w-full max-w-xs" />
                    <input onChange={(e) => setProductDescription(e.target.value)} type="text" placeholder={product.description} required className="input input-bordered w-full max-w-xs" />
                    <input onChange={(e) => setProductImage(e.target.value)} type="text" placeholder={product.image_url} required className="input input-bordered w-full max-w-xs" />
                    <input
                      onChange={(e) => setProductPrice(e.target.value)}
                      type="text"
                      required
                      placeholder="Price: Min: 8000 Max: 45000"
                      className="input input-bordered w-full max-w-xs"
                      pattern="[0-9]{1,6}"
                      min="8000"
                      max="45000"
                    />
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled aria-required selected>Select a brand</option>
                      {availableBrands?.map(el => (
                        <option onClick={(e) => setProductBrand(el.id)}>{el.name}</option>
                      ))}
                    </select>
                    <button onClick={(e) => handleEdit(e, product.id)} className="btn btn-primary">Modify</button>
                    {message}



                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </tr>

          )
          )}
        </tbody>

      </table>
    </div>
  )
}

