import { motion, useAnimation, useScroll } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import styles from "./Header.styles";
import { globalTokens as $ } from "../../styles/globalTokens.stylex";
import { useRef } from "react";
import motionValueScrollYFactory from "../../utils/motionValueScroll";
import { useLocation } from "react-router-dom";
import Wrapper from "../Wrapper";
import Logo from "../Logo/Logo";
import { MobileNav, Nav } from "../Nav/Nav";

/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */

const initialValue = {
  initialYLogo: {
    max: "clamp(1.3rem, 18vw, 18rem)",
    min: "clamp(1.3rem, 2vw, 18rem)",
  },
  initialYSpan: {
    max: "clamp(0.5rem, 6.6vw, 5rem)",
    min: "clamp(0.45rem, 0.70vw, 5rem)",
  },
  initialY: { max: `145px`, min: `15px` },
  initialTransform: {
    max: `translate3d(0rem, 0, 0) scale(1)`,
    min: "translate3d(0.12rem, 0, 0) scale(.6)",
  },
} as const;

const Header = (): JSX.Element => {
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  const controls = useAnimation();
  const delta = useRef(0);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  const initialY = motionValueScrollYFactory([
    initialValue.initialY.max,
    initialValue.initialY.min,
  ]);
  const initialTransform = motionValueScrollYFactory([
    initialValue.initialTransform.max,
    initialValue.initialTransform.min,
  ]);

  scrollY.on("change", (val) => {
    const diff = Math.abs(val - lastScrollY.current);
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff;
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff;
    }
    if (delta.current >= 10 && val > 650) {
      controls.start("hidden");
    } else if (delta.current <= -10 || val < 200) {
      controls.start("visible");
    }
    lastScrollY.current = val;
  });

  return (
    <motion.header
      initial={isHomePage ? "visible" : undefined}
      animate={controls}
      variants={{
        visible: { top: "0px" },
        hidden: { top: "-100px" },
      }}
      {...stylex.props(styles.header)}
    >
      {isHomePage && (
        <Wrapper
          initialTransform={initialTransform}
          initialY={initialY}
          initialX={$.globalXPadding}
        >
          <Logo />
        </Wrapper>
      )}
      {!isHomePage && (
        <Wrapper
        initialTransform={initialValue.initialTransform.min}
          initialY={initialValue.initialY.min}
          initialX={$.globalXPadding}
        >
          <Logo />
        </Wrapper>
      )}
      <Nav />
      <MobileNav />
    </motion.header>
  );
};

export default Header;
