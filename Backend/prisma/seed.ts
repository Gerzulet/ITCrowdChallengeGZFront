import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Crear un producto con una marca relacionada
  const product = await prisma.product.create({
    data: {
      name: 'Product Name',
      description: 'Product Description',
      image_url: 'https://example.com/image.jpg',
      price: 1000, // Cambia el precio a lo que desees
      brand: {
        create: {
          name: 'Brand Name',
          logo_url: 'https://example.com/logo.jpg',
        },
      },
    },
  })

  console.log({ product })
}

main()
  .catch(async (e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
