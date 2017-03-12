// Shallow copy an object, returning a new one.
export const copy = object => Object.assign({}, object)

// Set a `value` at `key` of `object`, returning a new object.
// However, if `value` does not change, the original object is returned.
export const set = (object, key, value) => {
  if (object[key] === value) {
    return object
  } else {
    const out = copy(object)
    out[key] = value
    return out
  }
}