import { DeepPartial } from "redux";
import { LoginShema } from "../types/loginShema";
import { loginActions, loginReducer } from "./loginSlice";

//36 lesson end
describe( 'loginSlice.tets description', () => {
    test('set username', () => {
        const state :DeepPartial<LoginShema> = {
            username:'name'
        }
        expect(loginReducer(state as LoginShema, loginActions.setUsername('test name'))).toStrictEqual({username: "test name"});
    });
       test('set password', () => {
    const state :DeepPartial<LoginShema> = {
            password:'123'
        }
        expect(loginReducer(state as LoginShema, loginActions.setPassword('321'))).toStrictEqual({password: "321"});
    });

});