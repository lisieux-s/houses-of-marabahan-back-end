import * as kindRepository from '../repositories/kindRepository.js'

export async function initializeKinds() {
    return await kindRepository.createMany();
}

export async function findMany() {
    return await kindRepository.findMany();
}

export async function findByName(name: string) {
    return await kindRepository.findByName(name)
}