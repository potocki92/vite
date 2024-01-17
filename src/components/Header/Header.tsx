import { motion, useAnimation, useScroll } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import { useRef } from "react";
import motionValueScrollYFactory from "../../utils/motionValueScroll";
import { useLocation } from "react-router-dom";
import deviceHeightInfo from "../../utils/deviceHeightInfo";
import styles from "./Header.styles";
import Wrapper from "../Wrapper";
import Logo from "../Logo/Logo";
import { MobileNav, Nav } from "../Nav/Nav";

/**
 * Header component representing the header of a webpage with dynamic animations and styling.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the header component.
 */
const maxHeight: number = deviceHeightInfo();

const initialValue = {
  initialYLogo: {
    max: "clamp(1.3rem, 18vw, 18rem)",
    min: "clamp(1.3rem, 2vw, 18rem)",
  },
  initialYSpan: {
    max: "clamp(0.5rem, 6.6vw, 5rem)",
    min: "clamp(0.45rem, 0.70vw, 5rem)",
  },
  initialY: { max: `${maxHeight / 3}px`, min: `0px` },
  initialX: { max: `calc(50% + 0rem)`, min: `calc(0% + 1.5rem)` },
  initialTransform: { max: `translate(-50%)`, min: "translate(0%)" },
} as const;

const Header = (): JSX.Element => {
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  const controls = useAnimation();
  const delta = useRef(0);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  const initialYLogo = motionValueScrollYFactory(["1", "0.25"]);
  // const initialYLogo = motionValueScrollYFactory([initialValue.initialYLogo.max, initialValue.initialYLogo.min]);
  // const initialYSpan = motionValueScrollYFactory([initialValue.initialYSpan.max, initialValue.initialYSpan.min]);
  const initialY = motionValueScrollYFactory([
    initialValue.initialY.max,
    initialValue.initialY.min,
  ]);
  const initialX = motionValueScrollYFactory([
    initialValue.initialX.max,
    initialValue.initialX.min,
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
        <motion.div
          initial={isHomePage ? "visible" : undefined}
          style={{width: "100%", position: "relative",scale: initialYLogo} as unknown as React.CSSProperties}
        >
        <Wrapper
          initialTransform={initialTransform}
          initialX={initialX}
          initialY={initialY}
          // initialScale={initialYLogo}
        >
            <Logo />
            <span {...stylex.props(styles.heroHeading)}>
              FULLSTACK DEVELOPER
            </span>
        </Wrapper>
      </motion.div>
      )}
      {!isHomePage && (
        <Wrapper
        // initialTransform={initialValue.initialTransform.min}
        initialX={initialValue.initialX.min}
        initialY={initialValue.initialY.min}
          style={styles.headerWrapper}
        >
          <div
            style={
              {
                fontSize: initialValue.initialYLogo.min,
              } as unknown as React.CSSProperties
            }
          >
            <Logo />
          </div>
          <div
            style={
              {
                fontSize: initialValue.initialYSpan.min,
              } as unknown as React.CSSProperties
            }
          >
            <span {...stylex.props(styles.heroHeading)}>
              FULLSTACK DEVELOPER
            </span>
          </div>
        </Wrapper>
      )}
      <Nav />
      <MobileNav />
    </motion.header>
  );
};

export default Header;
