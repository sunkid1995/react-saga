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