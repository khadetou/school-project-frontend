import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface RepositoryProductState {
  loading: boolean;
  error: string | null;
  data: string[] | null;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoryProductState = initialState,
  action: Action
): RepositoryProductState => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ActionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducer as getProductsReducer };
