export const palette = {
  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',

  redLight: '#e3c9d9',
  blueLight: '#B7DCEF',
};

const theme = {
  ...palette,

  primary: palette.redLight,
  secondary: palette.blueLight,

  background: palette.grayWhite,
  backgroundContrast: palette.grayBlack,

  paragraph: palette.gray1,

  iconColor: palette.grayBlack,
  iconFillColor: palette.grayWhite,
};

export const colors = {palette, theme};
