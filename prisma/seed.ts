import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function main() {


  const brand1Products = [
    "https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_23-2149448792.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/foto-gratis/hombre-sueter-negro-sombrero-cubo-negro-sesion-ropa-juvenil_53876-102294.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/foto-gratis/hermosa-mujer-gorra-beisbol-sesion-estudio-moda-diadema_53876-102175.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/psd-premium/mockup-camiseta-hombre-psd-ropa-logo-verano_53876-141828.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph",
  ]

  const brand2Products = [
    "https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/foto-gratis/hombre-afroamericano-camiseta-negra-al-aire-libre_53876-97162.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/psd-premium/maqueta-camiseta-negra-hombre-psd-modelo-tatuado_53876-150796.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/foto-gratis/vista-posterior-sudadera-capucha-ropa-hombres_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/foto-gratis/hombre-afroamericano-camiseta-negra-al-aire-libre_53876-97162.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph",
    "https://img.freepik.com/psd-premium/maqueta-camiseta-negra-hombre-psd-modelo-tatuado_53876-150796.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=sph"

  ]

  const brand1 = await prisma.brand.create({
    data: {
      name: 'Starlight',
      logo_url: 'https://img.freepik.com/vector-gratis/plantilla-logotipo-empresa-moda-diseno-marca-vector-blanco-negro_53876-156444.jpg?size=626&ext=jpg&ga=GA1.1.1442629563.1692141647&semt=ais',
    },
  });

  const brand2 = await prisma.brand.create({
    data: {
      name: 'Fashion',
      logo_url: 'https://img.freepik.com/vector-gratis/diseno-logo-tienda-ropa-dibujado-mano_23-2149499592.jpg?size=626&ext=jpg&ga=GA1.2.1442629563.1692141647&semt=ais',
    },
  });

  for (let index = 0; index < brand1Products.length; index++) {
    await prisma.product.create({
      data: {
        name: faker.lorem.words({ min: 1, max: 3 }),
        description: faker.lorem.sentences(2),
        image_url: brand1Products[index],
        price: faker.number.int({ min: 4000, max: 50000 }),
        brandId: brand1.id,
      },
    });


  }
  for (let index = 0; index < brand2Products.length; index++) {
    await prisma.product.create({
      data: {
        name: faker.lorem.words({ min: 1, max: 3 }),
        description: faker.lorem.sentences(2),
        image_url: brand2Products[index],
        price: faker.number.int({ min: 4000, max: 50000 }),
        brandId: brand2.id,
      },
    });


  }



  async function hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }

  const user = await prisma.user.create({
    data: {
      name: 'Test Admin',
      email: 'admin@gmail.com',
      password: await hashPassword('changedpassword')
    },
  });



  console.log('Data seeded successfully.');
}

main()
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
