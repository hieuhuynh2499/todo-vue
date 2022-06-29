import gql from "graphql-tag";

export const getAllUser = gql`
  query getAllUser{
    getAllUser{
      id
      userName
      age
      address
    }
  }
`;

export default {
  getAllUser,
};