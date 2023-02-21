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

// Material Dashboard 2 PRO React TS Base Styles
import boxShadows from 'src/mui/assets/theme-dark/base/boxShadows';
import typography from 'src/mui/assets/theme-dark/base/typography';
import colors from 'src/mui/assets/theme-dark/base/colors';
import borders from 'src/mui/assets/theme-dark/base/borders';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'src/mui/assets/theme-dark/functions/pxToRem';
import rgba from 'src/mui/assets/theme-dark/functions/rgba';

const { md } = boxShadows;
const { size } = typography;
const {
  text,
  transparent,
  light,
  dark,
  gradients,
  background,
  white,
} = colors;
const { borderRadius } = borders;

// types
type Types = any;

const autocompletle: Types = {
  styleOverrides: {
    popper: {
      boxShadow: md,
      padding: pxToRem(6.4),
      fontSize: size.sm,
      color: text.main,
      textAlign: 'left',
      backgroundColor: `${background.card} !important`,
      borderRadius: borderRadius.md,
    },

    paper: {
      boxShadow: 'none',
      backgroundColor: transparent.main,
    },

    option: {
      padding: `${pxToRem(3.84)} ${pxToRem(12.8)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition:
        'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus':
        {
          backgroundColor: rgba(light.main, 0.2),
          color: white.main,
        },

      '&[aria-selected="true"]': {
        backgroundColor: `${rgba(
          light.main,
          0.2,
        )} !important`,
        color: `${white.main} !important`,
      },
    },

    noOptions: {
      fontSize: size.sm,
      color: text.main,
    },

    groupLabel: {
      color: white.main,
    },

    loading: {
      fontSize: size.sm,
      color: text.main,
    },

    tag: {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      padding: pxToRem(3.2),
      margin: pxToRem(2.4),
      // backgroundColor: gradients.dark.state,
      color: white.main,

      '& .MuiChip-label': {
        fontSize: '0.75rem',
        lineHeight: 0.96,
        padding: `0 ${pxToRem(8)} 0 ${pxToRem(3.2)}`,
      },

      '& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus':
        {
          color: white.main,
          marginRight: 0,
        },
    },

    popupIndicator: {
      color: text.main,
    },

    clearIndicator: {
      color: text.main,
    },
  },
};

export default autocompletle;
