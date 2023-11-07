import type { Prisma, Item } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: { data: { name: 'String', budget: { create: {} } } },
    two: { data: { name: 'String', budget: { create: {} } } },
  },
})

export type StandardScenario = ScenarioData<Item, 'item'>
