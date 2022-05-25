import { prisma } from '../database.js';

import { CategoryData } from '../services/categoryService.js';

export async function deleteMany() {
  await prisma.$executeRaw`TRUNCATE TABLE categories CASCADE`
}


export async function createMany(categoryData: CategoryData[]) {
  await prisma.category.createMany({ data: categoryData });
}

export async function create(categoryData: CategoryData) {
  await prisma.category.create({
    data: categoryData,
  });
}

export async function findByName(name: string) {
  return await prisma.category.findUnique({
    where: { name },
  });
}

export async function findMany() {
  return await prisma.category.findMany();
}
