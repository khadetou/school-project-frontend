import { ActionTypes } from "../action-types";

interface CreateProductsAction {
  type: ActionTypes.CREATE_PRODUCTS;
}

interface CreateProductsSuccessAction {
  type: ActionTypes.CREATE_PRODUCTS_SUCCESS;
  payload: string[];
}

interface CreateProductsFailureAction {
  type: ActionTypes.CREATE_PRODUCTS_FAILURE;
  payload: string;
}

interface UpdateProductsAction {
  type: ActionTypes.UPDATE_PRODUCTS;
}

interface UpdateProductsSuccessAction {
  type: ActionTypes.UPDATE_PRODUCTS_SUCCESS;
  payload: string;
}

interface UpdateProductsFailureAction {
  type: ActionTypes.UPDATE_PRODUCTS_FAILURE;
  payload: string;
}

interface DeleteProductsAction {
  type: ActionTypes.DELETE_PRODUCTS;
}

interface DeleteProductsSuccessAction {
  type: ActionTypes.DELETE_PRODUCTS_SUCCESS;
  payload: string;
}

interface DeleteProductsFailureAction {
  type: ActionTypes.DELETE_PRODUCTS_FAILURE;
  payload: string;
}

interface GetProductsAction {
  type: ActionTypes.GET_PRODUCTS;
}

interface GetProductsSuccessAction {
  type: ActionTypes.GET_PRODUCTS_SUCCESS;
  payload: string[];
}

interface GetProductsFailureAction {
  type: ActionTypes.GET_PRODUCTS_FAILURE;
  payload: string;
}

interface GetProductsByIdAction {
  type: ActionTypes.GET_PRODUCTS_BY_ID;
}

interface GetProductsByIdSuccessAction {
  type: ActionTypes.GET_PRODUCTS_BY_ID_SUCCESS;
  payload: string;
}

interface GetProductsByIdFailureAction {
  type: ActionTypes.GET_PRODUCTS_BY_ID_FAILURE;
  payload: string;
}

export type Action =
  | CreateProductsAction
  | CreateProductsSuccessAction
  | CreateProductsFailureAction
  | UpdateProductsAction
  | UpdateProductsSuccessAction
  | UpdateProductsFailureAction
  | DeleteProductsAction
  | DeleteProductsSuccessAction
  | DeleteProductsFailureAction
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction
  | GetProductsByIdAction
  | GetProductsByIdSuccessAction
  | GetProductsByIdFailureAction;
