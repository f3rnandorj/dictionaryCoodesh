import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Icon, IconName} from '../Icon/Icon';

interface InputProps extends RNTextInputProps {
  label?: string;
  boxProps: BoxProps;
  rightComponentName?: keyof IconName;
}

export function TextInput({
  label,
  boxProps,
  rightComponentName,
  ...textInputProps
}: InputProps) {
  const {spacing, colors} = useAppTheme();

  return (
    <Box>
      {label && <Text>{label}</Text>}

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderWidth={1}
        borderColor="grayBlack"
        flexWrap="nowrap"
        {...boxProps}>
        <RNTextInput
          placeholderTextColor={colors.gray3}
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            flex: 1,
            paddingVertical: spacing.s12,
            paddingLeft: spacing.s12,
          }}
          {...textInputProps}
        />

        {rightComponentName && (
          <Icon
            name={rightComponentName}
            style={{marginRight: spacing.s12, marginLeft: spacing.s12}}
          />
        )}
      </Box>
    </Box>
  );
}
