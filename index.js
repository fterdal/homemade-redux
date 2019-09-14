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
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'SET_COUNTER':
      return { ...state, counter: action.counter }
    default:
      return state
  }
}

// Create the store
const store = createStore(reducer)

// Subscribe to the store
// Whenever the store changes, call this functino with the new state
const logCounter = ({ counter }) => {
  console.log(`COUNTER IS ${counter}`)
}
store.subscribe(logCounter)

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'SET_COUNTER', counter: 10 })
