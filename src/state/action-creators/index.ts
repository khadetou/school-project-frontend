import axios from "axios";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

//CREATE PRODUCT
export const createProduct = (product: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.CREATE_PRODUCTS });
    try {
      const response = await axios.post(
        "http://localhost:3001/products",
        product
      );
      dispatch({
        type: ActionTypes.CREATE_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.CREATE_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

//GET PRODUCTS WITH FILTERS
export const getProducts = (search = "") => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.GET_PRODUCTS });
    try {
      const response = await axios.get(
        `http://localhost:3001/products?search=${search}`
      );
      dispatch({
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

//GET PRODUCT BY ID
export const getProductById = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.GET_PRODUCTS_BY_ID });
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      dispatch({
        type: ActionTypes.GET_PRODUCTS_BY_ID_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.GET_PRODUCTS_BY_ID_FAILURE,
        payload: error.message,
      });
    }
  };
};

//UPDATE PRODUCT
export const updateProduct = (id: string, product: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.UPDATE_PRODUCTS });
    try {
      const response = await axios.put(
        `http://localhost:3001/products/${id}`,
        product
      );
      dispatch({
        type: ActionTypes.UPDATE_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.UPDATE_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

//DELETE PRODUCT
export const deleteProduct = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.DELETE_PRODUCTS });
    try {
      const response = await axios.delete(
        `http://localhost:3001/products/${id}`
      );
      dispatch({
        type: ActionTypes.DELETE_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.DELETE_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};
