import { Context, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userCheckLogin = localStorage.getItem('isLogged');
    if(userCheckLogin === "true") {
      setIsLoggedIn(true);
    }
  }, [])

    const loginHandler = (email, password) => {
 
        localStorage.setItem('isLogged', true)
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLogged')
    };
    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }} >{props.children}</AuthContext.Provider>
}

export default AuthContext;