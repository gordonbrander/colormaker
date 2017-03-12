import React, { Component } from 'react'
import * as Swatch from './Swatch.js'
import * as Mixer from './Mixer.js'
import './App.css'
import * as Hsv from './colormaker/hsv.js'
import {set} from './common/object'
import {box, forward} from './common/address'
import {unknown} from './common/unknown'

export const ForMixer = box('Mixer')

// Init model
export const init = () => ({
  color: Hsv.readHsv('#dc5446')
})

export const update = (model, action) =>
  action.type === 'Mixer'
  ? set(model, 'color', Mixer.update(model.color, action.action))
  : unknown(model, action)

export const View = ({color}, address) => {
  const complementary = Hsv.complementaryHsv(color)
  const triadic = Hsv.triadicHsv(color)
  const tetradic = Hsv.tetradicHsv(color)
  const analogous1 = Hsv.analogousHsv(color, 240)
  const analogous2 = Hsv.analogousHsv(color, 120)
  const analogous3 = Hsv.analogousHsv(color, 80)
  const shades = Hsv.shadesHsv(color)
  const greyscale = [Hsv.greyscaleHsv(color)]

  return (
    <div className="app">
      <Mixer.View address={forward(address, ForMixer)} model={color} />
      <Swatch.List model={complementary} />
      <Swatch.List model={triadic} />
      <Swatch.List model={tetradic} />
      <Swatch.List model={analogous1} />
      <Swatch.List model={analogous2} />
      <Swatch.List model={analogous3} />
      <Swatch.List model={shades} />
      <Swatch.List model={greyscale} />
    </div>
  )
}

// @TODO figure out address. I guess it should be a method that calls update.
export class App extends Component {
  constructor(props, init, update) {
    super(props);
    this.update = props.update
    this.state = props.init()
    this.View = props.view
    this.address = this.address.bind(this)
  }

  address(action) {
    const next = this.update(this.state, action)
    this.setState(next)
  }

  render() {
    return this.View(this.state, this.address)
  }
}