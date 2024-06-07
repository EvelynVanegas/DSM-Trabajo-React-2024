import React from "react";

const AutContext = React.createContext({
    login: false,
    cartItems: [],
    updateCartItems: () => { },
    loginEmail: null,
    updateLoginEmail: () => { }
});

export default AutContext;