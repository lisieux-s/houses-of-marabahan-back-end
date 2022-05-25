import { Category, prisma } from '@prisma/client';

import * as categoryRepository from '../repositories/categoryRepository.js';
import * as itemRepository from '../repositories/itemRepository.js'

export type CategoryData = Omit<Category, 'id'>;

export async function initializeCategories() {
  await itemRepository.deleteMany();
  await categoryRepository.deleteMany();
  await categoryRepository.createMany([
    {
      name: 'gardening',
    },
    {
      name: 'weapons',
    },
    {
      name: 'crafts',
    },
  ]);
}

export async function create(categoryData: CategoryData) {
  const existingCategory = await categoryRepository.findByName(
    categoryData.name
  );
  if (existingCategory)
    throw {
      type: 'CONFLICT',
      message: 'This category already exists',
    };
  await categoryRepository.create(categoryData);
}

export async function findMany() {
  return await categoryRepository.findMany();
}
