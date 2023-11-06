import type { FindBudgets } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Budgets from 'src/components/Budget/Budgets'

export const QUERY = gql`
  query FindBudgets {
    budgets {
      id
      email
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No budgets yet. '}
      <Link to={routes.newBudget()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ budgets }: CellSuccessProps<FindBudgets>) => {
  return <Budgets budgets={budgets} />
}
