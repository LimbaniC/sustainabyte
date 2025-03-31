import React from 'react'
import { createContext, useState } from 'react';
import { useContext } from 'react';
import { FoodType } from '../FoodComponent/FoodComponent';
import { ReactNode } from 'react';

interface AppContextType {
    food: FoodType, 
    foodList: FoodType[],
    updateFood: (updates: Partial<FoodType>) => void;
    addToFoodList: (food: FoodType) => void;
    searchTerm: string,
    searchFilter: (item: FoodType[]) => FoodType[];
    setSearch: (e: string) => void
    //setSearch: (e: React.FormEvent<HTMLFormElement>) => void;
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

 const [foodList, setFoodList] = useState<FoodType[]>([]);

 const addToFoodList = (food: FoodType) => { 
    setFoodList([...foodList, food]);
 };


  const updateFood = (updates: Partial<typeof food>) => { 
    setFood(prev => ({
        ...prev,
        ...updates, 
    }));

  };

  const [searchTerm, setSearchTerm] = useState(""); 

    // const setSearch = (e: React.FormEvent<HTMLFormElement>) => { 
    //   const target = e.target as HTMLInputElement;
    //   setSearchTerm(target.value);
    // }

    const setSearch = (value: string) => {
      setSearchTerm(value);
    }

    const searchFilter = (list: FoodType[]) => { 
      return list.filter((item) => 
        item.foodName.toLowerCase().includes(searchTerm.toString().toLowerCase())
      );
    }
  



  return (
    <AppContext.Provider value={{food, foodList, searchTerm, searchFilter, setSearch, updateFood, addToFoodList}}>
        {children}
    </AppContext.Provider>
  )

}

export default ContextWrapper;