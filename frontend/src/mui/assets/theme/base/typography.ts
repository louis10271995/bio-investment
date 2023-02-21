/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base typography styles for the Material Dashboard 2 PRO React TSUI Dashboard PRO Material.
 * You can add new typography style using this file.
 * You can customized the typography styles for the entire Material Dashboard 2 PRO React TSUI Dashboard PRO Material using thie file.
 */

// Material Dashboard 2 PRO React TS Base Styles
import colors from 'src/mui/assets/theme/base/colors';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'src/mui/assets/theme/functions/pxToRem';

const { dark } = colors;

// types
interface DisplayTypes {
  fontFamily: string;
  color: string;
  fontWeight: number;
  lineHeight: number;
  fontSize: string;
}

interface Types {
  fontFamily: string;
  fontWeightLighter: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    color: string;
    lineHeight: number;
  };
  h2: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    color: string;
    lineHeight: number;
  };
  h3: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    color: string;
    lineHeight: number;
  };
  h4: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    color: string;
    lineHeight: number;
  };
  h5: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    color: string;
    lineHeight: number;
  };
  h6: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    color: string;
    lineHeight: number;
  };
  subtitle1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  subtitle2: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  body1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  body2: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  button: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    textTransform: any;
  };
  caption: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  overline: {
    fontFamily: string;
  };
  d1: DisplayTypes;
  d2: DisplayTypes;
  d3: DisplayTypes;
  d4: DisplayTypes;
  d5: DisplayTypes;
  d6: DisplayTypes;
  size: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  lineHeight: {
    sm: number;
    md: number;
    lg: number;
  };
}

const baseProperties = {
  fontFamily: '"Montserrat", sans-serif',
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(12),
  fontSizeXS: pxToRem(14),
  fontSizeSM: pxToRem(16),
  fontSizeMD: pxToRem(18),
  fontSizeLG: pxToRem(20),
  fontSizeXL: pxToRem(22),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(28),
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightBold,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography: Types = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: pxToRem(44),
    lineHeight: 1.3,
    ...baseHeadingProperties,
  },

  h2: {
    fontSize: pxToRem(36),
    lineHeight: 1.35,
    ...baseHeadingProperties,
  },

  h3: {
    fontSize: pxToRem(32),
    lineHeight: 1.425,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: pxToRem(28),
    lineHeight: 1.425,
    ...baseHeadingProperties,
  },

  h5: {
    fontSize: pxToRem(24),
    lineHeight: 1.425,
    ...baseHeadingProperties,
  },

  h6: {
    fontSize: pxToRem(20),
    lineHeight: 1.675,
    ...baseHeadingProperties,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: 'uppercase',
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  d1: {
    fontSize: pxToRem(64),
    ...baseDisplayProperties,
  },

  d2: {
    fontSize: pxToRem(57.6),
    ...baseDisplayProperties,
  },

  d3: {
    fontSize: pxToRem(51.2),
    ...baseDisplayProperties,
  },

  d4: {
    fontSize: pxToRem(44.8),
    ...baseDisplayProperties,
  },

  d5: {
    fontSize: pxToRem(38.4),
    ...baseDisplayProperties,
  },

  d6: {
    fontSize: pxToRem(32),
    ...baseDisplayProperties,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    '2xl': baseProperties.fontSize2XL,
    '3xl': baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.5,
    md: 1.75,
    lg: 2.3,
  },
};

export default typography;
