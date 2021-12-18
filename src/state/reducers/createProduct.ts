import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface RepositoryProductState {
  loading: boolean;
  error: string | null;
  data: any[] | null;
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
    case ActionTypes.CREATE_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.CREATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
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

export { reducer };
