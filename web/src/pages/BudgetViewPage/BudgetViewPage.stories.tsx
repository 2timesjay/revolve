import type { Meta, StoryObj } from '@storybook/react'

import BudgetViewPage from './BudgetViewPage'

const meta: Meta<typeof BudgetViewPage> = {
  component: BudgetViewPage,
}

export default meta

type Story = StoryObj<typeof BudgetViewPage>

export const Primary: Story = {}
