module.exports = {
  purge: [],
  theme: {
    extend: {
      boxShadow: {
        tk1: "0px 4px 8px rgba(21, 103, 179, 0.1)",
        tk2: "0px 6px 15px rgba(181, 201, 219, 0.3)",
      },
      borderRadius: {
        xl: "1rem",
      },
      colors: {
        green: {
          1000: "rgba(32, 68, 34, 1)",
          900: "rgba(45, 95, 47, 1)",
          800: "rgba(56, 119, 59, 1)",
          700: "rgba(69, 147, 73, 1)",
          600: "rgba(81, 173, 86, 1)",
          500: "rgba(123, 193, 127, 1)",
          400: "rgba(161, 211, 164, 1)",
          300: "rgba(194, 226, 196, 1)",
          200: "rgba(222, 239, 223, 1)",
          100: "rgba(241, 248, 241, 1)",
        },
        gray: {
          1000: "rgba(15, 20, 22, 1)",
          900: "rgba(21, 28, 31, 1)",
          800: "rgba(26, 35, 39, 1)",
          700: "rgba(32, 43, 48, 1)",
          600: "rgba(38, 50, 56, 1)",
          500: "rgba(90, 99, 104, 1)",
          400: "rgba(138, 144, 148, 1)",
          300: "rgba(179, 183, 185, 1)",
          200: "rgba(214, 216, 217, 1)",
          100: "rgba(238, 239, 239, 1)",
          50: "rgba(250, 250, 250, 1)",
          white: "rgba(255, 255, 255, 1)",
          "white-opacity-90": "rgba(255, 255, 255, 0.9)",
        },
        yellow: {
          1000: "rgba(245, 127, 23, 1)",
          900: "rgba(249, 168, 37, 1)",
          800: "rgba(251, 192, 45, 1)",
          700: "rgba(253, 216, 53, 1)",
          600: "rgba(255, 235, 59, 1)",
          500: "rgba(255, 238, 88, 1)",
          400: "rgba(255, 241, 118, 1)",
          300: "rgba(255, 245, 157, 1)",
          200: "rgba(255, 249, 196, 1)",
          100: "rgba(255, 253, 231, 1)",
        },
        red: {
          650: "rgba(235, 87, 87, 1)",
          150: "rgba(255, 243, 243, 1)",
        },
        orange: {
          650: "rgba(242, 158, 59, 1)",
          150: "rgba(254, 245, 236, 1)",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
