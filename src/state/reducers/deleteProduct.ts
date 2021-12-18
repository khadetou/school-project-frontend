import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface RepositoryProductState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initalState = {
  loading: false,
  error: null,
  success: false,
};

const reducer = (
  state = initalState,
  action: Action
): RepositoryProductState => {
  switch (action.type) {
    case ActionTypes.DELETE_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ActionTypes.DELETE_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducer as deleteProductReducer };
