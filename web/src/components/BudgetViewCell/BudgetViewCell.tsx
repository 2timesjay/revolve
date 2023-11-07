import type {
  FindBudgetViewQuery,
  FindBudgetViewQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindBudgetViewQuery($id: Int!) {
    budget: budget(id: $id) {
      id
      name
      items {
        id
        name
        amount
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindBudgetViewQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ budget }: CellSuccessProps<FindBudgetViewQuery>) => {
  console.log(budget)
  return (
    <>
      <div>
        {budget.id} {budget.name}
      </div>
      {budget.items.map((item) => (
        <div key={item.id}>
          {item.id} {item.name} {item.amount}
        </div>
      ))}
    </>
  )
}
