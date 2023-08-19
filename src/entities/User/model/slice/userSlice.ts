import { createSlice } from '@reduxjs/toolkit'
import { UserShema } from '../types/user'


const initialState:UserShema = {
    authData:undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
     
    }
  },
})

export const { actions: userActions } = userSlice

export const {reducer: userReducer} = userSlice