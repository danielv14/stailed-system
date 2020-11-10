import {
  color as ssColor,
  ColorProps as SSColorProps,
  compose,
  system, TextColorProps
} from 'styled-system'

// Styled-system patch for the color prop fixing "Types of property 'color' are incompatible"
// when appling props to component that extend ColorProps.
export interface ColorProps extends Omit<SSColorProps, 'color'> {
  textColor?: TextColorProps['color']
}

export const color = compose(
  ssColor,
  system({
    // Alias color as textColor
    textColor: {
      property: 'color',
      // This connects the property to your theme, so you can use the syntax shown below E.g "primary.0".
      scale: 'colors'
    }
  })
)