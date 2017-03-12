// Create a box type for actions.
export const box = type => action => ({
  type,
  action
})

export const forward = (address, box) => action => address(box(action))