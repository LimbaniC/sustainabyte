import { FoodType } from "../../frontend/components/FoodComponent/FoodComponent";


export const FOOD_DATA: FoodType[] = [
  {
    id: 1,
    foodName: "Apples",
    foodAmount: 10,
    foodCategory: "Fruits",
    foodExpirationDate: new Date("2025-04-15"),
    foodDescription: "Fresh red apples",
    foodAllergen: "None",
    value: 5
  },
  {
    id: 2,
    foodName: "Peanut Butter",
    foodAmount: 2,
    foodCategory: "Spreads",
    foodExpirationDate: new Date("2026-08-10"),
    foodDescription: "Creamy peanut butter",
    foodAllergen: "Peanuts",
    value: 8
  },
  {
    id: 3,
    foodName: "Milk",
    foodAmount: 1,
    foodCategory: "Dairy",
    foodExpirationDate: new Date("2025-03-31"),
    foodDescription: "1 gallon of whole milk",
    foodAllergen: "Dairy",
    value: 4
  },
  {
    id: 4,
    foodName: "Brown Rice",
    foodAmount: 5,
    foodCategory: "Grains",
    foodExpirationDate: new Date("2027-01-20"),
    foodDescription: "Organic brown rice",
    foodAllergen: "None",
    value: 6
  },
  {
    id: 5,
    foodName: "Eggs",
    foodAmount: 12,
    foodCategory: "Protein",
    foodExpirationDate: new Date("2025-04-02"),
    foodDescription: "One dozen large eggs",
    foodAllergen: "Eggs",
    value: 3
  }
    
  ];


  