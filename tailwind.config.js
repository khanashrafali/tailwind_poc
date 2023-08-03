/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      cxl: { max: "1400px" },

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        borderColor: "rgba(28, 40, 44, 0.2)",
      },
      spacing: {
        "calc-height": "calc(1.5em + 0.75rem + 2px)",
        "be-height": "calc(100% + 30px)",
        "calc-width": "calc(100% + 2px)",
      },
      gridTemplateColumns: {
        "minmax-213": "repeat(auto-fill, minmax(213px, 1fr))",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        xmd: { max: "900px" },

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xsm: { max: "318px" },
      },
    },
  },
  plugins: [],
};
