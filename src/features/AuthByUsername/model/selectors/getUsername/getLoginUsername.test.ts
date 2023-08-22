import { StateShema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';
import { getLoginUsername } from './getUsername';




describe('getLoginError.test description', () => {
  test('should return name', () => {
    const state: DeepPartial<StateShema> = {
        login:{
           username: 'name'
        }
      ,
    };
    expect(getLoginUsername(state as StateShema)).toEqual('name');
  });

  test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = { };
    expect(getLoginUsername(state as StateShema)).toEqual('');
  });
});
