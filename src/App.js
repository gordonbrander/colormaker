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
  color: Hsv.Hsv('#dc5446')
})

export const update = (model, action) =>
  action.type === 'Mixer'
  ? set(model, 'color', Mixer.update(model.color, action.action))
  : unknown(model, action)

export const View = (model, address) => {
  const color = Hsv.Hsv(model.color)
  const complementary = Hsv.complementaryHsv(color)
  const analogous1 = Hsv.analogousHsv(color, 240)
  const analogous2 = Hsv.analogousHsv(color, 120)
  const analogous3 = Hsv.analogousHsv(color, 80)

  return (
    <div className="app">
      <Mixer.View address={forward(address, ForMixer)} model={color} />
      <Swatch.List model={complementary} />
      <Swatch.List model={analogous1} />
      <Swatch.List model={analogous2} />
      <Swatch.List model={analogous3} />
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
    console.log(next)
    this.setState(next)
  }

  render() {
    return this.View(this.state, this.address)
  }
}