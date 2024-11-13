import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
async function main() {
    const alice = await prisma.user.upsert({
        where: {email: 'alice@prisma.io'},
        update:{},
        create:{
            email:'alice@prisma.io',
            firstName:'Alice',
            lastName:'Brue',
            patronymic:'Rolf',
            snils:'123',
            password:'123',
            dateOfBearth: new Date('2023-11-13T10:30:00Z'),
        }
    })
    const bob = await prisma.user.upsert({
        where: {email: 'bob@prisma.io'},
        update:{},
        create:{
            email:'bob@prisma.io',
            firstName:'Bob',
            lastName:'Brue',
            patronymic:'Rolf',
            snils:'1234',
            password:'123',
            dateOfBearth: new Date('2023-11-13T10:30:00Z'),
        }
    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })