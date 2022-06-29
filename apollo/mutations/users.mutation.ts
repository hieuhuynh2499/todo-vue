import gql from "graphql-tag";

export const createUserNew = gql`
  mutation  createUserNew($createUser: CreateUserInput!) {
    createUserNew(
      createUser:$createUser
    ) {
      id
      userName
      age
      address
    }
  }
`;

export const deleteUser = gql`
mutation deleteUser($id: String!) {
  deleteUser(id: $id) {
    id
    userName
    age
    address
  }
}
`;

export default {
    createUserNew,
    deleteUser
};