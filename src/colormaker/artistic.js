// Code for mapping hsl colors to an artistic colorwheel, and back.
//
// Code adapted from https://github.com/benknight/kuler-d3
// (MIT License)
//
// Original source: https://github.com/benknight/kuler-d3/blob/789dd6ee99b596e2fc2f76a42adc4f1179c2ad5f/colorwheel.js

import {deg} from './util'

// Simple range mapping function
// For example, mapRange(5, 0, 10, 0, 100) = 50
export const mapRange = (value, fromLower, fromUpper, toLower, toUpper) => (
  toLower + (value - fromLower) *
  ((toUpper - toLower) / (fromUpper - fromLower))
)

// These two functions are ripped straight from Kuler source.
// They convert between scientific hue to the color wheel's "artistic" hue.
export const artisticToScientificSmooth = hue => (
  hue < 60
  ? hue * (35 / 60)
  : hue < 122
  ? mapRange(hue, 60, 122, 35, 60)
  : hue < 165
  ? mapRange(hue, 122, 165, 60, 120)
  : hue < 218
  ? mapRange(hue, 165, 218, 120, 180)
  : hue < 275
  ? mapRange(hue, 218, 275, 180, 240)
  : hue < 330
  ? mapRange(hue, 275, 330, 240, 300)
  : mapRange(hue, 330, 360, 300, 360)
)

export const scientificToArtisticSmooth = hue => (
  hue < 35
  ? hue * (60 / 35)
  : hue < 60
  ? mapRange(hue, 35, 60, 60, 122)
  : hue < 120
  ? mapRange(hue, 60, 120, 122, 165)
  : hue < 180
  ? mapRange(hue, 120, 180, 165, 218)
  : hue < 240
  ? mapRange(hue, 180, 240, 218, 275)
  : hue < 300
  ? mapRange(hue, 240, 300, 275, 330)
  : mapRange(hue, 300, 360, 330, 360)
)

// Rotate a hue on the artistic color wheel.
export const rotateArtistic = (hue, degrees) => {
  // Take a scientific (i.e. digital) color wheel hue and replot it on the
  // artistic (additive?) color wheel.
  const artistic = scientificToArtisticSmooth(hue)
  // Then rotate the hue. The effect is that we create associations between
  // colors on the artistic color wheel, which tends to produce better results.
  const rotated = deg(artistic + degrees)
  // Then replot it back to digital color wheel.
  return artisticToScientificSmooth(rotated)
}