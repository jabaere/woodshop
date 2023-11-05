import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
});
