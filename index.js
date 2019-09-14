const createStore = (reducer) => {

  let state = {}
  const subscribers = []

  const dispatch = () => {}
  const getState = () => {}
  const subscribe = () => {}
  return {
    dispatch,
    getState,
    subscribe
  }
}

const store = createStore()

console.log('STORE', store)
