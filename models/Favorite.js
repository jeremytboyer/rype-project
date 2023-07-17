const { Model, DataTypes } = require('sequelize');
const db = require('../db/connection');


class Favorite extends Model {}

Favorite.init({
    recipeId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 3
        }
      },
    recipeTitle: {
        type: DataTypes.STRING
    },
    recipeImg: {
        type: DataTypes.STRING
    }
    
    }, {
      sequelize: db,
      modelName: 'favorite'
    })


module.exports = Favorite;
