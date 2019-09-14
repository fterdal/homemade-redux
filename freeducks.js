exports.createStore = reducer => {
  let state = reducer(undefined, { type: '@@INIT' })

  let subscribers = []

  const dispatch = action => {
    state = reducer(state, action)
    subscribers.forEach(subscribeFn => {
      subscribeFn(state)
    })
  }

  const getState = () => state

  const subscribe = subscribeFn => {
    subscribers.push(subscribeFn)
    const unsubscribe = () => {
      subscribers.splice(subscribers.indexOf(subscribeFn), 1)
    }
    return unsubscribe
  }

  return {
    dispatch,
    getState,
    subscribe,
  }
}

/*
A Redux middleware function looks like this:
function (store) {
  return function(next) {
    return function(action) {
      return next(action)
    }
  }
}
OR written as this:
store => next => action => {

}
*/

const funcA = a => {
  console.log('A')
  return a
}
const funcB = b => {
  console.log('B')
  return b
}
const funcC = c => {
  console.log('C')
  return c
}

const compose = (...funcs) => {
  return funcs.reduce((acc, curr) => {
    return acc(curr)
  })
}
const composedABC = compose(
  funcA,
  funcB,
  funcC
)
console.log(composedABC('hello'))

exports.applyMiddleware = (...middlewares) => {}
