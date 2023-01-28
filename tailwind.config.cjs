/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          300: "#3C3679",
          500: "#201C44",
          DEFAULT: "#201C44",
          900: "#131126",
        },
        secondary: "#FAE0E1",
      },
      container: {
        center: true,
        padding: "min(4vw, 2rem)",
      },
      screens: {
        "sm-down": { max: "639px" },
        "md-down": { max: "767px" },
        "lg-down": { max: "1023px" },
        "nav-break": "640px",
        "2xl": "1360px",
      },
      zIndex: {
        1: "1",
        "-1": "-1",
      },
      // prettier-ignore
      gridTemplateAreas: {
        "footer-desktop": [
          "logo nav",
          "copyright socials"
        ],
        "footer-mobile": [
          "logo nav socials",
          "copyright copyright copyright"
        ],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@savvywombat/tailwindcss-grid-areas"),

    ({ addUtilities }) => {
      addUtilities({
        ".debug": {
          outline: "1px solid red",
        },
      });
    },
    ({ addBase, theme }) => {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable = colorKey === "DEFAULT" ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`;
          let newVars;

          if (cssVariable.includes("primary") || cssVariable.includes("secondary")) {
            newVars = typeof value === "string" ? { [cssVariable]: value } : extractColorVars(value, `-${colorKey}`);
          }

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};
