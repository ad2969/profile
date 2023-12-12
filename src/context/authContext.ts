import { Dispatch, SetStateAction, createContext } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
} as AuthContextType);
