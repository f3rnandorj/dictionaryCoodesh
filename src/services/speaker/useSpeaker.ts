import {useEffect} from 'react';
import Tts from 'react-native-tts';
import {speakerService} from './speakerService';
import {Platform} from 'react-native';

interface Props {
  onStart?: () => void;
  onProgress?: () => void;
  onFinish?: () => void;
}

export function useSpeaker({onStart, onProgress, onFinish}: Props) {
  useEffect(() => {
    Tts.getInitStatus().then(
      () => {},
      err => {
        if (err.code === 'no_engine') {
          Tts.requestInstallEngine();
        }
      },
    );

    const voice =
      Platform.OS === 'android'
        ? 'en-US-SMTl03'
        : 'com.apple.voice.compact.en-US.Samantha';

    Tts.setDefaultVoice(voice);
    Tts.setIgnoreSilentSwitch('ignore');

    // if (Platform.OS === 'ios') {
    //   Tts.setDefaultPitch(0.7);
    //   Tts.setDefaultRate(0.3);
    // }

    // Listener for when TTS starts speaking
    Tts.addEventListener('tts-start', () => {
      onStart && onStart();
    });
    // Listener for TTS progress (triggered repeatedly while speaking)
    Tts.addEventListener('tts-progress', () => {
      onProgress && onProgress();
    });
    // Listener for when TTS finishes speaking
    Tts.addEventListener('tts-finish', () => {
      onFinish && onFinish();
    });
    // Listener for when TTS is canceled
    Tts.addEventListener('tts-cancel', () => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    play: (word: string) => speakerService.play(word),
  };
}
