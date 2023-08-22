import { StateShema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';
import { getLoginError } from './getLoginError';

describe('getLoginError.test description', () => {
  test('should return error', () => {
    const state: DeepPartial<StateShema> = {
      login: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateShema)).toEqual('error');
  });

  test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = { };
    expect(getLoginError(state as StateShema)).toEqual('');
  });
});
