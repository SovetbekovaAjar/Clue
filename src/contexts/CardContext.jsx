import React, { createContext, useContext, useReducer } from "react";

export const cardContext = createContext();

export function useCardContext() {
  return useContext(cardContext);
}

const initState = {};

function reducer(state, action) {}

function CardContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = {};

  return <cardContext.Provider value={value}>{children}</cardContext.Provider>;
}

export default CardContext;
