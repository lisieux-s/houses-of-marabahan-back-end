import { prisma } from "../database.js";

export async function createMany() {
    await prisma.kind.createMany({
        data: [
          {
            name: 'clayfeet',
            description: 'Elusive shapeshifters molded out of clay.',
          },
          {
            name: 'paladi',
            description: 'Proud children of the goddess Palos.',
          },
          {
            name: 'flowerbud',
            description: 'Photosynthetic creations of the goddess Aman.',
          },
          {
            name: 'merperson',
            description:
              'Mysterious creatures that emerged from the unforgiving Ilié.',
          },
          {
            name: 'mogami',
            description:
              'Ceramic vessels that were guarded by dragons for 400 seasons.',
          },
          {
            name: 'moonlit',
            description: 'Servants of the Lunar Goddesses.',
          },
          {
            name: 'blue folk',
            description:
              'The fierce and boisterous kind created by the goddess Maimu.',
          },
          {
            name: 'blaoru',
            description:
              'Forged from the fires of the Underworld, this kind is said to give the best hugs.',
          },
    
          {
            name: 'baego',
            description: `Assembled themselves from the spare pieces of the gods' creations.`,
          },
          {
            name: 'revenant',
            description: 'Vengeful spirits of the dead.',
          },
        ],
      });
}

export async function findMany() {
    return await prisma.kind.findMany();
}

export async function findByName(name: string) {
    return await prisma.kind.findUnique({
        where: { name }
    })
}