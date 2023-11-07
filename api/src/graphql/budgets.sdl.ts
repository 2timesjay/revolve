export const schema = gql`
  type Budget {
    id: Int!
    name: String
    Item: [Item]!
  }

  type Query {
    budgets: [Budget!]! @requireAuth
    budget(id: Int!): Budget @requireAuth
  }

  input CreateBudgetInput {
    name: String
  }

  input UpdateBudgetInput {
    name: String
  }

  type Mutation {
    createBudget(input: CreateBudgetInput!): Budget! @requireAuth
    updateBudget(id: Int!, input: UpdateBudgetInput!): Budget! @requireAuth
    deleteBudget(id: Int!): Budget! @requireAuth
  }
`
