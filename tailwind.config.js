/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        small: { max: "639px" }, // Custom screen size for small devices
      },
      keyframes: {
        loader: {
          "0%": { "background-position": "-800px 0px" },
          "100%": { "background-position": "800px 0px" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        loader1: "loader 2s linear infinite",
        loader2: "loader 3s linear infinite",
        loader3: "loader 4s linear infinite",
        fadeIn: "fadeIn 1.5s",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // This is called utility classes
        //By using these utility classes, you can apply the custom styles defined in your Tailwind CSS configuration.
        ".small:hidden": {
          "@screen small": {
            display: "none",
          },
        },
        // ".small:flex-w": {
        //   "@screen small": {
        //     flex: "none",
        //     width: "150px",
        //     display: "none",
        //   },
        // },
        ".bg-gradient-text": {
          background: "-webkit-linear-gradient(16deg, #4b90ff, #ff5546)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".grid-temp-col": {
          "grid-template-columns": "repeat(auto-fill,minmax(180px,1fr))",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".scroll-w-none": {
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    // After defining the custom utility, you can use it in your HTML or JSX code like any other Tailwind class.
    // This is called adding custom utility
  ],
};
