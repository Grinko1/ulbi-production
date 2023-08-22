import { StateShema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';
import { getLoginState } from './getLoginState';

describe('getLoginError.test description', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateShema> = {
      login: {
        username: 'name',
        password: '123',
        isLoading: false,
      },
    };
    expect(getLoginState(state as StateShema)).toEqual({
        username: 'name',
        password: '123',
        isLoading: false,
      });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateShema> = {};
    expect(getLoginState(state as StateShema)).toEqual(undefined);
  });
});
