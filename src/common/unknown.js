// A fallback update function for unknown actions. Use this as the last
// arm of your conditional to catch undefined behavior.
export const unknown = (model, action) => {
  console.error(`Unknown action "${action.type}"`, action)
  return model
}