import {ADD_TO_CART, PRODUCT_FETCH_SUCCESS} from "../actions/ActionTypes";
import {combineReducers} from 'redux'
import React from "react";
import LocalSave from "../common/LocalSave";

let initSate = {
  addedItems:[],
  total: 0
}

export const cartReducer = (state=initSate, action) =>{
  switch (action.type) {
    case ADD_TO_CART :
      console.log("state",state);
    default: // need this for default case
      return state
  }
}
