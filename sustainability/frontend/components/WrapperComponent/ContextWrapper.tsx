import React from 'react'
import { createContext, useState } from 'react';
import { useContext } from 'react';
import { FoodType } from '../FoodComponent/FoodComponent';
import { ReactNode } from 'react';

interface AppContextType {
    food: FoodType, 
    updateFood: (updates: Partial<FoodType>) => void;
}

export const AppContext = createContext<AppContextType | undefined >(undefined); 

export const useAppContext = () => { 

    const context = useContext(AppContext);

    if (!context){
        throw new Error("useAppContext must be used within a ContextWrapper");
    }

    return context; 
}

const ContextWrapper = ({children}: {children: ReactNode}) => {

  const [food, setFood] = useState<FoodType>({
    id: 0,
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