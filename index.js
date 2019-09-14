const { createStore } = require('./freeducks')

const initialState = { counter: 0 }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // BAD DUCK 😈 🦆
      // state.counter++
      // return state

      // GOOD DUCK 😇 🦆
      return { ...state, counter: state.counter + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)
const first = store.getState()
store.dispatch({ type: 'INCREMENT' })
const second = store.getState()
console.log('FIRST', first)
console.log('SECOND', second)
