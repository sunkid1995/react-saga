import _ from 'lodash';

// redux-saga
import { take, takeLatest, call, put, delay, select } from 'redux-saga/effects';

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
 * GET
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

/**
 * saga
 * FILTER
 * B1: takeLatest(PEOPLE.FILTER_PEOPLE, filterPeoPleSaga) - Lắng nghe action cuối cùng của FILTER_PEOPLE
 *  sau đó gọi generator func filterPeoPleSaga
 * B2: yield delay(500) -> delay 500 millisecond
 * B3: yield select - Lấy dữ liệu từ store
 * B4: Filter people theo keyword
 * B5: yield put - Dispatch action filterPeopleSuccess với people được tìm thấy
 */

export function* watchActionFilterPeople() {
  yield takeLatest(PEOPLE.FILTER_PEOPLE, filterPeoPleSaga)
}

export function* filterPeoPleSaga(payload) {
  yield delay(500);
  const { keyword } = payload;

  const listPeople = yield select(state => {
    const { peopleReducer: { allPeople } } = state;
    return allPeople;
  });

  const filterPeople = _.filter(listPeople, peo => _.includes(_.toLower(peo.name), _.toLower(_.trim(keyword))));
  yield put(people.filterPeopleSuccess(filterPeople));
}
