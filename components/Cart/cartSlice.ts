import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItemProps {
  id: string;
  name: string;
  image: string;
  label: string;
  price: number;
  quantity: number;
  spicy: boolean;
}

const initialState: CartItemProps[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItemProps>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
