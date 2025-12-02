import { PrismaClient } from '../generated/prisma/client'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()
async function main() {

  // Generate fale data for todo moel 
   await prisma.todo.createMany({
        data:Array.from({length:20}, () => ({
              title:faker.lorem.words({min:2,max:5}),
              body:faker.lorem.words({min:1,max:10})
            }))
    })

  // Generate Fake data for User model
    // await prisma.user.createMany({
    //     data:Array.from({length:20}, () => (
    //         {
    //         name:faker.internet.username(),
    //         email:faker.internet.email(),
    //         address:{
    //           street:faker.location.street(),
    //           state:faker.location.state(),
    //           city:faker.location.city(),
    //           zipCode:faker.location.zipCode()
    //         }
    //     }
    //     ))
    // })
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
