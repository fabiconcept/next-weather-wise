"use client";

import { Provider } from "react-redux";
import store from "..";

/**
 * The `Providers` function is a React component that wraps its children with a Redux `Provider`
 * component, passing in a `store` prop.
 * @returns The Providers component is returning the children component wrapped in a Provider component
 * with the store prop set to the store variable.
 */
export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}