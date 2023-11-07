import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BudgetViewCell from 'src/components/BudgetViewCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>Home</main>
      <BudgetViewCell id={1} />
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
