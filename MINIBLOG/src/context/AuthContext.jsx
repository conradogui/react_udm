import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthPtovider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}
