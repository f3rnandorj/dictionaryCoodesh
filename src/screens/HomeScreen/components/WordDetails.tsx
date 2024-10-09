import React from 'react';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {stringUtils} from '../../../utils/stringUtils';

export function WordDetails({title}: {title: string}) {
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
        <Text preset="paragraphLarge">{title}</Text>
        <Text preset="paragraphLarge">{title}</Text>
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
        {stringUtils.CapitalizeFirstLetter(title)}
      </Text>
      <Text preset="paragraphSmall">{title}</Text>

      <Box flexDirection="row" gap="s10">
        <Button title="Voltar" />
        <Button title="Próximo" />
      </Box>
    </Box>
  );
}
