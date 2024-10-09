import {useContext} from 'react';
import {FavoriteWordService} from './favoriteWordTypes';
import {FavoriteWordContext} from './favoriteWordProvider';

export function useFavoriteWord(): FavoriteWordService {
  const context = useContext(FavoriteWordContext);

  if (!context) {
    throw new Error('Favorite Word must be used within a FavoriteWordProvider');
  }

  return context;
}
