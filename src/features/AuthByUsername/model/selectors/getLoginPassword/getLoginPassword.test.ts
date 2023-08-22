import { StateShema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';
import { getLoginPassword } from './getLoginPassword';




describe('getLoginError.test description', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateShema> = {
        login:{
           password: '123'
        }
      ,
    };
    expect(getLoginPassword(state as StateShema)).toEqual('123');
  });

  test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = { };
    expect(getLoginPassword(state as StateShema)).toEqual('');
  });
});
