import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0, idUpdate:0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    IDForUpdateAction(state, action) {
      state.idUpdate = action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount, IDForUpdateAction } = counterSlice.actions
export default counterSlice.reducer