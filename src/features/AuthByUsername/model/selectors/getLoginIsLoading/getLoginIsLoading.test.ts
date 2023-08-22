import { StateShema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';
import { getLoginIsLoading } from './getLoginIsLoading';



describe('getLoginError.test description', () => {
  test('should return true', () => {
    const state: DeepPartial<StateShema> = {
        login:{
           isLoading: true
        }
      ,
    };
    expect(getLoginIsLoading(state as StateShema)).toEqual(true);
  });

  test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = { };
    expect(getLoginIsLoading(state as StateShema)).toEqual(false);
  });
});
