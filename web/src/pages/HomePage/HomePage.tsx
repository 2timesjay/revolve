import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>Home</main>
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
