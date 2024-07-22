/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // This is called utility classes
        //By using these utility classes, you can apply the custom styles defined in your Tailwind CSS configuration.

        ".bg-gradient-text": {
          background: "-webkit-linear-gradient(16deg, #4b90ff, #ff5546)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".grid-temp-col": {
          "grid-template-columns": "repeat(autofill,minmax(180px,1fr))",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    // After defining the custom utility, you can use it in your HTML or JSX code like any other Tailwind class.
    // This is called adding custom utility
  ],
};
