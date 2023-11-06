export const schema = gql`
  type Budget {
    id: Int!
    email: String!
    name: String
    Item: [Item]!
  }

  type Query {
    budgets: [Budget!]! @requireAuth
    budget(id: Int!): Budget @requireAuth
  }

  input CreateBudgetInput {
    email: String!
    name: String
  }

  input UpdateBudgetInput {
    email: String
    name: String
  }

  type Mutation {
    createBudget(input: CreateBudgetInput!): Budget! @requireAuth
    updateBudget(id: Int!, input: UpdateBudgetInput!): Budget! @requireAuth
    deleteBudget(id: Int!): Budget! @requireAuth
  }
`
