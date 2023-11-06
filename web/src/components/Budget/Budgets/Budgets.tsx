import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Budget/BudgetsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteBudgetMutationVariables, FindBudgets } from 'types/graphql'

const DELETE_BUDGET_MUTATION = gql`
  mutation DeleteBudgetMutation($id: Int!) {
    deleteBudget(id: $id) {
      id
    }
  }
`

const BudgetsList = ({ budgets }: FindBudgets) => {
  const [deleteBudget] = useMutation(DELETE_BUDGET_MUTATION, {
    onCompleted: () => {
      toast.success('Budget deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteBudgetMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete budget ' + id + '?')) {
      deleteBudget({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) => (
            <tr key={budget.id}>
              <td>{truncate(budget.id)}</td>
              <td>{truncate(budget.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.budget({ id: budget.id })}
                    title={'Show budget ' + budget.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBudget({ id: budget.id })}
                    title={'Edit budget ' + budget.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete budget ' + budget.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(budget.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BudgetsList
