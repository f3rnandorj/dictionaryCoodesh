import React from 'react';
import {Text} from '../../components/Text/Text';
import {Screen} from '../../components/Screen/Screen';
import {FlatList} from 'react-native';
import {AppTabScreenProps} from '../../routes/navigationType';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen flex={1} screenTitle="Word list">
      <FlatList
        data={['hello', 'today', 'great']}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </Screen>
  );
}
