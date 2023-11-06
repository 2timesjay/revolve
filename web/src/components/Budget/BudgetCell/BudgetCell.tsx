import type { FindBudgetById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Budget from 'src/components/Budget/Budget'

export const QUERY = gql`
  query FindBudgetById($id: Int!) {
    budget: budget(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Budget not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ budget }: CellSuccessProps<FindBudgetById>) => {
  return <Budget budget={budget} />
}
