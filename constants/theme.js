const COLORS = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',

  gray: '#83829A',
  gray2: '#C1C0C8',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',

  mainBlue: '#40A2E3',
  mainYellow: '#FFEAA7',
  mainGrey: '#EEEDEB',
  mainRed: '#FF6868',
  mainGreen: '#74E291',
  mainRedRGBA: 'rgba(255, 104, 104, 0.2)',
  mainGreenRGBA: 'rgba(116, 226, 145, 0.2)',
  quizBG: '#EFF0F3',
};

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  xMedium: 18,
  large: 20,
  xLarge: 24,
  xxLarge: 28,
  xxxLarge: 32,
  extraLarge: 42,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
