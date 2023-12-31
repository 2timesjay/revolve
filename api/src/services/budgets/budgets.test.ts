import type { Budget } from '@prisma/client'

import {
  budgets,
  budget,
  createBudget,
  updateBudget,
  deleteBudget,
} from './budgets'
import type { StandardScenario } from './budgets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('budgets', () => {
  scenario('returns all budgets', async (scenario: StandardScenario) => {
    const result = await budgets()

    expect(result.length).toEqual(Object.keys(scenario.budget).length)
  })

  scenario('returns a single budget', async (scenario: StandardScenario) => {
    const result = await budget({ id: scenario.budget.one.id })

    expect(result).toEqual(scenario.budget.one)
  })

  scenario('deletes a budget', async (scenario: StandardScenario) => {
    const original = (await deleteBudget({
      id: scenario.budget.one.id,
    })) as Budget
    const result = await budget({ id: original.id })

    expect(result).toEqual(null)
  })
})
