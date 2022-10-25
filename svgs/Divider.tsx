import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"

const Divider = (props: any) => (
  <Svg width={295} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path fill="#4F5D74" d="M0 8h122v1H0zm173 0h122v1H173z" />
      <G transform="translate(138)" fill="#CEE3E9">
        <Rect width={6} height={16} rx={3} />
        <Rect x={14} width={6} height={16} rx={3} />
      </G>
    </G>
  </Svg>
)

export default Divider;
