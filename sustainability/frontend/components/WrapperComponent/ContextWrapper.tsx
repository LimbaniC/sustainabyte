import React, {useEffect} from 'react'
import { createContext, useState } from 'react';
import { useContext } from 'react';
import { FoodType } from '../FoodComponent/FoodComponent';
import { ReactNode } from 'react';
import { FOOD_DATA } from '../../../backend/DATA/FoodData';
import FoodList from '../FoodComponent/FoodList/FoodList';

interface AppContextType {
    food: FoodType, 
    foodList: FoodType[],
    updateFood: (updates: Partial<FoodType>) => void;
    addToFoodList: (food: FoodType) => void;
    removeFromFoodList: (index: number) => void;
    searchTerm: string,
    searchFilter: (item: FoodType[]) => FoodType[];
    setSearch: (e: string) => void,
    savedFoods: FoodType[],
    donatedFoods: FoodType[],
    addSavedFood: (food:FoodType) => void;
    addDonatedFood: (food:FoodType) => void;
    removeDonatedFood: (index:number) => void;
    removeSavedFood: (index:number) => void;
    setSavedFoods: (savedFoods:FoodType[]) => void;
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
    foodAllergen: "", 
    imageUrl: ""
  })

//  const [foodList, setFoodList] = useState<FoodType[]>(FOOD_DATA); 

const [foodList, setFoodList] = useState<FoodType[]>(() => {
  const stored = localStorage.getItem("foodList");
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as FoodType[];
      return parsed.map((f) => ({
        ...f,
        foodExpirationDate: new Date(f.foodExpirationDate),
      }));
    } catch (err) {
      console.error("Invalid localStorage data for foodList", err);
    }
  }
  return FOOD_DATA;
});

const [savedFoods, setSavedFoods] = useState<FoodType[]>([]);

const [donatedFoods, setDonatedFoods] = useState<FoodType[]>([]);

const removeSavedFood = (indexToRemove: number) => {
  addToFoodList(savedFoods.filter((_, index) => index === indexToRemove)[0]);
  setSavedFoods(savedFoods.filter((_, index) => index !== indexToRemove));
};

const removeDonatedFood = (indexToRemove: number) => {
  setDonatedFoods(donatedFoods.filter((_, index) => index !== indexToRemove));
};



const removeFromFoodList = (idToRemove: number) => {
  setFoodList((prev) => prev.filter((f) => f.id !== idToRemove));
};
const addSavedFood = (food: FoodType) => {
  setSavedFoods([...savedFoods, food]);
};

const addDonatedFood = (food: FoodType) => {
  setDonatedFoods([...donatedFoods, food]);
};

 
useEffect(() => {
  localStorage.setItem("foodList", JSON.stringify(foodList));
}, [foodList]);

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


  
    // const [isLoggedIn, setLoginState] = useState(false);

    // setLoginState = (value: boolean) => {
    //     isLoggedIn = value;
    // };

  return (
    <AppContext.Provider value={{food, foodList, searchTerm, savedFoods,donatedFoods, searchFilter, setSearch, updateFood, addToFoodList,addSavedFood,addDonatedFood,removeDonatedFood,removeSavedFood,removeFromFoodList,setSavedFoods}}>
        {children}
    </AppContext.Provider>
  )

}

export default ContextWrapper;