module.exports = {
  // content: [], -->
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      // 아래의 값들은 min-width이다.
      mobile: "320px", // <-- *신규로 추가한 모바일 스크린용 breakpoint prefix
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
