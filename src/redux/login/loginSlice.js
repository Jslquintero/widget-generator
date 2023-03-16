import {createSlice} from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: {
            data:[]
        }
    },
    reducers: {

        addOrDelete: {
            reducer(state, action) {
                return {...state, values: {...state.value, data: action.payload}}
            }
        },
    }
});

export const {addOrDelete} = loginSlice.actions;

export const accion = (state) => state.login.value;

export default loginSlice.reducer;
