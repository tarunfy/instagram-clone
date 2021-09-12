module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#0095f6",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
        customText: "#8E8E8E",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
};
