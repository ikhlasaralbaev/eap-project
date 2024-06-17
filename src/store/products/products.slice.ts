import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "mocks/products.mocks";

interface IInitialState {
  basket: IProduct[];
}

const initialState: IInitialState = {
  basket: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToBasket: (state, action: PayloadAction<IProduct>) => {
      const oldIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (oldIndex === -1) {
        state.basket = [...state.basket, action.payload];
      }
    },
    removeProductFromBasket: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProductToBasket, removeProductFromBasket } =
  productsSlice.actions;
export default productsSlice.reducer;
