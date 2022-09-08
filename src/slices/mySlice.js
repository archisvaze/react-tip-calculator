import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
initialState = { amount: "", people: 1, tipPercent: 0, tipAmount: 0, total: 0, text: "CALCULATE" };

const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
        setTipPercent: (state, action) => {
            state.tipPercent = action.payload;
        },
        setPeople: (state, action) => {
            state.people = action.payload;
        },
        setTipAmount: (state, action) => {
            state.tipAmount = action.payload;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setText: (state, action) => {
            state.text = action.payload
        }
    }

})


export const { setAmount, setTipPercent, setPeople, setTipAmount, setTotal, setText } = mySlice.actions;
export default mySlice.reducer;