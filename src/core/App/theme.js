const colorName = {
    white: "#FFFFFF",
    whitelilac: "#FBFBFE",
    anakiwa: "#8CC2FF",
    parsley: "rgba(20, 70, 32, 0.2)",
    porcelain: "#F2F3F4",
    irontransparent: "rgba(209, 213, 218, 0.3)",
    mercury: "#E5E5E5",
    slategray: "#6E7E91",
    shipCove: "#6D93BE",
    dodgerblue: "#2188FF",
    tropicalblue: "#CDE0F7",
    sciencebluelight: "rgba(3, 102, 214, 0.2)",
    scienceblue: "#0366D6",
    violet: "#090A33",
    tundora: "#414141",
    lightblack: "#313131",
    black: "#252525",
};

const commonTheme = {
    breakpoint: {
        mobileMax: 767,
        desktopMax: 1199,
    },
    boxShadow: "0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadius: "4px",
};

export const lightMode = {
    ...commonTheme,
    color: {
        primary: colorName.scienceblue,
        textPrimary: colorName.black,
        site: {
            background: colorName.whitelilac,
            text: colorName.slategray,
        },
        buttonLink: {
            text: colorName.white,
            border: colorName.irontransparent,
            shadow: colorName.anakiwa,
            active: colorName.parsley,
        },
        boxBackground: colorName.white,
        headerLine: colorName.mercury,
        tile: {
            border: colorName.porcelain,
            borderHover: colorName.tropicalblue,
            header: colorName.scienceblue,
        },
        link: {
            text: colorName.scienceblue,
            underline: colorName.sciencebluelight,
            hover: colorName.dodgerblue,
        },
        socialIcons: {
            color: colorName.black,
            hover: colorName.scienceblue,
        },
        modeSwitcher: {
            background: colorName.mercury,
            border: colorName.slategray,
            icon: colorName.slategray,
        },
    }
};

export const darkMode = {
    ...commonTheme,
    color: {
        primary: colorName.dodgerblue,
        textPrimary: colorName.white,
        site: {
            background: colorName.black,
            text: colorName.white,
        },
        buttonLink: {
            text: colorName.white,
            border: colorName.irontransparent,
            shadow: colorName.shipCove,
            active: colorName.parsley,
        },
        boxBackground: colorName.lightblack,
        headerLine: colorName.tundora,
        tile: {
            border: colorName.tundora,
            borderHover: colorName.tropicalblue,
            header: colorName.scienceblue,
        },
        link: {
            text: colorName.scienceblue,
            underline: colorName.sciencebluelight,
            hover: colorName.dodgerblue,
        },
        socialIcons: {
            color: colorName.white,
            hover: colorName.scienceblue,
        },
        modeSwitcher: {
            background: colorName.slategray,
            border: colorName.white,
            icon: colorName.black,
        },
    }
};