import { Children, createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType{
    isAuthenicated: boolean;
    updateAuth: (flat: boolean) => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{children: ReactNode}> = ({
    children,
}) => {
    const [isAuthenicated, setAuthenticated] = useState<boolean>(false);
    const updateAuth = (flag: boolean) => {
        setAuthenticated(flag);
    };

    useEffect(() => {
     const authObject = localStorage.getItem("user");
     if(authObject){
        setAuthenticated(true);
     } 
    }, []);

    
    return <AuthContext.Provider value={{isAuthenicated, updateAuth}}>
        {children}
        </AuthContext.Provider>;
};