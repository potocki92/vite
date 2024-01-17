import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  header: ({
    position: "fixed",
    top: 0,
    zIndex: 10,
    display: "flex",
    height: "auto",
    width: "100%",
    maxWidth: "1200px",
    alignItems: "baseline",
    justifyContent: "end",
    padding: "2rem 1.5rem",
  }),
  heroHeading: {
    fontSize: "clamp(0.5rem, 6.6vw, 5rem)",
    display: "block",
    overflow: "hidden",
    fontWeight: "bold",
    lineHeight: "100%",
    textAlign: "center",
  },
  headerWrapper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(-50%)",
    scale: "1"
  },
  transform: {
    position: "absolute",
    left: 15,
    transform: "translateX(0%)",
  },
  fontSize: (fontSize) => ({
    fontSize,
    transition: "font-size 1s",
  }),
  glassEffectContainer: (height) => ({
    position: "absolute",
    height,
    width: "100%",
    transition: "backdrop-filter 0.3s",
  }),
  glassEffectText: {
    backdropFilter: "blur(7.1px)",
  },
});

export default styles;