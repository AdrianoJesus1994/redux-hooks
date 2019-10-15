import { createStore } from "redux";

const INITIAL_STATE = {
  data: [
    'React',
    'ReactNative'
  ]
}

function courses(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'ADD_COURSES':
          return { ...state, data: [ ...state.data, action.title ]};
    default:
      return { ...state };
  }
}

const store = createStore(courses);

export default store;