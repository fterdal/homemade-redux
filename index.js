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

// Create the store
const store = createStore(reducer)

// Subscribe to the store
// Whenever the store changes, call this functino with the new one
const logCounter = ({ counter }) => {
  console.log(`COUNTER IS ${counter}`)
}
store.subscribe(logCounter)
const unsubA = store.subscribe(() => console.log('SUBSCRIBER A'))
const unsubB = store.subscribe(() => console.log('SUBSCRIBER B'))
const unsubC = store.subscribe(() => console.log('SUBSCRIBER C'))


// Capture the initial value
const first = store.getState()
// Dispatch an action
store.dispatch({ type: 'INCREMENT' })
// Capture the second value
const second = store.getState()
// Notice that the original value is preserved in amber.
console.log('FIRST', first)
console.log('SECOND', second)

// Dispatch another action.
// Notice the subscribed function run a second time
unsubA()
unsubC()

store.dispatch({ type: 'INCREMENT' })
