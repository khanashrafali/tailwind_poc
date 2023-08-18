/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "3xl": { max: "1800px" },
      "2xl": { max: "1500px" },
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
      xsm: { max: "318px" },
    },
    extend: {
      colors: {
        borderColor: "rgba(28, 40, 44, 0.2)",
      },
      maxWidth: {
        menuWidth: "calc(100% - 32px)",
      },
      maxHeight: {
        menuHeight: "calc(100% - 96px)",
      },
      spacing: {
        "calc-height": "calc(1.5em + 0.75rem + 2px)",
        "be-height": "calc(100% + 30px)",
        "calc-width": "calc(100% + 2px)",
        "calc-contackWidth": "calc(100% + 20px)",
        "calc-formWidth": "calc(100% + 30px)",
        "calc-form": "calc(1.5em + 0.75rem + 2px)",
      },
      boxShadow: {
        "my-shadow":
          "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
        "card-shadow": "0 20px 30px 0 rgba(28, 40, 44, 0.2)",
        "about-shadow": "0 0px 0px 0px rgb(0 0 0 / 20%)",
      },
      gridTemplateColumns: {
        "minmax-213": "repeat(auto-fill, minmax(213px, 1fr))",
      },
      screens: {
        "2xl": { max: "1500px" },
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
