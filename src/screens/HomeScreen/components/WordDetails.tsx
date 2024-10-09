import React, {useState} from 'react';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {useDictionaryGetWordDetails} from '../../../domain/Dictionary/useCases/useDictionaryGetWordDetails';
import {EmptyData} from './EmptyData';
import {useAppTheme} from '../../../hooks/useAppTheme';
import {Screen} from '../../../components/Screen/Screen';
import {FavoriteButton} from '../../../components/FavoriteButton/FavoriteButton';

interface Props {
  word: string;
  hideModal: () => void;
}

export function WordDetails({word, hideModal}: Props) {
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

  const {spacing} = useAppTheme();

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
        buttonTitle="Voltar para tela inicial"
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

      <Text bold style={{marginTop: -spacing.s10}}>
        {data?.partOfSpeech}
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
    </Screen>
  );
}
