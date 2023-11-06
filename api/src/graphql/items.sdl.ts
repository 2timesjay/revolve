export const schema = gql`
  type Item {
    id: Int!
    name: String!
    amount: Int!
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: Int!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    amount: Int!
  }

  input UpdateItemInput {
    name: String
    amount: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: Int!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: Int!): Item! @requireAuth
  }
`
