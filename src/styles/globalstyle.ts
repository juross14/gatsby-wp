import * as styledComponents from 'styled-components';

const ColorPalette = {
  brandOrange: '#FF7F00',
  orangeLighter: '#FCB977',
  brandSuccess: '#45C493',
  brandDanger: '#C63939',
  brandWarning: '#F7BF1E',
  brandWhite: '#FFFFFF',
  primaryButtonHover: '#FF9933',
  secondaryButtonHover: '#B6B6B6',
  tertiaryButtonHover: '#B6B6B6',
  heading4: '#767676',
  black: '#000000',
  greyDark: '#212121',
  grey: '#464646',
  greyLight: '#737373',
  greyLighter: '#B6B6B6',
  greyLighter1: '#DDDDDD',
  greyLighter2: '#F1F1F1',
  NavigationLevel2Bkrng: '#757575',
  MobileTopNavBkrnd: '#E6E6E6',
  white: '#ffffff'
};

const DesktopSizePalette = {
  heading1: '32px',
  heading2: '24px',
  heading3: '18px',
  heading4: '14px',
  tilesParagraph: '18px',
  lifeMomentsText: '18px',
  paragraph: '16px',
  reviewPanelText: '24px',
  reviewPanelUserName: '16px',
  primarySecondaryBtn: '13px',
  button: '16px',
  navigationLinkHeading: '16px',
  navigationLink: '16px',
  footerLinkHeading: '16px',
  footerLink: '13px',
  subBodyText: '13px',
  disclaimerText: '12px'
};

const MobileSizePalette = {
  heading1: '22px',
  heading2: '16px',
  heading3: '18px',
  heading4: '12px',
  tilesParagraph: '18px',
  paragraph: '13px',
  reviewPanelText: '18px',
  reviewPanelUserName: '14px',
  disclaimerText: '12px'
};

const SmallMobileSizePalette = {
  heading1: '16px',
  tilesBtns: '12px',
};

const TopNavigationBreakPoint = {
  smMobileMin: '320px',
  smMobileMax: '639px',
  mdMobileMin: '640px',
  mdMobileMax: '991px',
  smDesktopMin: '992px',
  smDesktopMax: '1199px',
};

// corresponds with reactstrap sm, md, lg breakpoints
const PageBodyBreakPoint = {
  smMobileXSmall: '360px',
  smMobileSmall: '480px',
  smMobileMin: '576px', // sm
  smMobileMax: '767px',
  mdMobileMin: '768px', // md
  mdMobileMax: '991px',
  smDesktopMin: '992px',  // lg
  smDesktopMax: '1199px',
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents;

export interface ThemeInterface {
    color: any;
    TopNavigationBreakPoint: any;
    PageBodyBreakPoint: any;
    size: any;
    DesktopSize: any;
    MobileSize: any;
}

export const Theme = {
  color: ColorPalette,
  TopNavigationBreakPoint,
  PageBodyBreakPoint,
  DesktopSize: DesktopSizePalette,
  MobileSize: MobileSizePalette,
  SmallMobileSize: SmallMobileSizePalette
};

export default styled;

export { css, createGlobalStyle, keyframes, ThemeProvider };