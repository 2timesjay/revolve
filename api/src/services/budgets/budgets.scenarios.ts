import type { Prisma, Budget } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BudgetCreateArgs>({
  budget: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Budget, 'budget'>
