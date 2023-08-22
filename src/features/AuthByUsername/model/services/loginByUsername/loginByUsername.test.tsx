// import axios from 'axios';
// import { loginByUsername } from './loginByUsername';
// import { Dispatch } from 'redux';
// import { StateShema } from 'app/providers/StoreProvider';
// import { userActions } from 'entities/User';

// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, true);

// describe('loginByUsername.test description', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateShema;

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });

//   test('200', async () => {
//     const userValue = { username: 'name', id: '1' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
//     const action = loginByUsername({ username: 'name', password: '123' });
//     const res = await action(dispatch, getState, undefined);

//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(res.meta.requestStatus).toBe('fulfilled');
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//     expect(dispatch).toHaveBeenCalledTimes(3);
//   });
//   test('403', async () => {
//     const userValue = { username: 'name', id: '1' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//     const action = loginByUsername({ username: 'name', password: '123' });
//     const res = await action(dispatch, getState, undefined);

//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(res.meta.requestStatus).toBe('rejected');
//   });
// });

import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { Dispatch } from 'redux';
import { StateShema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test description', () => {
  let dispatch: Dispatch;
  let getState: () => StateShema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('200', async () => {
    const userValue = { username: 'name', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const res = await thunk.callThunk({ username: 'name', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });
  test('403', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const res = await thunk.callThunk({ username: 'name', password: '123' });
console.log(res)
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('rejected');
  });
});
