import React from "react";

const AutContext = React.createContext({
    login: true,
    cartItems: [],
    updateCartItems: () => {}
});

export default AutContext;