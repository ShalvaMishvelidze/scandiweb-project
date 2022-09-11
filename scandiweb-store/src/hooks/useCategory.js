import { useQuery, gql } from "@apollo/client";

const GET_CATEGORY = gql`
  query GET_CATEGORY($categoryName: String!) {
    category(input: { title: $categoryName }) {
      name
      __typename @skip(if: true)
      products {
        id
        __typename @skip(if: true)
        name
        inStock
        gallery
        attributes {
          id
          __typename @skip(if: true)
          name
          type
          items {
            displayValue
            __typename @skip(if: true)
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

export default function useCategory(categoryName) {
  const { error, data, loading } = useQuery(GET_CATEGORY, {
    variables: {
      categoryName,
    },
  });
  return {
    error,
    data,
    loading,
  };
}
