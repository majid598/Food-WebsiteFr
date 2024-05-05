import { createSlice } from "@reduxjs/toolkit";

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    // Handle errors, such as quota exceeded
  }
};

const initialState = loadCartState() || {
  items: [],
  totalItems: 0,
  subtotal: 0,
  tax: 0,
  shippingCharges: 0,
  total: 0,
  shippingInfo: {
    houseNumber: "",
    city: "",
    country: "",
    state: "",
    pinCode: "",
    phoneNumber: "",
  },
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { itemNum, title, price, img } = action.payload;
      const existingItem = state.items.find((item) => item.itemNum === itemNum);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ itemNum, title, price, img, quantity: 1 });
      }

      state.totalItems += 1;
      state.totalPrice += price;
      saveCartState(state);
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((i) => i.itemNum !== action.payload);
    },
    removeFromCart(state, action) {
      const { itemNum } = action.payload;
      const existingItem = state.items.find((item) => item.itemNum === itemNum);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.itemNum !== itemNum);
        } else {
          existingItem.quantity -= 1;
        }

        state.totalItems -= 1;
        state.totalPrice -= existingItem.price;
        saveCartState(state);
      }
    },
    updateQuantity(state, action) {
      const { itemNum, quantity } = action.payload;
      const item = state.items.find((item) => item.itemNum === itemNum);

      if (item) {
        state.totalItems += quantity - item.quantity;
        state.totalPrice += (quantity - item.quantity) * item.price;
        item.quantity = quantity;
        saveCartState(state);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalItems = 0;
      state.total = 0;
      saveCartState(state);
    },
    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    calculateTotalPrice: (items) => {
      return items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    calculatePrice: (state) => {
      const subtotal = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      state.subtotal = subtotal;
      state.shippingCharges = state.subtotal > 1000 ? 0 : 200;
      state.tax = Math.round(state.subtotal * 0.08);
      state.total = state.subtotal + state.tax + state.shippingCharges;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  saveShippingInfo,
  calculateTotalPrice,
  removeCartItem,
  calculatePrice,
} = cartReducer.actions;
export default cartReducer;
