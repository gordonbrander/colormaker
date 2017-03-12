Planning
--------

- 5 colors seems about right for a scheme.
- It looks like Kuler is using the "painters" color circle - (Orange-Blue complements and Green-Red complements) and not the additive circle, where complementary colors are found at 180º from each other in the HSB model. (Blue opposed to Yellow, Red opposed to Cyan and Green opposite Magenta). Kuler color wheel in D3 https://github.com/benknight/kuler-d3

Artifact: color palette possibilities.

The goal is also to build up a "color artist in a box"... a set of functions and labeled data that operate on colors at a higher level of usefulness. `isReadable`, `isMush`, `intuitiveAssociations`, `isNatural` etc.

What makes a good color palette?

- Color wheel relationships (triadic, opposing, etc)
- The right fit for a given tone, brand, mood (calm, attention-grabbing, etc).
- A variety of contrasts.
- For UI/websites/apps
  - Main color
  - Secondary color
  - Tertiary color (rare)
  - Links, buttons (sometimes same as main color)
  - Shading colors (mostly greys, sometimes tinted grey). Look at Faber Castile grey pens for inspiration. They have lots of cool and warm greys in different shades.
  - Gradients
- For textiles
  - Contrast
  - 2-4 colors
- Film/photo
  - Lots of natural hues are typical
  - Colorwork focuses on a predominant color (sepia, red, blue, green)

What makes a bad color palette? What's a deal-breaker?

- Mush (poopy browns, barfy greens, earwaxy yellows) * 
- Bad contrast between background and type
- Colors in HSV/HSL that are in different parts of the color wheel, but are visually indistinguishable. Yellow, bright purple-pink and cyan are particularly guilty. We can correct for this by watching for those ranges and adding an extra bump to the rotation.

Bad-but-not-always-terrible:

- Drab, dull palettes with low saturation and low brightness. These can be acceptible for film or textiles, or natural palettes. There shouldn't be too many of these colors though.

Mush
----

- Lots of browns
- Dark yellowgreen
- Many dark yellows
- Some unpleasant mid-range greys

Notes:

- Interestingly, it is quite difficult to create mush with Adobe's artistic color wheel.
- Mush is also somewhat relative. Mush together in a good compound or analogous color palette looks like a drab/natural palette.

Natural
-------

- Brown
- Green
- Grey
- Water-like blues
- Yellow-browns
- Flesh tones

Not natural:

- Cyan
- Bright pink
- Reds
- Purple