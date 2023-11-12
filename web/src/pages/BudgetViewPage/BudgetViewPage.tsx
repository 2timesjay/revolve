import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BudgetViewCell from 'src/components/BudgetViewCell'

interface BudgetViewPageProps {
  id: number
}

const BudgetViewPage = ({ id }: BudgetViewPageProps) => {
  return (
    <>
      <MetaTags title="BudgetView" description="BudgetView page" />

      <h1>BudgetViewPage</h1>
      <BudgetViewCell id={id} />
      <p>
        Find me in{' '}
        <code>./web/src/pages/BudgetViewPage/BudgetViewPage.tsx</code>
      </p>
      <p>
        My default route is named <code>budgetView</code>, link to me with `
        <Link to={routes.budgetView()}>BudgetView</Link>`
      </p>
    </>
  )
}

export default BudgetViewPage
