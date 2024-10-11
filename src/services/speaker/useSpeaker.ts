import {useEffect} from 'react';
import Tts from 'react-native-tts';
import {speakerService} from './speakerService';

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

    Tts.setDefaultVoice('com.apple.voice.compact.en-US.Samantha');
    Tts.setDefaultRate(0.1);
    Tts.setIgnoreSilentSwitch('ignore');
    Tts.setDefaultPitch(0.7);

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
