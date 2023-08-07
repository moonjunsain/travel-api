const {Model, DataTypes} = require('sequelize')

class Location extends Model {}

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'location'
    }
)

module.exports = Location