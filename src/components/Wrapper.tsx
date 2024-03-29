import { ReactNode } from "react";
import { motion } from "framer-motion";
import * as stylex from "@stylexjs/stylex";

type WrapperProps = {
  children?: ReactNode;
  style?: stylex.StyleXStyles;
  initialX?: any;
  initialY?: any;
  initialTransform?: any;
  initialScale?: any;
};

/**
 * Functional React component representing a wrapper with dynamic styling based on scroll position.
 *
 * @param {WrapperProps} props - The properties of the Wrapper component.
 * @returns {JSX.Element} The JSX representation of the Wrapper component.
 */

const Wrapper = ({
  children,
  style,
  initialX,
  initialY,
  initialTransform,
}: React.PropsWithChildren<WrapperProps>) => {
  return (
    <motion.div
      id="wrapper"
      style={{
        position: "absolute",
        left: initialX,
        top: initialY,
        transform: initialTransform,
        transformOrigin: "left",
      }}
      {...stylex.props(style)}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
