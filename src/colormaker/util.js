// Relies on the fact that D3 color instances will return a valid CSS
// color string when invoking their toString method.
// Exporting a function for mapping.
export const toString = color => color.toString()

// Clamp a value between min and max.
export const clamp = (x, min, max) => Math.max(Math.min(x, max), min)

// Convert ratio to hard value within min and max.
export const fromRatio = (ratio, min, max) => clamp(((max - min) * ratio), min, max)

// Clamp a number between 0 and 1
export const ratio = n => clamp(n, 0, 1)

// Clamp a number as a degree rotation
// This is a clamping funciton that rotates all the way around if we go
// past 360.
export const deg = degrees => {
  // Wrap around. We're not using the condensed %= operator, because it is
  // obscure. Less clear what is happening.
  // eslint-disable-next-line
  degrees = degrees % 360
  return degrees < 0 ? 360 + degrees : degrees
}