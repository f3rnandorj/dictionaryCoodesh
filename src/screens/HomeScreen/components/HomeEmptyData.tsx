import React from 'react';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {ActivityIndicator} from '../../../components/ActivityIndicator/ActivityIndicator';
import {Button} from '../../../components/Button/Button';

interface Props {
  error: boolean | null;
  messageError: string;
  loading: boolean;
  onErrorPressButton: () => void;
  buttonTitle?: string;
}

export function HomeEmptyData({
  error,
  messageError,
  loading,
  onErrorPressButton,
  buttonTitle,
}: Props) {
  if (error) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" gap="s8">
        <Text textAlign="center" preset="headingMedium">
          {messageError}
        </Text>

        <Button
          width={'100%'}
          title={buttonTitle ?? 'Tentar novamente'}
          onPress={onErrorPressButton}
        />
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
