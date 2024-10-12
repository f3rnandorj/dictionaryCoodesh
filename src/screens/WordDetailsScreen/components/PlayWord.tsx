import React from 'react';

import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useAppTheme} from '../../../hooks/useAppTheme';
import {useSpeaker} from '../../../services/speaker/useSpeaker';
import {Box} from '../../../components/Box/Box';
import {Icon} from '../../../components/Icon/Icon';
import {Platform} from 'react-native';

interface Props {
  word: string;
}

export function PlayWord({word}: Props) {
  let fillWidth = useSharedValue(0);

  function estimateDuration(_word: string) {
    const baseDuration = Platform.OS === 'android' ? 400 : 400;
    const durationPerCharacter = Platform.OS === 'android' ? 50 : 50;

    return _word.length <= 7
      ? baseDuration
      : _word.length * durationPerCharacter;
  }

  const {colors, borderRadii} = useAppTheme();
  const {play} = useSpeaker({
    onStart: () => {
      fillProgressBar(0);
    },
    onProgress: () => {
      const estimatedDuration = estimateDuration(word);
      fillProgressBar(1, estimatedDuration);
    },
    onFinish: () => {
      fillProgressBar(1, 50);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      fillWidth.value,
      [0, 1],
      [colors.gray4, colors.secondary],
    );

    return {
      width: `${fillWidth.value * 100}%`,
      backgroundColor,
    };
  });

  function fillProgressBar(count: number, duration?: number) {
    fillWidth.value = withTiming(count, {
      duration: duration || 300,
      easing: Easing.linear,
    });
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Icon
        name="play-outline"
        size={30}
        onPress={() => {
          fillWidth.value = 0;
          play(word);
        }}
      />

      <Box flex={1} height={16} backgroundColor="gray4" borderRadius="s12">
        <Animated.View
          style={[
            {
              height: 16,
              borderRadius: borderRadii.s12,
            },
            animatedStyle,
          ]}
        />
      </Box>
    </Box>
  );
}
