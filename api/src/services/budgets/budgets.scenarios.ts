import type { Prisma, Budget } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BudgetCreateArgs>({
  budget: {
    one: { data: { email: 'String4390685' } },
    two: { data: { email: 'String8693813' } },
  },
})

export type StandardScenario = ScenarioData<Budget, 'budget'>
