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
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
