import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: number;
  spicy: boolean;
}

const initialState: {
  value: CartItem[];
} = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
