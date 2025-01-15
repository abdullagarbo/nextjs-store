import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import fs from 'fs';

const products = JSON.parse(
  fs.readFileSync(
    'C:\\Users\\abdul\\Desktop\\store\\prisma\\products.json',
    'utf8'
  )
);

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
