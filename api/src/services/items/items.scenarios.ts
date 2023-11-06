import type { Prisma, Item } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: {
      data: { name: 'String', budget: { create: { email: 'String4330292' } } },
    },
    two: {
      data: { name: 'String', budget: { create: { email: 'String7108920' } } },
    },
  },
})

export type StandardScenario = ScenarioData<Item, 'item'>
