import gql from "graphql-tag";

export const getBookById = gql`
  query getBookById($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        ...authorInfo
      }
    }
  }
`;

export const getallpost = gql`
  query getallpost{
    getAllPost{
      postId
      postTitle
      postContent
    }
  }
`;

export default {
    getallpost,
  getBookById,
};