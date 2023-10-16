import { createSlice } from "@reduxjs/toolkit";
import { ORDERS } from "../../components/Order/OrdersTable/ordersData";

const initialState = {
  items: ORDERS,
  prices: null,
  productItems: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items = action.payload;
    },
    updateQuantity: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.order_id == action.payload.singleUserId
      );
      const itemIndex = state.items[index].items.findIndex(
        (basketItem) => basketItem.order_item_id == action.payload.productId
      );

      if (itemIndex >= 0) {
        if (action.payload.quantity > 0) {
          state.items[index].items[itemIndex].quantity =
            action.payload.quantity;
        } else {
          let newBasket = [...state.items];
          newBasket[index].items.splice(itemIndex, 1);
          state.items = newBasket;
        }
      } else
        console.warn(
          `Can't remove product ${action.payload.id} as its does not exist!`
        );
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.order_id == action.payload.singleUserId
      );
      const itemIndex = state.items[index].items.findIndex(
        (basketItem) => basketItem.order_item_id == action.payload.productId
      );
      let newBasket = [...state.items];

      if (itemIndex >= 0) newBasket[index].items.splice(itemIndex, 1);
      else
        console.warn(
          `Can't remove product ${action.payload.id} as its does not exist!`
        );

      state.items = newBasket;
    },

    totalPrice: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.order_id == action.payload
      );
      const total = state.items[index]?.items?.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.prices = total;
    },
    totalItems: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.order_id == action.payload
      );
      const item = state.items[index]?.items?.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.productItems = item;
    },
    updatePaymentStatus: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.order_id == action.payload.id
      );
      state.items[index].financial_status = action.payload.value;
    },
    updateFulfillmentStatus: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.order_id == action.payload.id
      );
      state.items[index].fulfillment_status = action.payload.value;
    },
    updateShippingStatus: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.order_id == action.payload.id
      );
      state.items[index].order_status = action.payload.value;
    },
    sortByOrder: (state, action) => {
      state.items.sort((a, b) => {
        console.log(a.order_id);
        console.log(b.order_id);
        // if (action.payload === "asc") {
        //   return a?.order_id?.localeCompare(b?.order_id);
        // } else {
        //   return b?.order_id?.localeCompare(a.order_id);
        // }
      });
    },
    sortByCustomers: (state, action) => {
      state.items.sort((a, b) => {
        if (action.payload === "asc") {
          return a.client.localeCompare(b.client);
        } else {
          return b.client.localeCompare(a.client);
        }
      });
    },
    sortByDate: (state, action) => {
      state.items.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);

        if (action.payload === "asc") {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });
    },
    sortByTotal: (state, action) => {
      state.items.sort((a, b) => {
        const totalA = parseFloat(a.grand_total);
        const totalB = parseFloat(b.grand_total);

        if (action.payload === "asc") {
          return totalA - totalB;
        } else {
          return totalB - totalA;
        }
      });
    },
    searchByOrders: (state, action) => {
      console.log(action.payload);
      state.items = ORDERS.filter((order) => {
        const customerName = order.client.toLowerCase();
        const searchTerm = action.payload.toLowerCase();

        return customerName.includes(searchTerm);
      });
    },
  },
});

export const {
  removeFromBasket,
  updateQuantity,
  addItems,
  totalPrice,
  totalItems,
  updatePaymentStatus,
  updateFulfillmentStatus,
  updateShippingStatus,
  sortByOrder,
  sortByCustomers,
  sortByDate,
  sortByTotal,
  searchByOrders,
} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.prices;
export const selectTotalItems = (state) => state.basket.productItems;

export default basketSlice.reducer;
