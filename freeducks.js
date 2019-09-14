exports.createStore = reducer => {
  let state = reducer(undefined, { type: '@@INIT' })
  const subscribers = []

  const dispatch = action => {
    state = reducer(state, action)
    subscribers.forEach(subscribeFn => {
      subscribeFn(state)
    })
  }
  const getState = () => state
  const subscribe = (subscribeFn) => {
    subscribers.push(subscribeFn)
  }
  return {
    dispatch,
    getState,
    subscribe,
  }
}
