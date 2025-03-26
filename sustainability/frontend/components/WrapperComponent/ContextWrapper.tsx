import React from 'react'
import { createContext, useState } from 'react';

const AppContext = createContext({}); 

const ContextWrapper = ({children}) => {

  const [food, setFood] = useState({
    foodName: "",
    foodAmount: 0,
    foodCategory: "",
    foodExpirationDate: new Date(),
    foodDescription: "",
    foodAllergen: ""
  })

  const updateFood = (updates: Partial<typeof food>) => { 
    setFood(prev => ({
        ...prev,
        ...updates, 
    }));
  };



  return (
    <AppContext.Provider value={{food, updateFood}}>
        {children}
    </AppContext.Provider>
  )

}

export default ContextWrapper