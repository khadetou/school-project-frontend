import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface RepositoryProductState {
  loading: boolean;
  error: string | null;
  success: boolean;
  data: string | null;
}

const initialState = {
  loading: false,
  error: null,
  success: false,
  data: null,
};

const reducers = (
  state: RepositoryProductState = initialState,
  action: Action
): RepositoryProductState => {
  switch (action.type) {
    case ActionTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.UPDATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        success: true,
      };
    case ActionTypes.CREATE_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducers as updateProductReducer };
