import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color?: ThemeColors;
}
export function ActivityIndicator({
  color = 'backgroundContrast',
  ...rest
}: Props) {
  const {colors} = useAppTheme();

  return (
    <RNActivityIndicator
      testID="activity-indicator"
      color={colors[color]}
      {...rest}
    />
  );
}
