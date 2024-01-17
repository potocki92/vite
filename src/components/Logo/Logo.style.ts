import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  logo: (fontSize) => ({
    fontSize: fontSize || "7rem",
    lineHeight: '100%',
    textTransform: 'uppercase',
    fontWeight: 700,
    overflow: 'hidden',
    textAlign: 'center',
  }),
});

export default styles