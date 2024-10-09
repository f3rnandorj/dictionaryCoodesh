import React from 'react';
import {Box, BoxProps} from '../Box/Box';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Text} from '../Text/Text';

interface Props extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
  noPaddingHorizontal?: boolean;
  screenTitle?: string;
}

export function Screen({
  children,
  scrollable = false,
  noPaddingHorizontal = false,
  screenTitle,
  style,
  ...boxProps
}: Props) {
  const {colors, spacing} = useAppTheme();
  const {bottom} = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[{paddingTop: spacing.s10, paddingBottom: bottom}, style]}
          {...boxProps}>
          {screenTitle && (
            <Text preset="paragraphLarge" semiBold paddingTop="s10">
              {screenTitle}
            </Text>
          )}

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
