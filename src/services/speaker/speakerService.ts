import Tts from 'react-native-tts';

async function play(message: string) {
  Tts.speak(message);
}

export const speakerService = {
  play,
};
