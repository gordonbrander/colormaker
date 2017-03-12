export {hsv as readHsv} from 'd3-hsv'
import {hsv as d3hsv} from 'd3-hsv'
import {rotateArtistic} from './artistic'
import {ratio, deg} from './util'

// Create an hsv color, clamping ranges to valid values.
// Returns a d3 hsv color.
export const Hsv = (h, s, v) => d3hsv(
  deg(h),
  ratio(s),
  ratio(v)
)

// Rotate an HSV color on the artistic color wheel, then convert back to
// standard HSV color wheel color point and return new HSV color.
export const rotateArtisticHsv = (hsv, degrees) =>
  Hsv(rotateArtistic(hsv.h, degrees), hsv.s, hsv.v)

export const lightnessHsv = (hsv, v) => Hsv(hsv.h, hsv.s, v)

export const lightenHsv = (hsv, ratio) =>
  lightnessHsv(hsv, (hsv.v + (hsv.v * ratio)))

export const darkenHsv = (hsv, ratio) =>
  lightnessHsv(hsv, (hsv.v - (hsv.v * ratio)))

export const saturateHsv = (hsv, ratio) =>
  Hsv(hsv.h, (hsv.s + (hsv.s * ratio)), hsv.v)

export const desaturateHsv = (hsv, ratio) =>
  Hsv(hsv.h, (hsv.s - (hsv.s * ratio)), hsv.v)

// Convert an hsv value to greyscale.
export const greyscaleHsv = hsv => Hsv(0, 0, hsv.v)

export const complementaryHsv = hsv => [hsv, rotateArtisticHsv(hsv, 180)]

export const triadicHsv = hsv => [hsv, rotateArtisticHsv(hsv, -120), rotateArtisticHsv(hsv, 120)]

// @TODO not super happy about results.
export const tetradicHsv = hsv => [
  hsv,
  rotateArtisticHsv(hsv, -90),
  rotateArtisticHsv(hsv, 90),
  rotateArtisticHsv(hsv, 180)
]

// Generate analogous colors. These are colors spread evenly across the color
// wheel.
//
// Spread is the number of degrees (or the width of the slice of the pie)
// that the colors should be sampled from. Narrower means more similar
// analogous colors.
export const analogousHsv = (hsv, spread) => {
  const slice = deg(spread) / 4
  return [
    rotateArtisticHsv(hsv, -2 * slice),
    rotateArtisticHsv(hsv, -1 * slice),
    hsv,
    rotateArtisticHsv(hsv, slice),
    rotateArtisticHsv(hsv, 2 * slice)
  ]
}

// Several shades of the same color
// @TODO s -30, l -20 or -50. Combine in different ways.
// This mistake was producing good results, but don't know why
// export const shadesHsv = hsv => [lightnessHsv(hsv, 0.9), hsv, adjustHsv(hsv, 0, 2.0, 1.05)]

export const shadesHsv = hsv => [
  darkenHsv(hsv, 0.4),
  darkenHsv(hsv, 0.2),
  hsv,
  lightenHsv(hsv, 0.2),
  lightenHsv(hsv, 0.4)
]
