exports.createStore = reducer => {
  let state = reducer(undefined, { type: '@@INIT' })
  let subscribers = []

  const _nextId = () =>
    1 +
    subscribers
      .map(subscriber => subscriber.id)
      .reduce((highestId, currentId) => {
        return currentId > highestId ? currentId : highestId
      }, 0)

  const dispatch = action => {
    state = reducer(state, action)
    subscribers.forEach(({ subscribeFn }) => {
      subscribeFn(state)
    })
  }
  const getState = () => state
  const subscribe = subscribeFn => {
    const id = _nextId()
    subscribers.push({ id, subscribeFn })
    const unsubscribe = () => {
      subscribers = subscribers.filter(subscriber => subscriber.id !== id)
    }
    return unsubscribe
  }
  return {
    dispatch,
    getState,
    subscribe,
  }
}
