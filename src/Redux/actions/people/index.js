// Types
import { PEOPLE } from '../../types';

export function getPeoPle() {
  return {
    type: PEOPLE.GET_PEOPLE,
  }
}

export function getPeoPleSuccess(data) {
  return {
    type: PEOPLE.GET_PEOPLE_SUCCESS,
    payload: data,
  }
}

// FILTER
export function filterPeople(keyword) {
  return {
    type: PEOPLE.FILTER_PEOPLE,
    keyword,
  }
}

export function filterPeopleSuccess(data) {
  return {
    type: PEOPLE.FILTER_PEOPLE_SUCCESS,
    filterData: data,
  }
}