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
  main: "#eb4034",
  sub1: "#EAA396",
  sub2: "#FFE5DB",
  sub3: "#56BABC",
  sub4: "#9F0000",
  white: "#FFFFFF",
  disabled: "#a1a1a1",
  gray: "#ededed",
  black: "#111",
  sm: `(max-width:${size.sm})`,
  md: `(max-width:${size.md})`,
  lg: `(max-width:${size.lg})`,
  xl: `(max-width:${size.xl})`,
  padding: spacing,
};

export default theme;
