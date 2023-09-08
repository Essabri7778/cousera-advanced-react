import { createContext,useContext,useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [user,setUser] = useState({
        name: "Zahrae",
        email:"essabri@gmail.com",
        dob:"03/08/2001",
    });
    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
}

export const useUSer = () => useContext(UserContext);