import { gql } from "@apollo/client";

export const PostQuery = gql`
  {
    posts {
      id
      title
      content {
        text
      }
    }
  }
`;
