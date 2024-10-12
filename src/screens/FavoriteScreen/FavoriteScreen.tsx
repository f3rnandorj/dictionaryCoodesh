import React, {useState} from 'react';
import {Screen} from '../../components/Screen/Screen';
import {AppTabScreenProps} from '../../routes/navigationType';
import {FavoriteList} from './components/FavoriteList';
import {TextInput} from '../../components/TextInput/TextInput';

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Screen flex={1} screenTitle="Favorites">
      <TextInput
        boxProps={{mb: 's16'}}
        placeholder="Busque sua palavra favorita"
        value={searchValue}
        onChangeText={setSearchValue}
        rightComponentName={searchValue.length > 0 ? 'close' : 'search-web'}
        onPressRightIcon={
          searchValue.length > 0 ? () => setSearchValue('') : undefined
        }
      />

      <FavoriteList />
    </Screen>
  );
}
