/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 80, 153, 1)",
        text: "rgba(27, 29, 31, 1)",
        grayText: "rgba(182, 182, 182, 1)",
        border: "rgba(238, 238, 238, 1)",
        primaryOrange: "rgba(255, 148, 49, 1)",
        grayBg: "rgba(244, 245, 246, 1)",
        mainBg: "rgba(250, 250, 253, 1)",
        cardBg: "rgba(232, 237, 249, 1)",
        footerBorder: "rgba(255, 255, 255, 0.15)",
        lightGray: "rgba(244, 245, 246, 1)",
      },
      boxShadow: {
        headerShadow: "0px 5px 20px 0px rgba(44, 41, 51, 0.1)",
        controlBtnShadow: "0px 4px 10px 0px rgba(46, 16, 102, 0.25)",
      },
      borderRadius: {
        card: "10px",
      },
    },
    screens: {
      sm: 0,
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },
  },
  plugins: [],
};
