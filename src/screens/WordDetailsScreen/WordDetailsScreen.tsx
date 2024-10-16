import React, {useEffect, useState} from 'react';
import {useDictionaryGetWordDetails} from '../../domain/Dictionary/useCases/useDictionaryGetWordDetails';
import {EmptyData} from '../../components/EmptyData/EmptyData';
import {Screen} from '../../components/Screen/Screen';
import {Box} from '../../components/Box/Box';
import {Text} from '../../components/Text/Text';
import {FavoriteButton} from '../../components/FavoriteButton/FavoriteButton';
import {Button} from '../../components/Button/Button';
import {PlayWord} from './components/PlayWord';

interface Props {
  list: string[];
  word: string;
  hideModal: () => void;
}

export function WordDetailsScreen({list, word, hideModal}: Props) {
  const [hasDefinition, setHasDefinition] = useState(true);
  const [showingWord, setShowingWord] = useState(word);

  const {data, isError, isLoading, refetch, error} =
    useDictionaryGetWordDetails(showingWord);

  const wordIndex = list.findIndex(w => w === showingWord);

  useEffect(() => {
    if (error?.statusCode && error.statusCode === 404) {
      setHasDefinition(false);
    }
  }, [error]);

  if (isLoading || isError || !data) {
    return (
      <EmptyData
        error={isError}
        messageError={
          hasDefinition
            ? 'Erro ao buscar detalhes, tente novamente.'
            : `Detalhes da palavra "${showingWord}" não disponíveis`
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
        <Text preset="paragraphLarge">{showingWord}</Text>
        <Text preset="paragraphLarge">
          {data?.phonetics?.text || 'Fonética não encontrada'}
        </Text>
      </Box>

      <FavoriteButton data={data} />

      <PlayWord word={showingWord} />

      <Box>
        <Text preset="headingLarge" bold>
          Meanings
        </Text>
        <Text bold>{data?.partOfSpeech}</Text>
      </Box>

      {data?.meanings.map(meaning =>
        meaning.definitions.map((definition, index) => (
          <Text key={index} preset="paragraphSmall">
            - {`${definition?.definition || 'Nenhuma definição encontrada'}`}
          </Text>
        )),
      )}

      <Box flexDirection="row" gap="s10">
        <Button
          flex={1}
          title="Voltar"
          onPress={() => setShowingWord(list[wordIndex - 1])}
          disabled={wordIndex === 0}
        />
        <Button
          flex={1}
          title="Próximo"
          onPress={() => setShowingWord(list[wordIndex + 1])}
          disabled={wordIndex === list.length - 1}
        />
      </Box>
    </Screen>
  );
}
