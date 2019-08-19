// types
import { PEOPLE } from '../../types';

const INITIAL_STATE = {
  allPeople: [],
};

function peopleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PEOPLE.GET_PEOPLE_SUCCESS: {
      return { ...state, allPeople: [...action.payload] }
    }

    case PEOPLE.FILTER_PEOPLE_SUCCESS: {
      return {
        ...state,
        allPeople: action.filterData,
      }
    }
    default:
      return state;
  }
}

export default peopleReducer;
