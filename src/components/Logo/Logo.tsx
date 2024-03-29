import type {StyleXStyles} from '@stylexjs/stylex';
import * as stylex from "@stylexjs/stylex";
import svg from "/vite.svg"

type LogoProps = {
  fontSize?: string,
  style?: StyleXStyles
};

const Logo =((props: LogoProps) => {
  const { style} = props
  return (
    <div
      id="logo"
      {...stylex.props( style)}
    >
      <img style={{width: "4rem", height: "4rem"}} src={svg}/>
    </div>
  );
});

export default Logo;