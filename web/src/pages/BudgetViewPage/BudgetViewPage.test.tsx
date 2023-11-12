import { render } from '@redwoodjs/testing/web'

import BudgetViewPage from './BudgetViewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BudgetViewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BudgetViewPage />)
    }).not.toThrow()
  })
})
