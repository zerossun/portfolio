const size = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};
const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px", // 추가된 padding 값
  lg: "24px",
  xl: "32px",
};

const theme = {
  main: "#ededed",
  sub1: "#666",
  sub2: "#d8f3dc",
  sub3: "#74c69d",
  white: "#f8f9fa",
  disabled: "#495057",
  gray: "#ededed",
  black: "#212529",
  
  sm: `(max-width:${size.sm})`,
  md: `(max-width:${size.md})`,
  lg: `(max-width:${size.lg})`,
  xl: `(max-width:${size.xl})`,
  padding: spacing,
};

export default theme;
