import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkApi.dispatch(userActions.setAuthData(response.data))
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(i18n.t('Неправильный логин или пароль'));
    }
  },
);
