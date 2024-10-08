export const palette = {
  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
};

const theme = {
  ...palette,

  background: palette.grayWhite,
  backgroundContrast: palette.grayBlack,

  paragraph: palette.gray1,

  iconColor: palette.grayBlack,
  iconFillColor: palette.grayWhite,
};

export const colors = {palette, theme};
