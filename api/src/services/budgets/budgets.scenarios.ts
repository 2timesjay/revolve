import type { Prisma, Budget } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BudgetCreateArgs>({
  budget: {
    one: { data: { email: 'String9980851' } },
    two: { data: { email: 'String4642307' } },
  },
})

export type StandardScenario = ScenarioData<Budget, 'budget'>
