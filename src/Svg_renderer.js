/////////////////////////////////////////////////////////////////////////////////
// Background_svg.js
// Contains a function that return SVG as JSX
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from "react"
import Svg, { Defs, Image, Path, Use } from "react-native-svg"
import Background from '../svg/Game_background'

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Game Background SVG
const Game_background = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      viewBox="0 0 810 1440"
      {...props}
    >
      <Defs>
        <Image
          id="prefix__a"
          width={2880}
          height={1800}
          xlinkHref={Background.game_background}
        />
      </Defs>
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Use xlinkHref="#prefix__a" transform="matrix(.8 0 0 .8 -747 0)" />
    </Svg>
  )
}

// Home Background SVG
const Home_background = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      viewBox="0 0 810 1440"
      {...props}
    >
      <Defs>
        <Image
          id="prefix__a"
          width={2880}
          height={1800}
          xlinkHref={Background.game_background}
        />
      </Defs>
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Use xlinkHref="#prefix__a" transform="matrix(.8 0 0 .8 -747 0)" />
    </Svg>
  )
}

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

export { Game_background, Home_background };

