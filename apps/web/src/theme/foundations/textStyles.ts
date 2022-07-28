import {TextStyle} from '../types';

type TextStyleValue = {
  fontSize: string | string[];
  lineHeight?: string | string[];
  letterSpacing?: string | string[];
};

type TextStyles = Record<TextStyle, TextStyleValue>;

const textStyles: TextStyles = {
  DisplayLarge: {
    fontSize: '3.25rem',
    lineHeight: '3.5rem',
    letterSpacing: '-2%',
  },
  DisplaySmall: {
    fontSize: '2.75rem',
    lineHeight: '3rem',
    letterSpacing: '-2%',
  },
  H1: {
    fontSize: ['2.25rem', '2.5rem'],
    lineHeight: ['2.75rem', '3rem'],
    letterSpacing: '-2%',
  },
  H2: {
    fontSize: ['2rem', '2.25rem'],
    lineHeight: ['2.5rem', '2.75rem'],
    letterSpacing: '-2%',
  },
  H3: {
    fontSize: ['1.75rem', '2rem'],
    lineHeight: ['2.25rem', '2.5rem'],
    letterSpacing: '-2%',
  },
  H4: {
    fontSize: ['1.5rem', '1.75rem'],
    lineHeight: ['2rem', '2.25rem'],
    letterSpacing: ['0%', '-2%'],
  },
  H5: {
    fontSize: ['1.25rem', '1.5rem'],
    lineHeight: ['1.75rem', '2rem'],
    letterSpacing: ['0%', '-2%'],
  },
  H6: {
    fontSize: ['1.125rem', '1.25rem'],
    lineHeight: ['1.5rem', '1.75rem'],
    letterSpacing: ['0%', '-2%'],
  },
  ParagraphLarge: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  ParagraphMedium: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  ParagraphSmall: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  ParagraphXSmall: {
    fontSize: '0.75rem',
    lineHeight: '1.25rem',
  },
  Overline: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
};

export default textStyles;
