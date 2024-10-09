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
  const {colors} = useAppTheme();
  const {bottom} = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          paddingTop={screenTitle ? undefined : 's16'}
          style={[{paddingBottom: bottom}, style]}
          {...boxProps}>
          {screenTitle && (
            <Text
              preset="paragraphLarge"
              semiBold
              paddingTop="s16"
              paddingBottom="s16">
              {screenTitle}
            </Text>
          )}

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
