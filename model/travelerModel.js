const {Model, DataTypes} = require('sequelize')

class Traveler extends Model {}

Traveler.init(
   
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'traveler'
    }
    
)

module.exports = Traveler