const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */ module.exports = {
	content: ["./templates/*.html"],
	theme: {
		extend: { 
      fontFamily: { sans: ["Inter var", ...fontFamily.sans] },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        'primary': '#e67852',
        'secondary': '#4a3932',
        'tertiary': '#1b9787',
        'surface': '#444c4c'
      }
    }
	}
};
