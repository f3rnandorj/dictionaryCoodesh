import React from 'react';
import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import MaterialIconProps from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export type IconNameProps = typeof MaterialIconProps;

interface Props extends TouchableOpacityBoxProps {
  name: keyof IconNameProps;
  size?: number;
  color?: ThemeColors;
  onPress?: () => void;
  disabled?: boolean;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  disabled,
  onPress,
  size = 26,
  ...touchableOpacityBoxProps
}: Props) {
  const {colors, spacing} = useAppTheme();

  return (
    <Box style={{marginLeft: -spacing.s4}}>
      {onPress ? (
        <TouchableOpacityBox
          disabled={disabled}
          onPress={onPress}
          hitSlop={10}
          {...touchableOpacityBoxProps}>
          <MCIcon
            name={name}
            size={size}
            color={disabled ? colors.gray4 : color}
          />
        </TouchableOpacityBox>
      ) : (
        <MCIcon name={name} size={size} color={color} />
      )}
    </Box>
  );
}
