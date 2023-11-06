import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteBudgetMutationVariables,
  FindBudgetById,
} from 'types/graphql'

const DELETE_BUDGET_MUTATION = gql`
  mutation DeleteBudgetMutation($id: Int!) {
    deleteBudget(id: $id) {
      id
    }
  }
`

interface Props {
  budget: NonNullable<FindBudgetById['budget']>
}

const Budget = ({ budget }: Props) => {
  const [deleteBudget] = useMutation(DELETE_BUDGET_MUTATION, {
    onCompleted: () => {
      toast.success('Budget deleted')
      navigate(routes.budgets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBudgetMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete budget ' + id + '?')) {
      deleteBudget({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Budget {budget.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{budget.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{budget.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBudget({ id: budget.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(budget.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Budget
