import { useQuery, gql } from '@apollo/client';

const GET_PRODUCT = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
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
`;

export const useProduct = (id) => {
  const { error, data, loading } = useQuery(GET_PRODUCT, {
    variables: {
      id,
    },
  });
  return {
    error,
    data,
    loading,
  };
};
