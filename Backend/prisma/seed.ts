import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {

  const mockupData = [ // todo exportar esto de otra parte
    'https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_23-2149448792.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/psd-premium/mockup-camiseta-hombre-psd-ropa-logo-verano_53876-141828.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/hombre-afroamericano-camiseta-negra-al-aire-libre_53876-97162.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/hombre-afroamericano-camiseta-negra-al-aire-libre_53876-97162.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/retrato-adulto-joven-maqueta-sudadera-capucha_23-2149296353.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/jovenes-maqueta-sudadera-capucha_23-2149246223.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/psd-gratis/camiseta-maqueta-diseno_15879-478.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_23-2149448791.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/mujer-camisa-blanca-pantalon-espacio-diseno-ropa-casual-moda-f_53876-125227.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/psd-gratis/chico-joven-posando-camiseta-colorida-gorra_23-2147653516.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/vector-gratis/sudaderas-capucha-realistas-maquetas-sudaderas-capucha-color-verde-ilustracion-vectorial-aislada_1284-80112.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph',
    'https://img.freepik.com/foto-gratis/feliz-hermosa-joven-ropa-deportiva-pie-calle-sosteniendo-cafe-moda-femenina-estilo-vida-ciudad_132075-9166.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph'
  ]

  mockupData.forEach(async (el) => {
    await prisma.product.create({
      data: {
        name: faker.lorem.words({ min: 1, max: 3 }),
        description: faker.lorem.sentences(4),
        image_url: el,
        price: faker.number.int({ min: 10, max: 100 }),
        brand: {
          create: {
            name: 'Starlight',
            logo_url: 'https://img.freepik.com/vector-gratis/plantilla-logotipo-empresa-moda-diseno-marca-vector-blanco-negro_53876-156444.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=ais',
          },
        },
      },
    })



  })




}

main()
  .catch(async (e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
