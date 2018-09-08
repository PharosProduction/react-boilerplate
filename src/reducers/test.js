const initialState = {
  isFetching: false
}

export function test(state = initialState, action) {
  switch (action.type) {
    default: {
      return {...state, isFetching: true}
    }
  }
}