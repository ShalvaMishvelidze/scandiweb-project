import { useQuery, gql } from "@apollo/client";

const GET_INDEX_PAGE = gql`
  query GET_INDEX_PAGE($all: String!) {
    category(input: { title: $all }) {
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

export default function useIndexPageQuerry() {
  const { error, data, loading } = useQuery(GET_INDEX_PAGE, {
    variables: {
      all: "all",
    },
  });
  return {
    error,
    data,
    loading,
  };
}
