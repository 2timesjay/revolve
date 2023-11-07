export const schema = gql`
  type Item {
    id: Int!
    name: String!
    amount: Int!
    budget: Budget!
    budgetId: Int!
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: Int!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    amount: Int!
    budgetId: Int!
  }

  input UpdateItemInput {
    name: String
    amount: Int
    budgetId: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: Int!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: Int!): Item! @requireAuth
  }
`
