import { useQuery, gql } from '@apollo/client';

const GET_ALL_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const useProducts = () => {
  const { error, data, loading } = useQuery(GET_ALL_PRODUCTS);
  return {
    error,
    data,
    loading,
  };
};
