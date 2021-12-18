import { combineReducers } from "redux";
import { reducer as createReducer } from "./createProduct";
import { deleteProductReducer } from "./deleteProduct";
import { getProductsReducer } from "./getProducts";
import { updateProductReducer } from "./updateProduct";
import { getProductByIdReducer } from "./getProductById";

const reducers = combineReducers({
  createProduct: createReducer,
  deleteProduct: deleteProductReducer,
  getProducts: getProductsReducer,
  updateProduct: updateProductReducer,
  getProductById: getProductByIdReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
