import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
  }
`;

export default function useCategories() {
  const { erorr, data, loading } = useQuery(GET_CATEGORIES);
  return {
    erorr,
    data,
    loading,
  };
}
