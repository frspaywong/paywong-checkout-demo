import {ColorMix} from '../types';

type Values = {
  default?: string | number;
  _dark?: string | number;
};
type SemanticToken = Record<'colors', Record<ColorMix, Values>>;

const semanticTokens: SemanticToken = {
  colors: {
    bgContent: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    bgItem: {
      default: 'white',
      _dark: 'gray.800',
    },
    nav: {
      default: 'gray.700',
      _dark: 'gray.100',
    },
    textHint: {
      default: 'gray.400',
      // _dark: 'gray.700',
    },
    textSub: {
      default: 'gray.700',
      _dark: 'gray.200',
    },
    border: {
      default: 'gray.200',
      _dark: 'gray.800',
    },
    hover: {
      default: 'gray.50',
      _dark: 'gray.900',
    },
  },
};

export default semanticTokens;
