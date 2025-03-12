import Food from "../models/food.js";


export const createFood = async (req, res) => {

    const { foodName, foodAmount, foodCategory, foodExpirationDate, foodDescription, foodAllergy } = req.body; 

    try { 

        await Food.create({
            foodName,
            foodAmount,
            foodCategory,
            foodExpirationDate,
            foodDescription,
            foodAllergy
        });


        return res.status(201).json({
            message: "Food added successfully", 
            food: { 
                foodName,
                foodAmount,
                foodCategory,
                foodExpirationDate,
                foodDescription,
                foodAllergy,
                //id: createdFood.id,
            }
        })
    }

    catch (error) { 
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
        return;
    }
}

export const getFood = async (req, res) => { 

    try { 

        const { foodId } = req.params; 

        const food = await Food.findByPk(foodId); 

        if (!food){ 
            return res.status(404).json({ message: "Food not found" });  // Return 404 if food not found
        }

        return res.status(200).json({message: "Food found", foodName: food.name})

    }
    catch (err) { 
        console.error(err); 
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }


}

//update food 

    export const updateFood = async (req, res) => { 

        const { foodId } = req.params; 

        try { 

            const food = await Food.findByPk(foodId); 

            if (!food){ 
                return res.status(404).json({ message: "Food not found" });  // Return 404 if food not found
            }

            // const updatedFood = await food.update(req.body); 

            const { foodName,
                foodAmount,
                foodCategory,
                foodExpirationDate,
                foodDescription,
                foodAllergy } = req.body; 

            const updatedFood = await food.update({
                foodName,
                foodAmount,
                foodCategory,
                foodExpirationDate,
                foodDescription,
                foodAllergy,
            });

            
            return res.status(200).json({ message: "Food updated successfully", food: updatedFood });

        }

        catch (error) { 
            console.error(error);
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    }

//delete food 

export const deleteFood = async (req, res) => { 
    
    const { foodId } = req.body;

    try { 

        const food = await Food.findByPk(foodId);

        if (!food) { return res.status(404).json({ message: "Food not found, enter another Id" }); }

        await food.destroy();



    }
    catch (error){ 
        console.error(error); 
        res.status(500).json({ message: "Internal Server Error", error: error.message });

    }
}