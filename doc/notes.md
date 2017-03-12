Notes
=====

Design Goal
-----------

Guided exploratory color pallet creation.

You the creator, curator. Horse metaphor. This should extend your abilities (which can help reduce time spent and help see other options).

Principles:

- Given a small amount of input, generate many possibilities
- Allow those posibilities to be refined and explored, creating more possibilities.
- Prefer generative pluralism to a single answer.
- Go beyond math relationships (triadic, etc). Map out useful spaces in the colorspace. Correlate with moods and themes (natural, anger, luck). Introduce variablility to diversify generated options.

Sparks:

- Don't worry too much about getting the right visually-consistent colorspace. Good pallets follow loose mathematical rules, but also many intuitive rules. Try to encode a bit of both.

Planning
--------

See [[planning]].

Ideas
-----

Behavior:

- Randomness
- Tree-expansion. After tweaking a color, have that color expand to further posibilities.
- Forraging. Have a lot of options that you can then pick and add to a carrier bag.
- Show application (patterns)
- Use shades to generate many variations on the analogous colors
- "Bloom" UI that expands the possibility space when you click on a color.
- "Bumping numbers" is an ok way to dial in colors, but can we think of a more intutive colormixing strategy? Maybe something using the touchpad or multitouch?
- "Mush zones": blacklisted ranges of mushy gross colors. Baby poop, etc. Include suggestions for fixing (`['saturation', 'hue', 'value']`).
- Color labels: color names for slices of the color wheel (yellow, red, orange).
- Crayons: designate ranges for "useful" recognizable colors that have symbolic or emotional meaning: red, green, blue, cyan, magenta, purple, yellow, orange, pink... basically focus on Crayola and marker color ranges. As you change scrubbers, crayons change (from blue to light blue to pastel blue, etc). Also look at artists markers like Faber Castile and Pantone swatches.
- Color associations: a long JSON or YAML list of color ranges and word associations (English). Luck, anger, calm, growing, excitement...
- Change saturation/value not just hue to ensure a range of contrasts.

Expansion ideas:

- 1 color, generate 10 palettes
- Tree expansion... click on a node, get a set of related colors, grab the ones you like.
- Constraints... given 2 or more colors, find some analogous (would this even be useful?)
- Hexbrowser... a blob interface something like the Apple Watch homescreen or a "fog of war" view in a tile-based game.
  - Start with a hex (or circle in a hex space).
  - Lay out color options in a hex pattern around.
  - Each other color can also be expanded into hex.
  - You explore a hex map of colors, each selection opening more map.
  - Allow selection/editing. Editing will change the neighbors?
  - Sliding your mouse/finger will move around the map using reverse axis.
  - Or, use a dynamic spring-based or bin-packing algorithm.

Design:

- Color splotches. SVG blobs with curve variability.

Resources and Prior art
-----------------------

It looks like Kuler is using the "painters" color circle - (Orange-Blue complements and Green-Red complements) and not the additive circle, where complementary colors are found at 180º from each other in the HSB model. (Blue opposed to Yellow, Red opposed to Cyan and Green opposite Magenta).

Kuler color wheel in D3 https://github.com/benknight/kuler-d3

Tinycolor https://github.com/bgrins/TinyColor

https://twitter.com/colorschemez

https://en.wikipedia.org/wiki/Color_wheel

https://github.com/runemadsen/rune.js/blob/master/src/color.js
https://github.com/MoOx/color
https://github.com/d3/d3/blob/master/API.md#colors-d3-color
https://github.com/d3/d3-scale/blob/master/README.md#interpolateViridis
https://github.com/brehaut/color-js
https://github.com/Qix-/color
http://honyovk.com/Colors/
http://code.stephenmorley.org/javascript/colour-handling-and-processing/
https://bgrins.github.io/TinyColor/
http://colorbrewer2.org/
https://github.com/gka/chroma.js
https://github.com/xav/Grapefruit
conversions https://github.com/jrus/chromatist

Color brewer LAB http://bl.ocks.org/mbostock/c2c5a989359b746a5538601c8f054c2d
ColorBrewer scale http://bl.ocks.org/mbostock/5577023
http://bl.ocks.org/mbostock/048d21cf747371b11884f75ad896e5a5

d3 chromatic http://bl.ocks.org/mbostock/5577023

Rainbow Perceptual Distance http://bl.ocks.org/mbostock/bf057ec744c0e2fc763c06a31ff292e1

Rainbow color scale with better perceptual properties
http://bl.ocks.org/mbostock/310c99e53880faec2434

Perceptual rainbow https://mycarta.wordpress.com/2013/02/21/perceptual-rainbow-palette-the-method/

https://github.com/bjz/color-rs
https://github.com/Ogeon/palette

Crayola colors http://www.datapointed.net/2010/10/crayola-color-chart-rainbow-style/

HSL and HSV (including disadvantages) https://en.wikipedia.org/wiki/HSL_and_HSV

https://en.wikipedia.org/wiki/List_of_color_spaces_and_their_uses