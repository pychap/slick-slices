import React, { useState } from 'react';

// Create an order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // need to stick state into here
  const [order, setOrder] = useState([]);
  return <OrderContext.Provider value={[order, setOrder]}>
    {children}
  </OrderContext.Provider>
}

export default OrderContext;