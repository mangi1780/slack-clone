import React, { useContext, createContext, useReducer } from "react";

//using contextAPIs as data layer for managing the state
export const stateContext = new createContext();

export const StateProvider = ({ reducer, children, initialState }) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}</stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);