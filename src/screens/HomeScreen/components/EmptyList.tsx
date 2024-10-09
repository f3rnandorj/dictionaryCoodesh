import React from 'react';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {ActivityIndicator} from '../../../components/ActivityIndicator/ActivityIndicator';
import {useAppSafeArea} from '../../../hooks/useAppSafeArea';
import {Button} from '../../../components/Button/Button';

interface Props {
  error: boolean | null;
  loading: boolean;
  refetch: () => void;
}

export function EmptyList({error, loading, refetch}: Props) {
  const {top} = useAppSafeArea();

  if (error) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        gap="s8"
        style={{marginTop: -top}}>
        <Text preset="headingMedium">Erro ao buscar a lista...</Text>

        <Button title="Tentar novamente" onPress={refetch} />
      </Box>
    );
  }

  if (loading) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        gap="s8"
        style={{marginTop: -top}}>
        <Text preset="headingMedium">Carregando...</Text>
        <ActivityIndicator />
      </Box>
    );
  }

  return null;
}
