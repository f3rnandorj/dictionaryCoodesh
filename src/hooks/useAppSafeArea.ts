import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    top: Math.max(top, top > 0 ? spacing.s56 : spacing.s24),
    bottom,
  };
}
