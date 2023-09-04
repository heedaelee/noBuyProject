import {Dimensions, StyleSheet} from 'react-native';

export const Colors = {
  black: '#000',
  white: '#FFF',

  gray10: '#1E2427',
  gray20: '#31373C',
  gray30: '#555B61',
  gray40: '#8F959C',
  gray50: '#A3AAB1',
  gray60: '#C0C6CC',
  gray70: '#DDE0E5',
  gray80: '#E6E9ED',
  gray90: '#F4F6F9',
};

export const ColorBase = {
  Primary: '#7547F2',
  PrimaryBorder: '#B195FF',
  Secondary: '#F4F0FF',
};

export const ColorText = {
  Default: '#000',
  Subdued: '#555B61',
  Sub2: '#888',
  SubText: '#666',
  Disabled: '#C0C6CC',
  Highlight: '#7547F2',
};

export const ColorStatus = {
  Error: '#FF1C53',
  Official: '#2596FF',
  Positive: '#21D78A',
  Highlight: '#8668FF',
  HighlightBG: '#6026FF',
};

export const ColorContents = {
  Line: '#DEDEDE',
  messageLine: '#6327FF',
  tooltipBg: '#393D40',
};

export const globalStyles = StyleSheet.create({
  titleText: {
    fontFamily: 'Cafe24Dangdanghae-v2.0',
    color: 'black',
    fontSize: 30,
  },
  /* paragraph: {
    fontSize: 18,
  }, */
});

export const _WIDTH = Dimensions.get('window').width;
export const _HEIGHT = Dimensions.get('window').height;
