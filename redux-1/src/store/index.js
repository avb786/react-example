import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";

const intialCounterState = { counter: 0, showCounter: true, };

const counterSlice = createSlice({
    name: 'counter',
    initialState: intialCounterState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const intialAuthState = {
    isAuth: false
}
const authSlice = createSlice({
    name: 'Auth',
    initialState: intialAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;

        }
    }
})

// const counterReducer = (state = intialState , action) => {
//     if (action.type === "INCREMENT") {
//         return {
//             ...state,
//             counter: state.counter + action.amount,
//         }
//     }

//     if (action.type === "DECREMENT") {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     } 

//     if(action.type === "TOGGLE") {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }

//     return state
// }


// const store = createStore(counterReducer);
const store = configureStore({ reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}});

export const counterActions = counterSlice.actions;
export const AuthActions = authSlice.actions;

export default store;