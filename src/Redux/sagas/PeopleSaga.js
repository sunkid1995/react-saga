// redux-saga
import { take, call, put } from 'redux-saga/effects';

// action type
import { PEOPLE } from '../types';

// action
import { people } from '../actions';

// api
function get() {
  return fetch('https://swapi.co/api/people/').then(res => res.json());
}

/**
 * saga
 * B1: yield take(PEOPLE.GET_PEOPLE) - Lắng nghe một action được dispatch - blocking
 * B2: yield call(get) - Sau khi lắng nghe một action tiến hành gọi một api
 * B3: typeof data === 'object' - Kiểm tra data đúng or sai
 * B4: Sau khi kiểm tra đúng/sai tiếp tục bước 4.1
 * B4.1: yield put(people.getPeoPleSuccess(results)) - dispatch actions
 */

export function* watchActionGetPeople() {
  // blocking
  yield take(PEOPLE.GET_PEOPLE);

  // blocking
  const data = yield call(get);

  if (typeof data === 'object') {
    const { results } = data;

    // way 1

    // yield put({
    //   type: PEOPLE.GET_PEOPLE_SUCCESS,
    //   payload: results,
    // });

    // way 2
    yield put(people.getPeoPleSuccess(results));

  } else {
    yield put({
      type: PEOPLE.GET_PEOPLE_FAILED,
      error: [],
    });
  }
}
