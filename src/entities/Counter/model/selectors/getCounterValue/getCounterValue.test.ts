import { StateShema } from "app/providers/StoreProvider";
import { DeepPartial } from "redux";
import { getCounterValue } from "./getCounterValue";

describe('getCounterValue.test description', () => {
  test('should', () => {
    const state: DeepPartial<StateShema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateShema)).toEqual(10);
  });
});
