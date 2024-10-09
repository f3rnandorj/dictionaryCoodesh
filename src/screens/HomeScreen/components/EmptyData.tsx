import React from 'react';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {ActivityIndicator} from '../../../components/ActivityIndicator/ActivityIndicator';
import {Button} from '../../../components/Button/Button';

interface Props {
  error: boolean | null;
  messageError: string;
  loading: boolean;
  refetch?: () => void;
}

export function EmptyData({error, messageError, loading, refetch}: Props) {
  if (error) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" gap="s8">
        <Text textAlign="center" preset="headingMedium">
          {messageError}
        </Text>

        {refetch && (
          <Button width={'100%'} title="Tentar novamente" onPress={refetch} />
        )}
      </Box>
    );
  }

  if (loading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" gap="s8">
        <Text textAlign="center" preset="headingMedium">
          Carregando...
        </Text>
        <ActivityIndicator />
      </Box>
    );
  }

  return null;
}
