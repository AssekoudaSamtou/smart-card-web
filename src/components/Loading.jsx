/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Loader from "../images/Ellipse 1.png";
import Image from "next/image";
import {keyframes} from "@emotion/react";

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loading = ({ width, height }) => (
	<Image sx={{ animation: `${Rotate} 0.5s linear infinite` }} width={width} height={height} src={Loader}/>
)

export default Loading
