exports.createStore = reducer => {
  let state = reducer(undefined, { type: '@@INIT' })
  const subscribers = []

  const dispatch = action => {
    state = reducer(state, action)
  }
  const getState = () => state
  const subscribe = () => {}
  return {
    dispatch,
    getState,
    subscribe,
  }
}
