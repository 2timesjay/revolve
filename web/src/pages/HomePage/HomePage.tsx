import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BudgetViewPage from 'src/pages/BudgetViewPage/BudgetViewPage'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>Home</main>
      <BudgetViewPage id={1} />
      <nav>
        <ul>
          <li>
            <Link to={routes.budgets()}>Budgets</Link>
          </li>
          <li>
            <Link to={routes.items()}>Items</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HomePage
