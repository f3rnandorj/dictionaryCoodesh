import React, {useState} from 'react';
import {useDictionaryGetWordDetails} from '../../domain/Dictionary/useCases/useDictionaryGetWordDetails';
import {EmptyData} from '../../components/EmptyData/EmptyData';
import {Screen} from '../../components/Screen/Screen';
import {Box} from '../../components/Box/Box';
import {Text} from '../../components/Text/Text';
import {FavoriteButton} from '../../components/FavoriteButton/FavoriteButton';
import {Button} from '../../components/Button/Button';
import {PlayWord} from './components/PlayWord';

interface Props {
  word: string;
  hideModal: () => void;
}

export function WordDetailsScreen({word, hideModal}: Props) {
  const [hasDefinition, setHasDefinition] = useState(true);
  const {data, isError, isLoading, refetch} = useDictionaryGetWordDetails(
    word,
    {
      onError: error => {
        if (error?.statusCode && error.statusCode === 404) {
          setHasDefinition(false);
        }
      },
    },
  );

  if (isLoading || isError || !data) {
    return (
      <EmptyData
        error={isError}
        messageError={
          hasDefinition
            ? 'Erro ao buscar detalhes, tente novamente.'
            : `Detalhes da palavra "${word}" não disponíveis`
        }
        loading={isLoading}
        onErrorPressButton={hasDefinition ? refetch : hideModal}
        buttonTitle="Voltar para tela anterior"
      />
    );
  }

  return (
    <Screen flex={1} gap="s16" scrollable noPaddingHorizontal>
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

      <FavoriteButton data={data} />

      <PlayWord word={word} />

      <Box>
        <Text preset="headingLarge" bold>
          Meanings
        </Text>
        <Text bold>{data?.partOfSpeech}</Text>
      </Box>

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
    </Screen>
  );
}
