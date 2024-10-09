import React from 'react';
import {Box, BoxProps} from '../Box/Box';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';

interface Props extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
  noPaddingHorizontal?: boolean;
}

export function Screen({
  children,
  scrollable = false,
  noPaddingHorizontal = false,
  style,
  ...boxProps
}: Props) {
  const {colors} = useAppTheme();
  const {bottom, top} = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
