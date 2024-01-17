import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  logo: (fontSize) => ({
    fontSize: fontSize || "clamp(1.3rem, 18vw, 18rem)",
    lineHeight: '100%',
    textTransform: 'uppercase',
    fontWeight: 700,
    overflow: 'hidden',
    textAlign: 'center',
  }),
});

export default styles