import { Sequelize, DataTypes } from '@sequelize/core';

const sequelize = new Sequelize({ 
    dialect: "sqlite", 
    storage: "authentication.sqlite",
}); 

export const Food = sequelize.define("Goal", {

    foodName: {type: DataTypes.STRING, allowNull: false},
    foodAmount: { type: DataTypes.INTEGER, allowNull: false},
    foodCategory: { type: DataTypes.STRING, allowNull: true},
    foodExpirationDate: { type: DataTypes.DATE, allowNull: false},
    foodDescription: { type: DataTypes.TEXT, allowNull: true},
    foodAllergy: {type: DataTypes.STRING, allowNull: true},

})

await sequelize.sync(); 

export default Food; 