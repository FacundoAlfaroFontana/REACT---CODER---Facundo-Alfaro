import React from 'react';
import { useItemsByCategory } from '../hooks';
import { ItemListContainer } from '../components';
import { useParams } from 'react-router';
import { Spinner } from "@chakra-ui/react";  // Importa el Spinner de Chakra UI

export const Category = () => {
  const { id } = useParams();
  const { productsData, loading } = useItemsByCategory(id);

  // Utiliza el Spinner como componente de carga
  return loading ? <Spinner size="xl" /> : <ItemListContainer products={productsData} />;
};
