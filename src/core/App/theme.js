const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  mercury: "#E5E5E5",
  alto: "#DADADA",
  anakiwa: "#8CC2FF",
  scienceBlue: "#0366D6",
  dodgerBlue: "#2188FF",
  tropicalBlue: "#CDE0F7",
  blumine: "#1F5189",
  mineShaft: "#252525",
  mineShaftLighter: "#313131",
  slateGray: "#6E7E91",
  ironTransparent: "rgba(209,213,218, 0.3)",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  themeAnimation: "0.5s",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    hover: colorNames.dodgerBlue,
    textPrimary: colorNames.mineShaft,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.mineShaft,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shodaw: colorNames.anakiwa,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.mercury,
    tile: {
      header: colorNames.scienceBlue,
      border: colorNames.ironTransparent,
      borderHover: colorNames.tropicalBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      border: colorNames.slateGray,
      iconWrapper: colorNames.slateGray,
      icon: colorNames.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shodaw: colorNames.anakiwa,
    },
    boxBackground: colorNames.mineShaftLighter,
    headerLine: colorNames.mineShaft,
    tile: {
      header: colorNames.scienceBlue,
      border: colorNames.ironTransparent,
      borderHover: colorNames.blumine,
    },
    themeSwitch: {
      background: colorNames.ironTransparent,
      border: colorNames.white,
      iconWrapper: colorNames.white,
      icon: colorNames.mineShaftLighter,
    },
  },
};
