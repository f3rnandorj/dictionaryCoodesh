import React from 'react';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {useDictionaryGetWordDetails} from '../../../domain/Dictionary/useCases/useDictionaryGetWordDetails';
import {EmptyData} from './EmptyData';

interface Props {
  word: string;
}

export function WordDetails({word}: Props) {
  const {data, isError, isLoading, refetch} = useDictionaryGetWordDetails(word);

  if (isLoading || isError) {
    return <EmptyData error={isError} loading={isLoading} refetch={refetch} />;
  }

  return (
    <Box flex={1} gap="s16">
      <Box
        height={200}
        width={'100%'}
        justifyContent="center"
        alignItems="center"
        gap="s10"
        borderWidth={1}
        backgroundColor="primary">
        <Text preset="paragraphLarge">{data?.word}</Text>
        <Text preset="paragraphLarge">
          {data?.phonetics?.text ?? 'Fonética não encontrada'}
        </Text>
      </Box>

      <Box flexDirection="row" alignItems="center">
        <Icon name="play-outline" size={30} />
        <Box flex={1} height={16} backgroundColor="gray4" borderRadius="s12">
          <Box
            backgroundColor="secondary"
            height={16}
            width={'50%'}
            zIndex={999}
            borderRadius="s12"
          />
        </Box>
      </Box>

      <Text preset="headingLarge" bold>
        Meanings
      </Text>
      {data?.meanings.map(meaning =>
        meaning.definitions.map((definition, index) => (
          <Text key={index} preset="paragraphSmall">
            - {`${definition?.definition ?? 'Nenhuma definição encontrada'}`}
          </Text>
        )),
      )}

      <Box flexDirection="row" gap="s10">
        <Button flex={1} title="Voltar" />
        <Button flex={1} title="Próximo" />
      </Box>
    </Box>
  );
}
