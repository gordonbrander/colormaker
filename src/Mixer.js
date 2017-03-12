import React from 'react'
import {Hsv} from './colormaker/hsv'
import {ratio, clamp} from './colormaker/util'
import {unknown} from './common/unknown'

export const Change = (channel, value) => ({
  type: 'Change',
  channel,
  value
})

const updateChange = (model, channel, value) =>
  model[channel] !== value
  ? ( channel === 'h'
    ? Hsv(value, model.s, model.v)
    : channel === 's'
    ? Hsv(model.h, value, model.v)
    : Hsv(model.h, model.s, value)
    )
  : model

export const update = (model, action) =>
  action.type === 'Change'
  ? updateChange(model, action.channel, action.value)
  : unknown(model, action)

const readValue = e => e.target.value

export const View = ({model, address}) => {
  const onChangeH = e => address(Change('h', clamp(readValue(e), 0, 360)))
  const onChangeS = e => address(Change('s', ratio(readValue(e))))
  const onChangeV = e => address(Change('v', ratio(readValue(e))))
  const style = {backgroundColor: model}
  return (
    <div className="mixer">
      <div className="mixer-color" style={style} />
      <div className="mixer-row">
        <input className="slider" type="range" step="0.0001" min="0" max="360" value={model.h} onChange={onChangeH} />
      </div>
      <div className="mixer-row">
        <input className="slider" type="range" step="0.0001" min="0" max="1" value={model.s} onChange={onChangeS} />
      </div>
      <div className="mixer-row">
        <input className="slider" type="range" step="0.0001" min="0" max="1" value={model.v} onChange={onChangeV} />
      </div>
    </div>
  )
}