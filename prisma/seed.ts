import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: '9897cc61-d7b5-440c-ab9a-49ba741c3025',
      title: 'Unite Summit',
      slug:'unite-summit',
      details: 'Um evento pra devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})

