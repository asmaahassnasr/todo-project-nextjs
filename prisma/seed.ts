import { PrismaClient } from '../generated/prisma/client'

const prisma = new PrismaClient()
async function main() {
    await prisma.user.create({
        data:{
            name:"user002",
            email:"user2@user.com",
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
